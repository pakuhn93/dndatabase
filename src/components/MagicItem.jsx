import { useEffect, useState } from "react";
import { useMagicItems } from "../contexts/MagicItemsContext";

export default function MagicItem(){
  const magicItems = useMagicItems();

  return(
    <>
      {
        magicItems.map((magicItem, index) => {
          return(
            <p key={"magic_item_" + index + magicItem.Item}>
              {magicItem.Item != undefined ? `${magicItem.Item}` : "Loading Magic Items..."}
              </p>
          );
        })
      }
    </>
  );
}