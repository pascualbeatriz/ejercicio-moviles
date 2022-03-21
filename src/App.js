import React, {useState, useEffect} from 'react'

function App() {
  const url = 'https://front-test-api.herokuapp.com/api/product';
  const fechtApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    console.log(responseJSON);
  }

  useEffect(() => {
    fechtApi();
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
      {/* <form action="">
      <label for="product">Choose product: 
      <input type="text" id="product" name="product"/></label>
      </form> */}
      <ul className="product-list"></ul>

      </section>
      </main>

    </div>
  );
}

export default App;
