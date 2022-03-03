import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import closeIcon from '../icons/close-icon.png';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const portalElement = document.getElementById('overlay');

const Modal = ({ card, onClose }) => {
  const { name, phone, email, hire_date, position_name, department, address } =
    card;

  const cardData = (
    <div className={styles.modal}>
      <img
        onClick={onClose}
        src={closeIcon}
        alt="close"
        className={styles['modal__close']}
      />
      <h2 className={styles['modal__name']}>{name}</h2>

      <ul className={styles.table}>
        <li className={styles['table__item']}>
          <p className={styles['table__left-col']}>Телефон:</p>
          <a
            className={`${styles['table__right-col']} ${styles['table__right-col_phone']}`}
            href={`tel:${phone}`}
          >
            {phone}
          </a>
        </li>
        <li className={styles['table__item']}>
          <p className={styles['table__left-col']}>Почта:</p>
          <a className={styles['table__right-col']} href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li className={styles['table__item']}>
          <p className={styles['table__left-col']}>Дата приема: </p>
          <p className={styles['table__right-col']}>{hire_date}</p>
        </li>
        <li className={styles['table__item']}>
          <p className={styles['table__left-col']}>Должность: </p>
          <p className={styles['table__right-col']}>{position_name}</p>
        </li>
        <li className={styles['table__item']}>
          <p className={styles['table__left-col']}>Подразделение: </p>
          <p className={styles['table__right-col']}>{department}</p>
        </li>
      </ul>

      <h3 className={styles['modal__info-title']}>
        Дополнительная информация:
      </h3>
      <p className={styles['modal__info']}>
        Разработчики используют текст Lorem ipsum в качестве заполнителя макета
        страницы. Так как дополнительной информации в JSON нет, а адрес нигде не
        используется закинул его сюда: {address}
      </p>
    </div>
  );
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<>{cardData}</>, portalElement)}
    </>
  );
};

export default Modal;
