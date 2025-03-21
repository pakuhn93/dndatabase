import { useEffect, useState } from "react";

export default function MagicItem(props){

  console.log("MAGIC ITEM:", props);

  return(
    <>
      <p>{props.name != undefined ? `${props.name}` : "Loading Magic Item..."}</p>
    </>
  );
}