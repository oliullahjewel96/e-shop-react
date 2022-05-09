import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
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
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> E - SHOP </Logo>{" "}
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quia minima
          porro nihil unde quibusdam.Quis eaque at possimus cum ex, repellendus
          a earum voluptatem laborum ipsam eius neque debitis ducimus ?
        </Desc>{" "}
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>{" "}
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>{" "}
          <SocialIcon color="171515">
            <GitHub />
          </SocialIcon>{" "}
          <SocialIcon color="0072b1">
            <LinkedIn />
          </SocialIcon>{" "}
        </SocialContainer>{" "}
      </Left>{" "}
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> bashundhara, Dhaka
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +88018594985094
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@eshop.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
