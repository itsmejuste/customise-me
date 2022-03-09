const url = "https://abakea-7ad0.restdb.io/rest/sopaies?max=10";

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
    return response.json();
  })

  .then((data) => {
    console.log(data);
  })

  .catch((e) => {
    console.error("An error occurred:", e.message);
  });

function handleData(soap) {
  soap.array.forEach((soap) => {
    consol.log(soap);
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector("product_name").texContent = soap.product_name;
    clone.querySelector("product_price").texContent = soap.product_price;
    clone.querySelector("product_details").texContent = soap.product_details;
    clone.querySelector("weight").texContent = soap.weight;
    clone.querySelector("product_oils").texContent = soap.product_oils;
    clone.querySelector("pproduct_essential_oils").texContent =
      soap.product_essential_oils;
  });
}
