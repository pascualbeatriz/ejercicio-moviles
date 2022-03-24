
const url = 'https://front-test-api.herokuapp.com/api/product';

const getData = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    // console.log(responseJSON);
    const products = responseJSON.map(product => {
      const {imgUrl, brand, model, price,id} = product
      return {imgUrl, brand, model, price,id}
    })
    // console.log(products)
    return products
}


export default getData