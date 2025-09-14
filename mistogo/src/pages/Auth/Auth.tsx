function Auth() {
  return (
    <div>
      <h1>Авторизація / Реєстрація</h1>
      <form>
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Пароль" />
        <br />
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}

export default Auth;
