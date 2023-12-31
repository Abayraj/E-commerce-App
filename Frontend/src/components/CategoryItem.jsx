import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
    flex: 1;
    margin:3px
    height:70vh;
    position:relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height:"30vh"})}
`;
const Title = styled.h1`
    color: white;
    margin: 20px;
    font-family: monospace;
    font-size: 40px;
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
    color: gray;
    border: none;
`;

const CategoryItem = ({ items }) => {
    return (
        <Container>
            <Link to={`/products/${items.categories}`}>
            <Image src={items.imageUrl} />
            <Info>
                <Title>{items.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;
