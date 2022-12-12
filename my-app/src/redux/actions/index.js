import * as actions from '../actionTypes'
import axios from 'axios'
import {complexs,sports,services} from '../../data/complexsExample.js'


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
    payload: complexs
  })
}

export const getAllServices = () => async(dispatch)=>{
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
    type: actions.GET_ALL_SERVICES,
    payload: services
  })
}

export const getAllSports = () => async(dispatch)=>{
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
    type: actions.GET_ALL_SPORTS,
    payload: sports
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
  console.log("esto es el arreglo",arr)
  console.log("esto es el id", id)

  const find = arr.filter(e => e.id === Number(id))
  console.log("esto es find",find[0])


dispatch({
    type: actions.GET_COMPLEX_DETAIL,
    payload: find[0]
  })
}

export const filterSports = (sport,arr) => async(dispatch) =>{
const filtSports = arr.filter(e => e.sports)
const filtered = filtSports.filter(e => e.sports.some(e => e === sport))


dispatch({
  type: actions.FILTER_BY_SPORT,
  payload: filtered
})
}

export const filterServices= (service,arr) => async(dispatch) =>{

  const filtServ = arr.filter(e => e.services)
  const filtered = filtServ.filter(e => e.services.some(e => e === service))


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

export const searchCity = (city, array, setNotfound) => dispatch =>{

  const filtered = array.filter(e => e.city === city)
  console.log(filtered)

    if(filtered.length > 0){
      setNotfound(true)
      dispatch({
        type: actions.SEARCH_BY_CITY,
        payload: filtered
      })
    }else{
      alert("city not found")
    }
}

export const createComplex = ({logo,cuit,complexName,complexAddress})=>{

  let complex = {
    name:complexName,
    cuit,
    logo: logo.length ? logo : "https://icones.pro/wp-content/uploads/2022/03/icone-de-construction-et-de-batiment-gris.png" ,
    addres:complexAddress
  }



  try{

    const create = axios.get("direccion",complex)

    return {create, msg:"complex created"}
  }
  catch(error){
    alert('error - complex not created')
    console.log(error)
  }

}

export const createUser = ({fullname,password,email,phone})=>{

  let user = {
    name:fullname,
    password,
    email,
    phone
  }

  try{

    const create = axios.get("direccion",user)

    return {create, msg:"user created"}
  }
  catch(error){
    alert('error - user not created')
    console.log(error)
  }

}