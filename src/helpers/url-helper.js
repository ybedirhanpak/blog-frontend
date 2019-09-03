import fetch from "cross-fetch";

/* Post Requests */
export const PostWithUrlBody = (url, bodyIn) => {
  var request = fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(bodyIn) // body data type must match "Content-Type" header
  });
  return request;
};

export const PostWithUrlBodyToken = (url, bodyIn, token) => {
  var request = fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json", // "Content-Type": "application/x-www-form-urlencoded"
      Authorization: "Bearer " + token
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(bodyIn) // body data type must match "Content-Type" header
  });
  return request;
};

/* Get Requests */
export const GetWithUrl = url => {
  var request = fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
  });
  return request;
};

export const GetWithUrlToken = (url, token) => {
  var request = fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json", // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + token
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
  });
  return request;
};

/**
 * Generates a final url with queries
 * @param baseUrl is the url without queries
 * @param queryList is the list of queries where each query is string in format: "key=value"
 */
export const GenerateUrlWithQuery = (baseUrl, queryList) => {
  let length = queryList.length;
  if (length) {
    baseUrl += "?";
  }
  queryList.forEach((query, index) => {
    if (index < length - 1) {
      baseUrl += query + "&";
    } else {
      baseUrl += query;
    }
  });
  return baseUrl;
};
