import { SendOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  border: none;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely update from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your Email.." />
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
