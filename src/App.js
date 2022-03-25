
import React, {useState, useEffect} from 'react'
import getData from './services/getData'
import Pdp from './components/Pdp'

function App() {
  
  const [products, setProducts] = useState([]);
  // console.log(products)
  const [gap, setGap] = useState('');
  const [details, setDetails] = useState({imgUrl:"", brand:"", model:"", price:"", cpu:"", ram:"", options:""});
  const [storageGap,setStorageGap] = useState([]);
  const [colorGap,setColorGap] = useState([]);
  const [id, setId] = useState(0);

  // Obtención datos API
  useEffect(() => {
    getData().then(products => setProducts(products));

  },[])

  const getProduct =  (id)  => {
    const urlDetail = "https://front-test-api.herokuapp.com/api/product/"+id;
    // console.log(urlDetail);
    fetch(urlDetail).then(response => response.json()).then(data => {
      setDetails({imgUrl:data.imgUrl , brand:data.brand, model:data.model, price:data.price, cpu:data.cpu, ram:data.internalMemory[0], options:data.options})
      setColorGap(data.options.colors);
      setStorageGap(data.options.storages);
      console.log(data.id)
      setId(data.id)
      // console.log(data.options.storages);
    })
}

  // Necesito recoger el valor del imput para poder filtrar en segunda instancia------
  const filterProducts = products.filter((movil) => {
    console.log(movil.brand)
    return (  
      movil.model.toUpperCase().includes(gap.toUpperCase()) || movil.brand.toUpperCase().includes(gap.toUpperCase())
    ) 
  });


  const selectColor = (e) => {
   console.log(e)
  } 

  const selectStorage = (e) => {
    console.log(e, "El elemento seleccionado es: storage")
   } 

   
   

  return (
    <div className="App">
      <header className="header-section--container">
      <a href="#" className="header-section--logo">Titulo/Logo</a>
        <div className="header-section--breadcrumb">
          <span>home</span>
          <span>product detail</span>
        </div>
        <section className="header-section--basket" >basket
        <p>{products.length}</p>
        </section>
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
            return <li className="product-list--item" key= {element.id} onClick={(e) => {getProduct(element.id)}}>
            <img src={element.imgUrl} alt=""/>
            <p className="product-list--item-brand">{element.brand}</p>
            <p className="product-list--item-model">{element.model}</p>
            <p className="product-list--item-price">{element.price}</p>
            </li>
          })
        }
      </ul>

      <Pdp details= {details} storageGap={storageGap} colorGap={colorGap} id={id} selectColor = {selectColor} selectStorage= {selectStorage} getProduct={getProduct}/>

      
      </section>
      </main>

    </div>
  );
}

export default App;
