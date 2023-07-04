import { useDispatch, useSelector } from "react-redux";
import { Container,Name, Button } from "./UserMenu.styled";
import { logoutUser } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors";


function UserMenu() {
  const dispatch = useDispatch();

  const HandleClick = () => {
    dispatch(logoutUser());
  };

  const user = useSelector(selectUser);
  return (
    <Container>
      <Name>{user.name}</Name>
      <Button 
      type="button"
      onClick={HandleClick}
      >Logout</Button>
    </Container>
  );
}

export default UserMenu;