import React from 'react'
import "../style/Link_card.css"

export default function Link_card(props) {

  return (
    <>
    <div>
        <div className="cardLink">
            <div className="card_cat">
                <h4>{props.titleCard}</h4>
            </div>
        </div>
    </div>
    </>

  )
}
