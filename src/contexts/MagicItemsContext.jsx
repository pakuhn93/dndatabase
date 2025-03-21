import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { parseTSV } from "../utils/parseTSV";

const MagicItemsContext = React.createContext();

// custom hooks for our context
export function useMagicItems(){
    return useContext(MagicItemsContext);
}

export function MagicItemsProvider({ children }){
  // maintains the list of Magic Items
  const [magicItems, setMagicItems] = useState([]);

  // fetches the Magic Item List from a published TSV Google Sheet and stores the information in Local Storage and State
  const fetchMagicItems = async () => {
    const magicItemsURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfagKdIrEmAhbCHwYrabPxdy5IWSJl-J95MhPC9ywXSteZGQ49KQRa6Y1IQroAe0W1N417zYPfzRGn/pub?gid=0&single=true&output=tsv';
    await axios.get(magicItemsURL)
      .then((response) => {
          const parsedTsvData = parseTSV(response.data);
          const parsedTsvDataJSON = JSON.stringify(parsedTsvData);
          
          setMagicItems(parsedTsvData);
          localStorage.setItem("MagicItems", parsedTsvDataJSON);
          localStorage.setItem("TimestampMagicItems", Date.now());
      })
      .catch((error) => {
          console.error('Error fetching TSV data:', error);
      });
  }

  // limits pulls from Google Sheets TSV by storing the Magic Item dataset on Local Storage
  const updateMagicItems = () => {
    const updateInterval = 1000*60*15 //the amount of milliseconds in 15 minutes

    // check Local Storage for the magic items timestamp
    if(localStorage.getItem("TimestampMagicItems") != null){
      // if 15 minutes has passed, update the magic item list
      if((Date.now() - localStorage.getItem("TimestampMagicItems")) >= updateInterval){
        console.log("Updating Magic Items...");
        fetchMagicItems();
      } else {
        // Retrieve magic items list locally
        console.log("Retrieving Magic Items Locally...");
        setMagicItems(JSON.parse(localStorage.getItem("MagicItems")));
      }
    } else {
      // initialize Local Storage with the Magic Item List
      console.log("Initializing Magic Items...");
      fetchMagicItems();
    }
  }

  console.log("ITEMS:", magicItems);

  useEffect(() => {
    updateMagicItems();
}, []);


  return (
      <MagicItemsContext.Provider value={magicItems}>
          {children}
      </MagicItemsContext.Provider>
  );
}