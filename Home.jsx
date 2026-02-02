import homepic from "./assets/home.jpg";
import './index.css';
import "animate.css";
function Home(){
    return(
    <>
    <div className="home">
      <p>Thanks for stopping by! I'm  <b>Ans Revaldo.A</b>,  a highly motivated <b>Java full stack developer</b>, constantly seeking new challenges and opportunities to grow. I believe that the best work is driven by curiosity and a commitment to quality. Here, you'll find a selection of my latest <b> work, coding projects</b> that reflect my dedication. Enjoy the experience, and feel free to connect!</p>
      <img src={homepic}></img>
    </div>
    </>
    );
}
export default Home;