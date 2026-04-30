export default function SimilarProducts({ products }) {
  return (
    <>
      <ol>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ol>
    </>
  ); 
}