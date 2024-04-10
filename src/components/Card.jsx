import React from 'react'
import '../style/card.css'
// import PropTypes from 'prop-types';

export default function Card({ backgroundImage, Marque,Prix,info }) {
    const cardStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // Vous pouvez également spécifier d'autres styles de fond ici si nécessaire
    };
  
    return (
     <div className="card">
         <div className='card__container'>
        <div className="img" style={cardStyle}></div>
        <div className="info">
          <h3>{Marque} </h3>
          <h4>Prix: {Prix}</h4>
          <p>
            {info}
          </p>
        </div>
      </div>
     </div>
    );
  }
// Définir les types attendus pour chaque prop
// Card.propTypes = {
//   backgroundColor: PropTypes.string.isRequired,
// };