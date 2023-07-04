const { useEffect, Suspense, lazy } = require('react');
const { useDispatch, useSelector } = require('react-redux');
const { Navigate, Routes, Route } = require('react-router-dom');
const { refreshUser } = require('redux/auth/authOperations');
const { selectIsAuth } = require('redux/auth/authSelectors');
const { Loader } = require('./Loader/Loader');
const { default: Layout } = require('./Layout/Layout');
const { default: HomePage } = require('pages/home/HomePage');

const RegisterPage = lazy(() => import('pages/register/RegisterPage'));
const LoginPage = lazy(() => import('pages/login/LoginPage'));
const ContactsPage = lazy(() => import('pages/contacts/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
dispatch(refreshUser());
  }, [dispatch]);

  const PrivateRoute = ({ component }) => {
    return isAuth ? component :<Navigate to="/"/>;
  };
    const PublicRoute = ({ component, restricted }) => {
      return isAuth && restricted ? <Navigate to="/"/> : component;
    };

    return (
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<PublicRoute component={<HomePage/>} />} />
            <Route path='register' element={<PublicRoute restricted component={<RegisterPage />} />} />
            <Route path='login' element={<PublicRoute restricted component={<LoginPage />} />} />
            <Route path='contacts' element={<PrivateRoute component={<ContactsPage />} />} />
            <Route path='*' element={<Navigate to={isAuth ? '/' : '/login'} />} />
          </Route>
        </Routes>
      </Suspense>
    );
    
  
}

export default App;