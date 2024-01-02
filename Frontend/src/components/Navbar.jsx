import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {mobile} from "../responsive"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    border-bottom: 1px solid black;
    ${mobile({height:"50px"})}
   
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    padding: ;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    ${mobile({justifyContent:"center",flex:2})}
`;

const MeanuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft:"10px",marginTop:"10px" })}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 2px;
`;
const Input = styled.input`
    border: none;
    outline:none;
    ${mobile({width:"50px"})}

`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder="search" />
                        <SearchIcon style={{ color: "gray", fontSize: 18 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>MAMA</Logo>
                </Center>
                <Right>
                    <MeanuItem>REGISTER</MeanuItem>
                    <MeanuItem>SIGN IN</MeanuItem>
                    <Link to="/cart">
                    <MeanuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MeanuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
