import * as actions from '../actionTypes'
// import axios from 'axios'
import {complexs} from '../../data/complexsExample.js'


export const getAllComplex = () => async(dispatch)=>{
  // try {
  //     const api = await axios.get("https://restcountries.com/v3.1/all")
  //     dispatch({
  //         type: actions.GET_ALL_COMPLEX,
  //         payload: api.data
  //     })

  // } catch (error) {
  //     console.log(error)
  // }
  dispatch({
    type: actions.GET_ALL_COMPLEX,
    payload: complexs.api
  })
}



export const getComplexDetails = (id,arr) => async(dispatch) =>{
    // try {
  //     const api = await axios.get(enlace + id)
  //     dispatch({
  //   type: actions.GET_COMPLEX_DETAIL,
  //   payload: api.data
  // })

  // } catch (error) {
  //     console.log(error)
  // }
  const find = arr.filter(e => e.id === id)


  return{
    type: actions.GET_COMPLEX_DETAIL,
    payload: find[0]
  }
}

export const filterSports = (sport,arr) => async(dispatch) =>{
const filtered = arr.filter(e => e.sports.some(e => e === sport))


dispatch({
  type: actions.FILTER_BY_SPORT,
  payload: filtered
})
}

export const filterServices= (service,arr) => async(dispatch) =>{

const filtered = arr.filter(e => e.service.some(e => e === service))


dispatch({
  type: actions.FILTER_BY_SPORT,
  payload: filtered
})
}



//Agus////////////////
//crear un funcion
//esta funcion debe ordenar el arrelo de data.api de A a la Z(usando .sort())
//guardar el sort en una variable para retornarla
//dispachar el objeto con el type y el payload
export const orderAZ = (array) => dispatch =>{
  let arr = array

  let ordered = arr.sort((actual,siguiente) =>{
    if(actual.name > siguiente.name) return 1
    if(actual.name < siguiente.name) return -1
    return 0
  });

  dispatch({
    type: actions.FILTER_BY_AZ,
    payload: [...ordered]
  })
}

export const orderFav = (array) => dispatch =>{
  let arr = array

  let ordered = arr.sort((actual,siguiente) =>{
    if(actual.name > siguiente.name) return 1
    if(actual.name < siguiente.name) return -1
    return 0
  });

  dispatch({
    type: actions.FILTER_BY_AZ,
    payload: [...ordered]
  })
}

export const searchCity = (city, array) => dispatch =>{

  const filtered = array.filter(e => e.name === city)
  const complexs = filtered[0].events

  dispatch({
    type: actions.SEARCH_BY_CITY,
    payload: complexs
  })
}