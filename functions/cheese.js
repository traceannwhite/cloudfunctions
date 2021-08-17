//We export the function
exports.handler = async function (event, context) {
  //Fetch request details from event object
  const { path, httpMethod, headers, queryStringParameters, body } = event;

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();

  // return some JSON data with a status of 200
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path,
      httpMethod,
      headers,
      queryStringParameters,
      body: data,
    }),
  };
};
