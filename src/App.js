import axios from 'axios';
import React from 'react';

import './App.css';

import CardList from './components/CardList';
import Modal from './components/Modal';
import SearchForm from './components/SearchForm';

function App() {
  const [query, setQuery] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [showPopup, setShowPopup] = React.useState(false);
  const [modalCard, setModalCard] = React.useState(null);

  const appClasses = showPopup ? 'app app_modal-acitve' : 'app';

  const hideModalHandler = () => {
    setShowPopup(false);
  };
  const showModalHandler = (ev, card) => {
    setModalCard(card);
    setShowPopup(true);
  };

  React.useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://127.0.0.1:3000/?term=${query}`);
      setUsers(result.data);
    };

    fetchItems();
  }, [query]);

  return (
    <div className={appClasses}>
      <SearchForm setQuery={setQuery} />
      <CardList users={users} onShow={showModalHandler} />
      {showPopup && <Modal onClose={hideModalHandler} card={modalCard} />}
    </div>
  );
}

export default App;
