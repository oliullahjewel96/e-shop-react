import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Hr = styled.hr`
  background-color: #e6e6e6;
  height: 1px;
  border: none;
  margin-bottom: 20px;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 110px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 300;
  letter-spacing: 1.2px;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title> Your Cart </Title>
        <Top>
          <TopButton> CONTINUE SHOPPING </TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(2)</TopText>
          </TopTexts>
          <TopButton type="filled"> CHECKOUT NOW </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?cs=srgb&dl=pexels-mnz-1670766.jpg&fm=jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOE
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 38765374887
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5{" "}
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$100</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?cs=srgb&dl=pexels-mnz-1670766.jpg&fm=jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOE
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 38765374887
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5{" "}
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$100</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>{" "}
      <Footer />
    </Container>
  );
};

export default Cart;
