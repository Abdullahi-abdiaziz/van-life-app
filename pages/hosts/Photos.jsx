import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photos = () => {

  const {currentVan} = useOutletContext();
  return (
    <section>
      <img src={currentVan.imageUrl} alt="" width={100} />
    </section>
  )
}

export default Photos