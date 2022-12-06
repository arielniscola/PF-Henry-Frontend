import * as actions from '../actionTypes'
// import axios from 'axios'
import data from '../../utils/data'


export const getAllComplex = ()=>{
    // try {
    //     const api = await axios.get("https://restcountries.com/v3.1/all")
    //     dispatch({
    //         type: actions.GET_ALL_COMPLEX,
    //         payload: api.data
    //     })

    // } catch (error) {
    //     console.log(error)
    // }
    return{
        type: actions.GET_ALL_COMPLEX,
        payload: data
          }
        }
// export const getComplexDetails = (id) => async(dispatch) =>{
    // try {
    //     const {data} = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
    //     console.log(data)
    //     dispatch({
    //         type: actions.GET_COMPLEX_DETAIL,
    //         payload: data
    //     })

    // } catch (error) {
    //     console.log(error)
    // 