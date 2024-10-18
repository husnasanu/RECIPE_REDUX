import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'


const View = () => {

  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    if (sessionStorage.getItem("allRecipes")) {
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
      setRecipe(allRecipes.find(item => item.id == id))
    }
      }, [id])


  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center mx-5 mt-5" style={{ minHeight: '100vh' }}>
        <div className="row g-5">
          <div className="col-md-6">
            <img width={'570px'} src={recipe?.image} alt={recipe?.name} className="img-fluid mt-5" style={{ height: '', objectFit: 'cover' }} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3>ID : {recipe?.id}</h3>
            <h1 className="display-4 fw-bold my-3">{recipe?.name}</h1>
            <h1 className="display-4 fw-bold my-3">{recipe?.cuisine}</h1>
            <h4 className="fw-bold text-warning mb-3 fst-italic">Rating: {recipe?.rating}</h4>
            <p className="text-justify">
              <span className="fw-bold">Ingredients:</span> {recipe?.ingredients}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default View
