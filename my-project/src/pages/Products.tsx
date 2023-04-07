import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../UserContext.tsx'

function Products() {
    const { id } = useParams()
    const msg = useContext(UserContext)


  return (
    <div>
        <h1>produkt sidan</h1>
        <h4>här läser du följande <span>{id} till {msg}</span></h4>
    </div>
  )
}

export default Products
