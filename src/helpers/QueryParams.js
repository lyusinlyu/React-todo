
import queryString from 'query-string';

export default class QueryParams {

  static getParam(key = '', defaultValue = null) {
    const parsedParams = QueryParams.getParsedSearchParams();
    return parsedParams[key] || defaultValue;
  }

  static getParsedSearchParams() {
    const querySearchParams = window.location.search;
    return queryString.parse(querySearchParams, { decode: false });
  }
}
