import React, { useEffect, useState } from "react";
import classes from './ProfileLink.module.css';

/**
 * Компонент ссылки профиля пользователя.
 * Отображает либо ссылку на профиль пользователя, если он вошел в аккаунт,
 * либо две ссылки: "Войти" и "Зарегистрироваться", если пользователь не авторизован.
 * 
 * @component
 * @example
 * <ProfileLink />
 * @returns {JSX.Element} Возвращает JSX-разметку с ссылкой на профиль для авторизованного пользователя 
 * или ссылками "Войти" и "Зарегистрироваться" для неавторизованного пользователя.
 * @see {@link https://github.com/RedStrikeRF} Автор компонента
 */
function ProfileLink() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Получаем данные пользователя из localStorage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      // Проверяем наличие email, чтобы определить, авторизован ли пользователь
      setIsAuthenticated(!!parsedData);
    }
  }, []);
  return (
    <>
      {isAuthenticated ? (
        <a href="/profile" className={classes.profile} />
      ) : (
        <div className={classes.authLinks}>
          <a href="/sign_in" className={classes.linkSignIn}>Войти</a>
          <a href="/sign_up" className={classes.linkSignUp}>Зарегистрироваться</a>
        </div>
      )}
    </>
  );
}

export default ProfileLink;