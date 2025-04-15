import React from 'react'
import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreContent from '../../components/ExploreContent/ExploreContent'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreContent category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home