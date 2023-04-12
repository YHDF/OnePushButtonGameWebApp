
import cara from '../assets/cara.gif';
import Mace from '../assets/Mace.gif';
export default function Home() {
    return (
      
  <header className = "App-header">
        <div className="alley">
            <div className="raven">
            <img src={Mace} id="raven-pic"/>  
            </div>
            <center>
                <div className="text-box"><a href="#slide1"> Welcome to One button Apple Adventure</a></div>
            </center>
            <div className="cara" onmouseover="moveGirl()"><img src={cara} id="cara-pic"/></div>
        </div>
        </header> 
    )
}