import React from 'react';

const login = () => {
  return (
    <>
      <form className="flex-col" action="submit">
        <div className="text__input__wrapper">
          <input type="text" id="id" autoComplete="off" />
          <label htmlFor="id">ID</label>
        </div>
      </form>
    </>
  );
};

export default login;
