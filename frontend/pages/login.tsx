import React from 'react';

const login = () => {
  return (
    <>
      <form className="flex-col" action="submit">
        <div className="text__input__wrapper">
          <input
            id="id"
            className="text__input"
            autoComplete="off"
            type="text"
          />
          <label className="input__label" htmlFor="id">
            <span>ID</span>
          </label>
        </div>
        <div className="text__input__wrapper">
          <input
            id="pw"
            className="text__input"
            autoComplete="off"
            type="password"
          />
          <label className="input__label" htmlFor="pw">
            <span>패스워드</span>
          </label>
        </div>
        <input className="text__input" type="password" />
        <div>asdf</div>
        <div>asdfasdfasdf</div>
        <button></button>
      </form>
    </>
  );
};

export default login;
