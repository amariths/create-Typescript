import React from 'react'
import { Link } from 'react-router-dom'


type HomeProps = {
    firstname: string,
    counter: number
}
/*
interface HomeProps {
    firstname: string,
    counter: number
}
*/
function Home(props: HomeProps) {
  return (
    <div>
       <h1>välkommen till shop</h1>
       <h2>{props.firstname}</h2>
       <h2>{props.counter}</h2>
       <Link to="/products/1"> produkt 1 </Link>
       <Link to="/products/2"> produkt 2</Link>
    </div>
  )
}

export default Home
