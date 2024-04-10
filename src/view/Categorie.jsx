import React from 'react'
import Link_card from '../components/Link_card'

export default function Categorie() {
    const flex = {
        display: "flex",
        margin: "  12px",
        justifyContent: "center"
    }
    const box = {
        display: "flex",
        margin: " 0 12px",

    }
  return (
    <div style={flex}>
        <div style={box}>
             <Link_card titleCard="Accesoir"/>
        </div>
        <div style={box}>
             <Link_card titleCard="Telephone"/>
        </div>
     
        <div style={box}>
             <Link_card titleCard="Ordinateur"/>
        </div>
     
        <div style={box}>
             <Link_card titleCard="Tablete"/>
        </div>
     
     
    </div>
  )
}
