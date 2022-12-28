import React from "react";
import Header from "./Header";
import ComplexList from "./ComplexList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllComplex } from "../redux/actions";

const Home = () => {
  

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllComplex())
  },[dispatch])
  return (
    <>
      <Header />
      <ComplexList />
    </>
  )
}

export default Home;



