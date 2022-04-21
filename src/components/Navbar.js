import styled from "styled-components";
const Component = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
`;

const Navbar = () => {
  return (
    <Component>
      <Wrapper>navbar</Wrapper>
    </Component>
  );
};

export default Navbar;
