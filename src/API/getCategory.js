export const getCategory = async () => {

  const urlCategory = `http://localhost:3000/category`;

  const response = await fetch(urlCategory);
  
  const dataCat = await response.json();  
  return dataCat;
}