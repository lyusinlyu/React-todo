class Auth {
  static setToken(token) {
    localStorage.setItem('token', token);
  }
}

export default Auth;
