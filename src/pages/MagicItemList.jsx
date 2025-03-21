import { useState } from "react";
import { useMagicItems } from "../contexts/MagicItemsContext";

export default function MagicItemList(){
  const [toggleElement, setToggleElement] = useState(false);
  const magicItems = useMagicItems();

  const showMagicItemDetails = (event) => {
    event.stopPropagation();
    setToggleElement(!toggleElement);
  }

  return(
    <>
      {
        magicItems.map((magicItem, index) => {
          return(
            <div border = "solid" key={"magic_item_" + index + magicItem.name} onClick={showMagicItemDetails}>
              {magicItem.name != undefined ? `${magicItem.name}` : "Loading Magic Item..."}
              {
                toggleElement ? (<div>DIV ACTIVATED</div>) : (<></>)
              }
            </div>
          );
        })
      }
    </>
  );
}