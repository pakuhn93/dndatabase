import { useEffect } from "react";
import { checkQuery } from "../utils/checkQuery";

export default function MagicItemList(){
  const myFunc = () => {
    checkQuery("testing");
  }
  // useEffect(() => {
  //   checkQuery("item-name");
  // }, []);

  return(
    <>
      <button onClick={() => myFunc()}>Click Me!!</button>
    </>
  );
}