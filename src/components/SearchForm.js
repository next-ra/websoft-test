import React from 'react';
import searchIconBlack from '.././icons/search-icon-black.png';
import searchIconPurple from '.././icons/search-icon-purple.png';
import styles from './SearchForm.module.css';

const SearchForm = ({ setQuery }) => {
  const [focused, setFocused] = React.useState(false);

  const onFocusHandler = () => setFocused(true);
  const onBlurHandler = () => setFocused(false);
  const inputRef = React.useRef();
  const onChangeHandler = (ev) => {
    ev.preventDefault();
    setQuery(inputRef.current.value);
  };
  return (
    <form className={styles.form}>
      <img
        className={styles['form__icon']}
        src={focused ? searchIconBlack : searchIconPurple}
        alt="magnifying glass"
      />
      <input
        ref={inputRef}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        className={styles['form__input']}
        type="text"
      />
    </form>
  );
};

export default SearchForm;
