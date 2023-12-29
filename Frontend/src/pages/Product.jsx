import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding:"10px", flexDirection:"column" })}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 500px;
    height: 600px;
    object-fit: cover;
    ${mobile({ width:"45vh"})}
`;
const Title = styled.h1`
`;
const InfoContainer = styled.div`
    flex: 1;
    ${mobile({padding:"10px" })}
`;
const Description = styled.p`
    margin: 20px 0px;
    font-family:monospace;
    font-size: 18px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    ${mobile({ width:"100%" })}

`;
const Filter = styled.div`
    display: flex;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option`
    color: gray;
`;

const AddContainter = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width:"100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    cursor: pointer;

    &:hover{
        opacity:0.8;
    }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    
    const [product,setProduct] = useState({});
    useEffect(()=>{
        const getProduct = async () =>{
            try{
                const res = await axiosInstance.get("/products/find"+id);
                setProduct(res.data);
        
            }
            catch(err){
                
            };
          
        }
        getProduct();
        
      
    },[id])
    console.log(product,"data")
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>
                        A denim jumpsuit is a stylish and versatile one-piece
                        garment typically made from denim fabric, which is a
                        sturdy cotton twill textile known for its durability and
                        casual appeal. The jumpsuit design combines a top and
                        bottom into a single piece, usually featuring a fitted
                        or cinched waist and a top portion resembling a shirt or
                        a top with sleeves.
                    </Description>
                    <Price>$30</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainter>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainter>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
