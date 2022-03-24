import React, {useState, useEffect} from 'react'
import getData from './services/getData'

function App() {
  
  const [products, setProducts] = useState([]);
  // console.log(products)
  const [gap, setGap] = useState('');

  // Obtención datos API
  useEffect(() => {
    getData().then(products => setProducts(products))
  },[])

  // Necesito recoger el valor del imput para poder filtrar en segunda instancia------
  const filterProducts = products.filter((movil) => {
    console.log(movil.brand)
    return (  
      movil.model.toUpperCase().includes(gap.toUpperCase()) || movil.brand.toUpperCase().includes(gap.toUpperCase())
    ) 
  })

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
      {/* Form */}
      <section className="form--name">
      <label htmlFor="product">Choose product: 
      <input 
      type="text" 
      id="product" 
      name="product"
      onChange={event => setGap(event.target.value)}
      value={gap}
      />
      </label>
      </section>
      
      {/* Listado de productos */}
      <ul className="product-list">
        {
          filterProducts.map(element => {
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
