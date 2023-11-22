import React, { useEffect, useState } from 'react'
import axios from "axios";
import NavigasiBar from './NavigasBar'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';







function UserList() {


    const [userlist, setuserlist] = useState([]);



    const fetchuser = async () => {
        try {
            const url = "http://localhost:3000/api/user"
            const response = await axios.get(url);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    console.log(userlist.data)

    useEffect(() => {
        // setPopularMovies(getMovieList());
        fetchuser().then((result) => {
          setuserlist(result);
        });
      }, []);
    

    const Tabel = () => {
        return userlist.data?.map((user, i) => {
            return (
                <tr>
                    <td>{i + 1}</td>
                    <td>{user.email}</td>
                    <td>{user.nama}</td>
                    <td><img src={`${import.meta.envREACT_APP_BASEIMGURL}/${user.images}`} alt="gambar load" /></td>
                    <td>
                        <Button variant="danger">Delete</Button> 
                        <Button variant="success">Edit</Button> 
                    </td>
                </tr>
            )
        })
    }





  return (
    <>
        <NavigasiBar />
        <Container>
        <Table striped bordered hover variant="light"  className='mt-5'>
            <thead>
                <tr>
                <th>No</th>
                <th>Email</th>
                <th>Nama</th>
                <th>gambar</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <Tabel />
            </tbody>
        </Table>
        </Container>
    </>
  )
}

export default UserList;