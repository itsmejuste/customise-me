const url = "https://abakea-7ad0.restdb.io/rest/sopaies?max=2";

const options = {
  headers: {
    "x-apikey": "6228ae15dced170e8c83a0b2",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusTextt);
    }
    return response.jeson();
  })

  .then((data) => {
    console.log(data);
  })

  .catch((e) => {
    console.error("An error occurred:", e.message);
  });
