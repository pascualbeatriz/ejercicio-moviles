import React, {useState} from 'react'

const Form = () => {
  const [searchResult, setSearchResult] = React.useState(['https://front-test-api.herokuapp.com/product']);
  return (
    <div>Form
    <section className="form-content">
    { searchResult.map(image => <img src={image} alt=""/>)

    }
      
    </section>
    </div>
  )
}

export default Form