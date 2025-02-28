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

 

  const getAllCat=["الكل",...new Set( Data.map( (item)=>{
    return item.cat_name
  }))]

  const getSpecificCategory=(catName)=>{

   const Items=Data.filter((i)=>i.cat_name==catName );
if(catName=='الكل'){

  SetData(Data);
  return
}



   SetData(Items);
  }
 
  const[cat,setCat]=useState(getAllCat);
    
 

  return (
    <>
    <Header/>
    <Container>
    <Category getAllCat={getAllCat}  getSpecificCategory={getSpecificCategory}/>
    <Cart data={data}/>
    </Container>
   
    
    </>
  );
}

export default App;
