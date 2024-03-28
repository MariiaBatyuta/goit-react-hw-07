import { useEffect } from 'react';
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectLoading } from './redux/contactSlice';
import { PuffLoader } from 'react-spinners';

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        
        {error && <p><b>Ooops. Something went wrong, please reload the page.</b></p>}
        {loading && <PuffLoader color="red" loading={true} size={32} />}
        
        <ContactList  />
        
      </div>
    </>
  )
}

export default App;