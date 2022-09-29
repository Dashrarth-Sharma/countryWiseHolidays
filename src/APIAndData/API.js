import axios from "axios";

import { countryCodes } from "./CountryCodes";

export const countryName = (country) => {
    let ele = ''

   if(country.length === 2){
      countryCodes.forEach(element => {
          if(element.code===country.toLowerCase()){
            ele = {code:element.code, name:element.name}
          }
      });
    }else if(country.length > 2){
      countryCodes.forEach(element => {
        let upperCase = country.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())
        if(element.name===upperCase){
          ele = {code:element.code, name:element.name}
        }
    });
    }
    return ele
}

export const API = async (country) => {
    let cName = ''
    try {
      if (country) {
        cName = countryName(country)
        const { data } = await axios.get(`https://public-holiday.p.rapidapi.com/2019/${cName.code.toUpperCase()}`, {
            headers: {
                'X-RapidAPI-Key': '25486ae8e3msh6a6ccb4db5562e6p1f6c17jsnb2a80c3bf89f',
                'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
            }
        });
  
        return { data:data[0], cName };
      }
    } catch (error) {
      console.log(error);
    }
  };
