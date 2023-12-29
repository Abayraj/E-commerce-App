import styled from "styled-components";
import { PopularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Products = ({ cat, filters, sort }) => {
    console.log(filters);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    console.log(cat, "cat inside the product page");

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axiosInstance.get(
                    cat ? `/api/products?category=${cat}` : `/api/products`
                );
                console.log(res);
                setProducts(res.data);
            } catch (err) {}
        };
        getProduct();
    }, [cat]);
    // console.log(filteredProducts, "filterd product value  at ");
    // console.log(cat, filters, sort, "sort");

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if ((sort === "asc")) {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
           
        } 
        else{
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
          
        } 
    }, [sort]);

    return (
        <Container>
            {filteredProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
