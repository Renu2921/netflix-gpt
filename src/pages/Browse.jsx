import React from 'react';
import Header from "./Header";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


export default function Browse() {
  const searchToggle=useSelector((store)=>store.gpt.showGptPage);
  return (
    <div>
    <Header/>
    <div>
      {
        searchToggle? <GptSearch/>: 
        <>
        <MainContainer/>
      <SecondaryContainer/>
      </>
      }
      
    </div>
    </div>
  )
};
