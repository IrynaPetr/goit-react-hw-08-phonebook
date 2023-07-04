import { useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "redux/auth/authSelectors";
import { Container, StyledLink, Text } from "./HomePage.styled";

function HomePage() {
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  return isAuth ? (
    <Container>
      <Text>Wellcome, {user.name}!</Text>
    </Container>
  ) : (
    <Container>
      <Text>
This is a convenient application so that you can access 
your contacts anywhere and anytime. We know how important it is to stay 
connected and we care about it. Enjoy using it!
      </Text>
      <Container>    
          <StyledLink to='/login'>Login</StyledLink>
      <StyledLink to='/register'>Register</StyledLink>
</Container>
    </Container>
  );
}

export default HomePage;