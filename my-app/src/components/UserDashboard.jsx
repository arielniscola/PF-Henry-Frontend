import React from "react";
import perfil from "../data/perfil.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import uploadimg from "../data/uploadimg.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../redux/actions";



const  UserDashboard = () => {
  const dispatch = useDispatch()
  const [images, setImages] = useState(uploadimg);
  const [nombre, setNombre] = useState("User");
  const currentUser = useSelector(state => state.currentUser)


  useEffect(() => {
    if (localStorage.getItem("imagen")) {
      setImages(localStorage.getItem("imagen"));
    }
    if (localStorage.getItem("nombree")) {
      setNombre(localStorage.getItem("nombree"));
    }
    currentUser && dispatch(getUserDetails(currentUser?.id))
    
  }, []);

  const changeInput = () => {
    let input = document.getElementById("file");
    input.click();

    input.onchange = () => {
      let file = input.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        localStorage.setItem("imagen", reader.result);
        setImages(reader.result);
      };
    };

  };
  

  
  const cambiarNombre = () => {
    let nombre = prompt("Enter your name");
    localStorage.setItem("nombree", nombre);
    setNombre(nombre);
  };



  return (
          <div>
            <div className="flex border border-gray-300 m-10 rounded-2xl p-2 "
            style={{
              height: "300px",
              backgroundImage: `url(${perfil})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="mt-10 ml-10">
            
          
            <input
              type="file"
              id="file"
              onChange={changeInput}
              style={{ display: "none" }}
            />
            <img src={images}
            className="w-36 h-36 mb-3 border border-white rounded-md p-2"
            alt="undraw-Online-chat-re-4r4y"
            border="0"
            onClick={changeInput}
            />


            <h1 className="text-2xl font-bold mb-3 text-white"
            >{nombre}
            </h1>
            <button 
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-2 rounded"
            onClick={cambiarNombre}
            >Change Name</button>
            
          </div>
            <div className="mt-10 ml-10">
            <Link to="/search">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-10">
            New Reservation</button>
            </Link>
            <Link to="/reservations">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10"
            >My Reservations</button>
            </Link>
            <Link to="/favorites">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10"
            >My Favorites</button>
            </Link>
            <Link to="/create">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10"
            >{currentUser.rol === "owner"? "Create Complex": "Be Owner"}</button>
            </Link>
      
          </div>
          </div>
        </div>

  );

};

export default UserDashboard;
