import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getUserDetails, updateFavorite} from '../redux/actions'
import uploadimg from '../data/uploadimg.png'
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const ComplexCard = ({ complexDetails, favorites}) => {

  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.currentUser)
  const [storage, setStorage] = useLocalStorage("favorite",[])

  const { id, name, event, city, rating,logo } = complexDetails;

  const fav = currentUser ? currentUser.favorites : storage

  const find = fav?.some(e => e.id === id)

  const [favorite, setFavorite] = useState(find)

  const handleFavorite = () =>{
    if(!currentUser){
      if(!favorite){
        setFavorite(true)
        setStorage([...storage, id])
      }else{
        alert("already in your favorites")
      }
    }else{
      if(!favorite){
        setFavorite(true)
        dispatch(updateFavorite(currentUser?.id,{...currentUser, favorites:[...currentUser.favorites,id]},true))
        dispatch(getUserDetails(currentUser.id))
      }else{
        alert("already in your favorites")
      }
      
    }
  }

  return (
    <div className="flex flex-row m-5  justify-around">
      <Link className="flex flex-row" to={`/search/${id}`}>

        <img className="max-w-[200px] rounded-lg" src={logo || uploadimg } alt={name} />

        <div className="mx-5">
          <p className="text-lg font-bold text-black-500">{event}</p>
          <p className="text-2xl mb-2 py-2">{name}</p>
          <p className="text-black-400 mb-2">{city}</p>
        </div>
      </Link>
      <div className="flex-end">
      {!favorites && <button onClick={() => handleFavorite()} className="self-center  w-12 h-11 ml-1 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
         { favorite ? <i className="fa-solid fa-bookmark"></i> :<i className="fa-regular fa-bookmark"></i>}
      </button>}
      </div>
    </div>

  );
};

export default ComplexCard;

