import React , {useState, useEffect} from 'react'
import {NativeSelect , FormControl, StylesProvider} from '@material-ui/core'
import styles from './Country.module.css'
import {fetchCountry} from '../../api'


const CountryPicker = ({handleCountryChange})=>{
const[fetchedcountries, setfetchedcountries] =  useState([]);

useEffect(()=>{

const fetchAPI = async () =>{

setfetchedcountries(await fetchCountry());

}
fetchAPI();
},[setfetchedcountries]);

console.log(fetchedcountries);


return(
    <div className={StylesProvider.container}>
    <FormControl>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                <option value="">Global</option>
                {fetchedcountries.map((country,i)=><option key={i} value={country}> {country} </option>)}
        </NativeSelect>
        </FormControl>       
    </div>
)
}
export default CountryPicker