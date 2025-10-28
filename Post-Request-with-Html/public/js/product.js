async function onSubmitHandler(e) {
  e.preventDefault();
  console.log("submit function called");
  const obj = {
    product: e.target.product.value,
  };
  res = await axios.post("http://localhost:3000/product", obj);
  console.log(res.data.value);
}
