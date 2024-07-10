import React, { useEffect, useState } from 'react'


const Countrycard = ({name, flagImg, flagAltText}) => {  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:"10px",
        width:"200px",
        height:"200px",
        border:"2px solid black",
        borderRadius:"8px",
        padding:'10px',
        margin:'10px', 
        textAlign:"center"
    }}>
       
     <img 
     src={flagImg} alt={"Flag of:"+flagAltText} style={{width:"100px", height:"100px"}}/>
     <h1>{name}</h1>
    </div>
  );
};

const Countries = () => {
const API_URL =" https://xcountries-backend.azurewebsites.net/all";
//const temArr =[ 1,2,3,4,5,6,7,8];
const [countries, setcountries] = useState([]);
useEffect(()=>{
    fetch(API_URL).then(res => res.json()).then(data => {setcountries(data)})
    .catch((error)=>console.error("Error:",error))
},[])


  return (
    <div style={{display:"flex",
        flexWrap:"wrap",
    }}>
{countries.map((country)=><Countrycard key = {country.abbr} name={country.name} flagImg={country.flag} flagAltText={country.abbr}/>)}
    </div>
  )
}

export default Countries
