import moment from 'moment';
import Auth from 'helpers/Auth';
import QueryParams from 'helpers/QueryParams';

function urlBase64Decode(str) {
  let output = str.replace('-', '+').replace('_', '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw new Error('Illegal base64url string!');
  }
  return window.atob(output);
}

function getClaimsFromToken(token) {
  let claims = {};
  if(token === undefined || token === 'undefined' || token === null || token === 'null' || token === '') {
    return null;
  }
  const encoded = token.split('.')[1];
  if(!encoded) {
    return null;
  }
  try {
    claims = JSON.parse(urlBase64Decode(encoded));
  } catch (e) {
    return null;
  }
  return claims;
}

function isTokenExpired(expTime, expDiff = 20) {
  const nowTimestamp = moment().utc().unix();
  const diff = expTime - nowTimestamp;
  if(diff <= expDiff) {
    return true;
  }
  return false;
}

export default () => {
  const logout = QueryParams.getParam('logout');
  if(logout) {
    Auth.deleteToken();
  } else {
    const tokenFromQuery = QueryParams.getParam('token');
    if(tokenFromQuery) {
      Auth.setToken(tokenFromQuery);
    }

    if(Auth.isTokenExists()) {
      const token = Auth.getToken();
      const claims = getClaimsFromToken(token);
      if(!claims) {
        Auth.deleteToken();
      } else {
        const isExpired = isTokenExpired(claims.exp);
        if(isExpired) {
          Auth.logout();
        }
      }
    }
  }
};
