import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-Top:1px solid black;
    ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 30px;
    font-family: monospace;
`;

const Logo = styled.h1`
    font-family: monospace;
    font-size: 45px;
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
    gap: 5px;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`;
const Title = styled.h3`
    font-size: 25px;
    font-family: monospace;
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#eee"})}
`;

const ContactItem = styled.div`
margin-bottom:20px
display:flex;
align-items:center;

`;
const Payment = styled.img`
margin-top:30px;

`



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MAMA</Logo>
                <Description>
                    Shop confidently with us and transform your online shopping
                    into an enjoyable and rewarding adventure. Start exploring
                    and find the perfect items to elevate your lifestyle today
                    at MAMA."
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title> Useful Links</Title>

                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                   <MapIcon style={{marginRight:"10px"}}/> 9454 Wilshire Boulevard Suite M-12 Beverly Hills, CA 90212
                </ContactItem>
                <ContactItem>
              <LocalPhoneIcon style={{marginRight:"10px"}}/>  Tel: (310) 678-1055
                </ContactItem>
                <ContactItem>
                   <EmailIcon style={{marginRight: "10px" }}/> contact@mama.dev
                </ContactItem>
                <ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
                </ContactItem>
            </Right>
        </Container>
    );
};

export default Footer;
