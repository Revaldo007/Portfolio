import Header from "./Header"
import Form from "./Form";
import Home from "./Home"
import Work from "./Work";
import Skill from "./Skill";
import Contact from "./Contact";
import { useState } from "react";
function App(){
  const [Page,setPage]=useState("home");
  return(
    <>
  <Header Page={Page}setPage={setPage}/>
  {Page === "home"&&<Home/>}
  {Page === "work"&&<Work/>}
  {Page === "skill"&&<Skill/>}
  {Page === "contact"&&<Contact/>}
    </>
  );
}
export default App