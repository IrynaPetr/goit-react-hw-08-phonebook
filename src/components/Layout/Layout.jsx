import { useSelector } from 'react-redux';
import {
  Container,
  StyledLink,
  Header,
  SiteNav
} from './Layout.styled';
import { selectIsAuth } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MainTitle } from 'pages/contacts/ContactsPage.styled';


function Layout() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Container>
      <Header>
        <SiteNav>
          <StyledLink to="/">Home</StyledLink>
          {isAuth && 
          <StyledLink to="/contacts">Contacts</StyledLink>}
        </SiteNav>
        <MainTitle>
        PhoneBook
      </MainTitle>
        {!isAuth && (
          <SiteNav>
            <StyledLink to='/register'>Register</StyledLink>
            <StyledLink to='/login'>Login</StyledLink>
          </SiteNav>
        )}
        {isAuth && <UserMenu/>}
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
    </Container>
  )
}

export default Layout;