import React, {useState, useEffect} from 'react'
import getData from './services/getData'

function App() {
  
  const [products, setProducts] = useState([]);
  console.log(products)
  // Obtención datos API
  useEffect(() => {
    getData().then(products => setProducts(products))
  },[])


  return (
    <div className="App">
      <header className="header-section--container">
      <a href="#" className="header-section--logo">Titulo/Logo</a>
        <div className="header-section--breadcrumb">
          <span>home</span>
          <span>product detail</span>
        </div>
        <section className="header-section--basket" >basket</section>
      </header>
      
      <main>
      <section className="product-container">
      <section className="form--name">
      <label htmlFor="product">Choose product: 
      <input type="text" id="product" name="product"/></label>
      </section>
      {/* <form action="">
      
      </form> */}


      {/* Listado de productos */}
      <ul className="product-list">
        {
          products.map(element => {
            return <li className="product-list--item" key= {element.id}>
            <img src={element.imgUrl} alt=""/>
            <p className="product-list--item-name">{element.brand}</p>
            <p className="product-list--item-name">{element.model}</p>
            <p className="product-list--item-name">{element.price}</p>
            </li>
          })
        }
      </ul>

      </section>
      </main>

    </div>
  );
}

export default App;
