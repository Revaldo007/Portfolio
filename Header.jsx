import './index.css';
function Header({Page,setPage}) {
  return (
    <>
      <div className="head">
        <nav>
        <h1><span className="name">Portfolio</span></h1>
          <ul>
            <li className={Page==="home"? "active" :""}
             onClick={()=>setPage("home")}>Home</li>

            <li className={Page==="work"? "active" :""}
             onClick={()=>setPage("work")}>Work</li>

            <li className={Page==="skill"? "active" :""}
             onClick={()=>setPage("skill")}>Skill</li>
          </ul>
         <h2 className={Page==="contact"? "active-btn" :""}
          onClick={()=>setPage("contact")}>Contact</h2>
        </nav>
      </div>
    </>
  );
}

export default Header;
