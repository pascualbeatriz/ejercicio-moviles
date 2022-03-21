import React, {useState} from 'react'

const urlApi = "https://front-test-api.herokuapp.com";



const GetData = () => {
  return fetch(`${urlApi}/api/product`).then((response) => response.json()).then((product)=> {
    console.log(product)
  })
  
}

export default GetData