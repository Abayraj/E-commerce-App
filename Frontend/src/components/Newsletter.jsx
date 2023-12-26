import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import styled from "styled-components";
import { mobile } from "../responsive";
import AnimatedNumbers from "react-animated-numbers";
const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-family: monospace;
    font-size: 70px;
    margin: 20px;
    ${mobile({ fontSize: "50px" })}
`;
const Description = styled.div`
    font-size: 25px;
    font-weight: bold;
    font-family: monospace;
    margin-bottom: 30px;
    ${mobile({ textAlign: "center", fontSize: "20px" })}
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`;

const Newsletter = () => {
    // const [num, setNum] = React.useState(331231);
    const year = 1990;
    const symbol = "+"
    return (
        <Container>
            <div className="container">
              <h2>Since</h2>
                <AnimatedNumbers
                    // includeComma
                    // className={styles.container}
                    transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.3,
                    })}
                 
                    animateToNumber={year}
                    fontStyle={{
                        fontSize:30,
                        fontWeight:"bold",
                        color: "black",
                    }}
                />
            </div>
            <Title>Newsletter</Title>
            <Description>
                Get timely updateds from your favorite Products
            </Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendOutlinedIcon />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
