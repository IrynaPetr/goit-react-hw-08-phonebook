import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import Form from "components/Form/Form";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import { Container, Title } from "./ContactsPage.styled";

function ContactsPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
            <Form/>
      <Title>  
         Your Contacts {isLoading && <Loader/>}
      </Title>
      <Filter/>
      {error ? <ErrorMessage/> : <ContactList/>}
    </Container>
    
  );
}

export default ContactsPage;