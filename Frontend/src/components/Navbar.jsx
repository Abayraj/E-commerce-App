import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {mobile} from "../responsive"

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
    ${mobile({height:"50px"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
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
`;

const MeanuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
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

`;
const Logo = styled.h1`
    font-weight: bold;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{ color: "gray", fontSize: 18 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>MAMA</Logo>
                </Center>
                <Right>
                    <MeanuItem>REGISTER</MeanuItem>
                    <MeanuItem>SIGN IN</MeanuItem>
                    <MeanuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MeanuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
