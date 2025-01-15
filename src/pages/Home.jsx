import { checkQuery } from "../utils/checkQuery";

export default function Home(){
  checkQuery("testing");
  return(
    <>
      <p>This is my homepage.</p>
    </>
  );
}