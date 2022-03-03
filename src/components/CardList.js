import React from 'react';
import Card from './Card';

import styles from './CardList.module.css';

const CardList = ({ users, onClose, onShow }) => {
  return (
    <ul className={styles['card-list']}>
      {users.map((user) => (
        <Card key={user.email} card={user} onClose={onClose} onShow={onShow} />
      ))}
    </ul>
  );
};

export default CardList;
