import React from 'react'
import Card from '../components/Card'
import "../style/Global.css"

export default function ({CatTitle}) {
 
  return (
    // {salut}
    <section>
      <h1>{CatTitle}</h1>
      <div className='global' >

       <div className="cardG">
          <Card 
            Marque="Techno SPARK 7+"
            Prix="410.000"
            info="A remplire..."
            backgroundImage="https://cdn.pixabay.com/photo/2021/09/25/17/43/iphone-13-6655517_640.jpg"
             />
          </div>
       <div className="cardG">
          <Card 
            Marque="IPHON 12 PRO"
            Prix="900.000"
            info="A remplire..."
            backgroundImage="https://cdn.pixabay.com/photo/2019/06/27/10/04/vintage-4301935_640.jpg"
             />
          </div>
       <div className="cardG">
          <Card 
            Marque="Techno SPARK 7+"
            Prix="410.000"
            info="A remplire..."
            backgroundImage="https://cdn.pixabay.com/photo/2021/09/25/17/43/iphone-13-6655517_640.jpg"
             />
          </div>
       <div className="cardG">
          <Card 
            Marque="IPHON 12 PRO"
            Prix="900.000"
            info="A remplire..."
            backgroundImage="https://cdn.pixabay.com/photo/2019/06/27/10/04/vintage-4301935_640.jpg"
             />
          </div>
          
        </div>
    </section>
  )
}
