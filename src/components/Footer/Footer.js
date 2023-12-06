import './Footer.css';

import favIcon from './../Icons/FavIcon256px.ico'
import { LuGithub,LuInstagram,LuGlobe   } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

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
                <button onClick={()=> window.open('https://github.com/RafaelParoni')} ><LuGithub/> Github</button>
                <button onClick={()=> window.open('https://www.instagram.com/rafaelparroni/')} ><LuInstagram/> Instagram</button>
                <button onClick={()=> window.open('')} > <FaWhatsapp/> Share</button>
                <button onClick={()=> window.open('https://rafaelparoni.vercel.app/inicio')} ><LuGlobe/>Meu site</button>
            </div>
            <div>
                <span>Outros projetos:</span>
                <button onClick={()=> window.open('https://save-movie.vercel.app/')} >SaveMovies</button>
                <button onClick={()=> window.open('https://taskin-five.vercel.app/')}>Taskins</button>
                <button onClick={()=> window.open('https://rafaelparoni.vercel.app/quest')}>Quest</button>
                <button onClick={()=> window.open('https://downloader-app-sable.vercel.app/')}>Downloader</button>
            </div>
        </div>
        <div className='credits'>

        </div>
    </footer>
  );
}

export default FooterComponent;
