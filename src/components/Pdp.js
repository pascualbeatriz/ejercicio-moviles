import React, {useState} from 'react'

const Pdp = (props) => {

  const addProduct = async (id, selectStorage, selectColor) => {
    console.log(id, selectStorage, selectColor)
   const resposeProduct = await fetch('https://front-test-api.herokuapp.com/api/cart', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({id: props.id, colorCode: props.colorCode.code, storageGap:props.storageCode.code })
 });
 const content = await resposeProduct.json();
 console.log(props.details.name)
}

  return (
    <section className="product-item">
        <img src={props.details.imgUrl} alt=""/>
        <div>
          <ul className="product-item-description">  
            <li> {props.details.brand}</li>  
            <li> {props.details.model}</li> 
            <li> {props.details.ram}</li>
          </ul>
        </div>
        <div className="product-item-actions">
        <form onSubmit={(e) => {e.preventDefault(); addProduct(props.id, props.storageGap, props.colorGap)}}>
          <select name="color" id="color" value={props.colorGap.length === 1 ? props.colorGap[0].name : ""} onChange = {(e) => props.selectColor(e.target.value)}> {
            props.colorGap.map((colorOptions, index) => {

              return <option value={colorOptions.name} key={index}> {colorOptions.name}</option>

            })
          }
          </select>
          <select name="storages" id="storages" value={props.storageGap.length === 1 ? props.storageGap[0].name : ""} onChange = {(e) => props.selectStorage(e.target.value)}> {
            props.storageGap.map((storageOptions, index) => {
              {/* console.log(storageOptions, "el único color") */}
              return <option value={storageOptions.name} key={index}> {storageOptions.name}</option>
            })
          }
          </select>    
          <input type="submit" value="Add" />
        </form>
        </div>
      </section>
  )
}

export default Pdp