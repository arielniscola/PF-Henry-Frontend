import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {addFavoriteLocalStorage} from '../redux/actions'
import { updateFavorite } from "../redux/actions";
import uploadimg from '../data/uploadimg.png'
import { useState } from "react";

const ComplexCard = ({ complexDetails}) => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.isActive)
  const local = useSelector(state => state.favlocal)
  const currentUser = useSelector(state => state.currentUser)
  console.log("esto es local",local)

  const { id, name, event, image, city, rating,logo } = complexDetails;

  const fav = currentUser ? currentUser.favorites : local

  const find = fav?.some(e => e.id === id)

  const [favorite, setFavorite] = useState(find)

  const handleFavorite = () =>{
    if(!user){
      if(!favorite){
        dispatch(addFavoriteLocalStorage([id]))
        setFavorite(true)
      }else{
        alert("already in your favorites")
      }
    }else{
      if(!favorite){
        dispatch(updateFavorite(currentUser.id,{...currentUser, favorites:[...currentUser.favorites,id]}))
        setFavorite(true)
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
          <span className="p-2 w-9 rounded-2xl border-gray-500 border">
            $500
          </span>
          <span className="p-2 ml-2 w-9 rounded-2xl border-gray-500 border">
            2HS
          </span>
        </div>
        <span className="self-center text-xl">{rating||"no reviews"} ★</span>
      </Link>
        
      <div className="flex-end">
      <button onClick={handleFavorite} className="self-center  bg-gradient-to-r from-pink-300 to-blue-400 hover:from-blue-400 hover:to-pink-300 text-black font-bold py-2 px-4 rounded">
         { favorite ? <i className="fa-solid fa-bookmark"></i> :<i className="fa-regular fa-bookmark"></i>}
      </button>
      </div>
    </div>

  );
};

export default ComplexCard;

