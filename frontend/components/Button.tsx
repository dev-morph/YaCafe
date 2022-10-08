import React from 'react';
import styles from '../styles/button.module.scss';

type ButtonTypes = {
  content: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ content, onClick }: ButtonTypes) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
