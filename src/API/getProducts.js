export const getProducts = async (category) => {
  const catProd = (category !== 3) ? `?category=${category}` : '';

  const urlProducts = `http://localhost:3000/products${catProd}`;

  const response = await fetch(urlProducts);      
  const products = await response.json();

  return products;
}