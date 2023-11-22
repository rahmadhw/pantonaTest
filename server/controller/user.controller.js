const { sequelize } = require("../model/index.js");
const bcrypt = require('bcrypt');
const multer = require("multer");
const path = require("path");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../userList/public/gambar");
    },
    filename: function (req, file, cb) {
      cb(
        null, Date.now() + '-' + file.originalname
      );
    },
  });
  const upload = multer({ storage: storage });


const get = async (req, res) => {
    
    try {
        let param = req.body;

        let limit = parseInt(param?.limit || 10);


        let query = "SELECT * FROM users";

        
        if (limit > 0) {
            query += " LIMIT " + limit;
        }
            
        const [rows] = await sequelize.query(query);

        res.status(200).json({
            status: true,
            message: "Get",
            data: rows
        })



    } catch (error) {
        
    }
    
    
   
}


const store = async (req, res) => {


    try {
        
        const param = req.body;
        const hashedPassword = await bcrypt.hash(param.password, 10);


        if (param?.email === "") {
            return res.status(400).json({
                status: false,
                message: "Email Tidak boleh kosong"
            })
        }

        if (param?.nama === "") {
            return res.status(400).json({
                status: false,
                message: "Nama Tidak boleh kosong"
            })
        }

        if (param?.password === "") {
            return res.status(400).json({
                status: false,
                message: "Password Tidak boleh kosong"
            })
        }



        if (!req.file) {
            res.status(422).json({
                status: false,
                message: "gambar harus ditambahkan",
            });
        }


        const image = req.file.path;


        const query = `INSERT INTO users (
            email, nama, password, images
        )
        VALUES ($email, $nama, $password, $image)
        `;

        const [result_id] = await sequelize.query(query, {
            bind: {
                email: param.email,
                nama: param.nama,
                password: hashedPassword,
                image: image
            }
        })


        res.status(200).json({
            status: true,
            message: "ADD Data users",
            data: result_id
        })




    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: [],
         });
    }

}


const update = async (req, res) => {


    try {
        const id = req.params.id;
        const param = req.body;
        const hashedPassword = await bcrypt.hash(param.password, 10);


        if (param?.email === "") {
            return res.status(400).json({
                status: false,
                message: "Email Tidak boleh kosong"
            })
        }

        if (param?.nama === "") {
            return res.status(400).json({
                status: false,
                message: "Nama Tidak boleh kosong"
            })
        }

        if (param?.password === "") {
            return res.status(400).json({
                status: false,
                message: "Password Tidak boleh kosong"
            })
        }



        if (!req.file) {
            res.status(422).json({
                status: false,
                message: "gambar harus ditambahkan",
            });
        }

        let set_update = [];

        for (let item in param) {
        set_update.push(`${item} = $${item}`);
        }


        const image = req.file.path;


        const query = `UPDATE users SET ${set_update} WHERE id_users = $id`;

        const [result_id] = await sequelize.query(query, {
            bind: {
                id:id,
                email: param.email,
                nama: param.nama,
                password: hashedPassword,
                image: image
            }
        })


        res.status(200).json({
            status: true,
            message: "Update Data users",
            data: {
                id: result_id,
                email: param.email,
                nama: param.nama,
                password: param.password,
                image: image
            }
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: [],
         });
    }

}


const destroy = async (req, res) => {


    try {
        id = req.params.id;
        let query = "DELETE users FROM users WHERE id_users = $id";
        const [result_id] = await sequelize.query(query, {
            bind: {id: id}
        });

        res.status(200).json({
            status: true,
            message: "Delete Users",
            data: result_id
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: [],
         });
    }


    
}

module.exports = {
    get,
    store,
    update,
    destroy,
    upload
};