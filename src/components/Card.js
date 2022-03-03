import React from 'react';
import phoneIcon from '../icons/phone-icon.png';
import emailIcon from '../icons/mail-icon.png';
import styles from './Card.module.css';

const Card = ({ card, onShow }) => {
  const { name, phone, email } = card;

  // Для валидного html убрал пробелы в телефонах
  const formattedPhone = phone.split(' ').join('');

  return (
    <li className={styles.card} onClick={(ev) => onShow(ev, card)}>
      <h2 className={styles['card__name']}>{name}</h2>
      <div className={styles['card__link-item']}>
        <img className={styles['card__icon']} src={phoneIcon} alt="phone" />
        <a className={styles['card__link']} href={`tel:${formattedPhone}`}>
          {formattedPhone}
        </a>
      </div>
      <div className={styles['card__link-item']}>
        <img className={styles['card__icon']} src={emailIcon} alt="e-mail" />
        <a
          className={`${styles['card__link']} ${styles['card__link_underline']}`}
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </div>
    </li>
  );
};

export default Card;
