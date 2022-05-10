import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  margin: 10px 0;
  min-width: 40%;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.2px;
  margin-top: 20px;
  margin-bottom: 10px;
  &:active {
    transform: scale(0.97);
  }
`;

const Link = styled.a`
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Sign In</Title>
        <Form>
          <Input placeholder="Username " />
          <Input placeholder="Password" />
          <Button> LOGIN </Button> <Link>Forgot Passowrd?</Link>
          <Link>Create a New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
