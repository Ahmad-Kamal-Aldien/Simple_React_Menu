import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header=({getSpecificCategory})=>{

  const [getstateWord,setstateWord]= useState('');
  const getWord=()=>{
    getSpecificCategory(getstateWord);
  
  }

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">مطعم</Navbar.Brand>
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setstateWord(e.target.value)}
              value={getstateWord}
            />
            <Button onClick={()=>getWord(getstateWord)} variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
        </>
    );
}
export default Header