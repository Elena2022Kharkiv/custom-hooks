export const getProducts = async () => {
    const url = 'http://localhost:5000/products';
  
    const response = await fetch(url);      
    const products = await response.json();
    console.log(products);

    return products;
  }