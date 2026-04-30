import './App.css'
import Footer from './Footer'
import Header from './Header'
import SimilarProducts from './SimilarProducts'

function App() {
  const data = [
    { id: 1, name: "Milk", category: "Dairy", price: 1.5, inStock: true },
    { id: 2, name: "Bread", category: "Bakery", price: 0.8, inStock: true },
    { id: 3, name: "Eggs", category: "Dairy", price: 2.2, inStock: false },
    { id: 4, name: "Rice", category: "Grains", price: 3.0, inStock: true },
    { id: 5, name: "Apple", category: "Fruits", price: 0.5, inStock: true }
  ];

  return (
    <>
      <Header />
      <h1>The Main Component</h1>
      <SimilarProducts products={data} />
      <Footer />
    </>
  );
}

export default App;
/**
 * 1. a component is named starting with a capital letter
 * 2.  a component should retutn valid jsx syntax
 * 3. a component  can take arguments called props
 * 4.  a component should be exported to make it reusable
 * 
 */
