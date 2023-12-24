
import styled from 'styled-components'
import { PopularProducts } from '../data'
import Product from './Product'
import { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
const Container = styled.div`
padding:20px;
display:flex;
flex-wrap: wrap;
`

const  Products = ({cat,filters,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProduct = async () =>{
      try{
        const res = await axiosInstance.get("/api/products");
        console.log(res)

      }
      catch(err){

      };
    };
    getProduct();


  },[cat])
  
  return (
    <Container>
      {PopularProducts.map((item)=>(
        <Product item={item}  key={item.id}/>
      ))}
    </Container>
  )
}

export default Products;
