import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Category from './Components/Category'
import Cart from './Components/Cart';
import { useEffect, useState } from 'react';
import Data from './Data/Data';
import { Container } from 'react-bootstrap';
function App() {

  const[data,SetData]=useState(Data);

 

 
  const[cat,setCat]=useState();

  return (
    <>
    <Header/>
    <Container>
    <Category />
    <Cart data={data}/>
    </Container>
   
    
    </>
  );
}

export default App;
