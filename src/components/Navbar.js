import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
const Component = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })};
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: "2", justifyContent: "center" })};
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
const Navbar = () => {
  return (
    <Component>
      <Wrapper>
        <Left>
          <Language> EN </Language>{" "}
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: "15px" }} />{" "}
          </SearchContainer>{" "}
        </Left>{" "}
        <Center>
          <Logo> E - SHOP </Logo>{" "}
        </Center>{" "}
        <Right>
          <MenuItem> REGISTER </MenuItem> <MenuItem> SIGN IN </MenuItem>{" "}
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingBasketOutlined />
            </Badge>{" "}
          </MenuItem>{" "}
        </Right>{" "}
      </Wrapper>{" "}
    </Component>
  );
};

export default Navbar;
