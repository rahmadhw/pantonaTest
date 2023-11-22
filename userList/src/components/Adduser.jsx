import React from 'react'
import NavigasiBar from './NavigasBar'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Adduser() {
  return (
    <>
    
    <NavigasiBar />
    <Container className='mt-3'>
       <div>
        <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
                type="email"
                id="email"
            />
       </div>
       <div>
        <Form.Label htmlFor="nama">Nama</Form.Label>
            <Form.Control
                type="text"
                id="nama"
                
            />
       </div>
       <div>
        <Form.Label htmlFor="email">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
            />
       </div>

       <div>
         <Form.Label htmlFor="gambar">Gambar</Form.Label>
         <Form.Control
                type="file"
                id="image"
            />
       </div>
       
       <div className='mt-2'>
         <Button variant="primary">Simpan</Button>
       </div>
    </Container>
    
    </>
  )
}

export default Adduser