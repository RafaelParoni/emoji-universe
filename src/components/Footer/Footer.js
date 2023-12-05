import './Footer.css';

import favIcon from './../Icons/FavIcon256px.ico'
import { LuGithub,LuInstagram,LuGlobe   } from "react-icons/lu";

function FooterComponent() {

  return (
    <footer>
        <div className='pages'>
            <button onClick={()=> {window.location = '/'}}>
                <img alt='Logo' src={favIcon} height={40} />
            </button>
            <button onClick={()=>  window.location.hash = '#faces'}> Carinhas e Aniamis </button>
            <button onClick={()=> window.location.hash = '#people'}> Pessoas </button>
            <button onClick={()=> window.location.hash = '#food'}> Comidas  e plantas </button>
            <button onClick={()=> window.location.hash = '#celebrations'}> Comemorações  e Objetos </button>
            <button onClick={()=> window.location.hash = '#transport'}> Transporte  e locais </button>
            <button onClick={()=> window.location.hash =  '#symbols'}> Símbolos </button>
        </div>
        <div className='about'>
            <h4>Emoji universe</h4>
            <p>feito com a intenção de facilitar para quem quer "copiar" os emojis para a área de transferência, podendo assim utilizá-los em locais </p>
        </div>
        <div className='social'>
            <div>
                <button onClick={()=> {window.history.pushState("teste", "teste", "/github")}}><LuGithub/> Github</button>
                <button onClick={()=> {window.history.pushState("teste", "teste", "/insta")}}><LuInstagram/> Instagram</button>
                <button>Share</button>
                <button><LuGlobe/>Meu site</button>
            </div>
            <div>
                <span>Outros projetos:</span>
                <button>SaveMovies</button>
                <button>Taskins</button>
                <button>Quest</button>
                <button>Downloader</button>
            </div>
        </div>
        <div className='credits'>

        </div>
    </footer>
  );
}

export default FooterComponent;
