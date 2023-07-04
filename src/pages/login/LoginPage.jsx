import AuthForm from "components/AuthForm/AuthForm";
import { email, password } from "formEntry/formEntry"
import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth/authOperations";


const formInput = [
  {
    ...email,
    placeholder:  'Email',
  },
  {
    ...password,
    placeholder: 'Password',
  },
];

const initialValue = {
  email: '',
  password: '',
};

function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = userData => {
    dispatch(loginUser(userData));
  };

  return (
  <>
  <AuthForm
  options={formInput}
  initialValue={initialValue}
  onSubmit={handleSubmit}
  buttonTitle='Login'
  />
  </>);
}

export default LoginPage;