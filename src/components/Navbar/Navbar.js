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
            <button>NOME</button>
            <button>NOME</button>
            <button>NOME</button>
            <button>NOME</button>
            <button>NOME</button>
            <button>NOME</button>
        </div>
        <div className='socialNav'>
            <button><LuGithub size={30}/></button>
            <button><LuGlobe size={30}/></button>
            <button><LuInstagram size={30}/></button>
        </div>
    </nav>
  );
}

export default NavbarComponent;
