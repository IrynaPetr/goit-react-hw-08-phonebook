import AuthForm from "components/AuthForm/AuthForm";
import { email, name, password } from "formEntry/formEntry";
import { useDispatch } from "react-redux";
import { registrationUser } from "redux/auth/authOperations";

const formOptions = [
  {...name, 
    placeholder: 'Your name',
  autoFocus: true,
},
{
  ...email,
  placeholder: 'Your email',
},
{
  ...password,
  placeholder: 'Your password',
},
];

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = user => {
    dispatch(registrationUser(user));
  };

  return (
    <>
    <AuthForm
    options={formOptions}
    initialValue={initialValues}
    onSubmit={handleSubmit}
    buttonTitle="Register"
    />
    </>
  );
}

export default RegisterPage;