import './Navbar.css';
import FavIcon from './../Icons/FavIcon512px.ico'
import { LuGithub,LuInstagram,LuGlobe   } from "react-icons/lu";

function NavbarComponent() {

  return (
    <nav>
        <button onClick={()=> {window.location = '/'}} className='logoNav'>
            <img alt='Logo' src={FavIcon} height={40} />
            <h1> EMOJI UNIVERSE</h1>
        </button>
        <div className='buttonsNav'>
            <button onClick={()=>  window.location.hash = '#faces'}>Carinhas <br/> e Aniamis</button>
            <button onClick={()=> window.location.hash = '#people'}>Pessoas</button>
            <button onClick={()=> window.location.hash = '#food'}>Comidas <br/> e plantas</button>
            <button onClick={()=> window.location.hash = '#celebrations'}>Comemorações <br/> e Objetos</button>
            <button onClick={()=> window.location.hash = '#transport'}>Transporte <br/> e locais </button>
            <button onClick={()=> window.location.hash =  '#symbols'}>Símbolos</button>
        </div>
        <div id='socialBar' className='socialNav'>
            <button onClick={()=> window.open('https://github.com/RafaelParoni/')}><LuGithub size={30}/></button>
            <button onClick={()=> window.open('https://rafaelparoni.vercel.app/')}><LuGlobe size={30}/></button>
            <button onClick={()=> window.open('https://www.instagram.com/rafaelparroni/')}><LuInstagram size={30}/></button>
        </div>
    </nav>
  );
}

export default NavbarComponent;
