class Auth {
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static deleteToken() {
    return localStorage.removeItem('token');
  }

  static isTokenExists() {
    return !!localStorage.getItem('token');
  }
}

export default Auth;
