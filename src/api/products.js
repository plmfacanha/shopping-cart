export default async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) throw new Error(`Something went wrong: ${response.status}`);
  const result = await response.json();
  const arr = result.slice(0, 4);
  return arr;
}
