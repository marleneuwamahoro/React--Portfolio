import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ProductList from './component/ProductList'
import './App.css'

function App() {
  const data = [
    { id: 1, name: "Milk", category: "Dairy", price: 1.5, inStock: true },
    { id: 2, name: "Bread", category: "Bakery", price: 0.8, inStock: true },
    { id: 3, name: "Eggs", category: "Dairy", price: 2.2, inStock: false },
    { id: 4, name: "Rice", category: "Grains", price: 3.0, inStock: true },
    { id: 5, name: "Apple", category: "Fruits", price: 0.5, inStock: true }
  ];

  return (
    <div>
      <ProductList products={data} />
     
    </div>
  )
}

export default App
