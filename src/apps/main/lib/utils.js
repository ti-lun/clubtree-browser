import _ from "lodash";

export function convertSizeChar(s) {
  switch(s) {
    case "s":
      return "Small";
    case "m":
      return "Mid-sized";
    case "l":
      return "Large";
  }
}

export function generateSearchURL(params: object) {
    let url = '/search';
    let query = [];

    Object.keys(params).forEach(function (key, index) {
        let value = params[key];

        if (_.isString(value)) {
            query.push(key + '=' + encodeURIComponent(value));
        } else if (_.isNumber(value)) {
            query.push(key + '=' + encodeURIComponent(value));
        } else if (_.isArray(value)) {
            value = _.filter(value, _.negate(_.isNil));
            query = query.concat(value.map((elem) => key + '=' + encodeURIComponent(elem)));
        }
    });

    query = query.join('&');

    if (query) {
        url = url + '?' + query
    }

    return url;
}