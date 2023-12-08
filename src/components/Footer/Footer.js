import './Footer.css';

import favIcon from './../Icons/FavIcon256px.ico'
import { LuGithub, LuInstagram, LuCat, LuGlobe, LuCrown } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdTranslate, MdDarkMode, MdLightMode } from "react-icons/md";

 function FooterComponent() {

   function setTheme(theme){
        console.log(theme)
        window.localStorage.setItem('theme', theme)
        document.getElementById('html').setAttribute('class', theme)
   }
  return (
    <footer>
        <div className='pages'>
            <button onClick={()=> {window.location = '/'}}>
                <img alt='Logo' src={favIcon} height={40} />
            </button>
            <button onClick={()=>  window.location.hash = '#faces'}> {lang.CarinhasAniamis} </button>
            <button onClick={()=> window.location.hash = '#people'}> {lang.Pessoas} </button>
            <button onClick={()=> window.location.hash = '#food'}> {lang.ComidasPlantas} </button>
            <button onClick={()=> window.location.hash = '#celebrations'}> {lang.ComemoraçõesObjetos} </button>
            <button onClick={()=> window.location.hash = '#transport'}> {lang.TransporteLocais}</button>
            <button onClick={()=> window.location.hash =  '#symbols'}> {lang.Símbolos} </button>
        </div>
        <div className='about'>
            <h4>{lang.Name}</h4>
            <p>{lang.Description} </p>
        </div>
        <div className='social'>
            <div>
                <button onClick={()=> window.open('https://github.com/RafaelParoni')} ><LuGithub/> Github</button>
                <button onClick={()=> window.open('https://www.instagram.com/rafaelparroni/')} ><LuInstagram/> Instagram</button>
                <button onClick={()=> window.open('')} > <FaWhatsapp/> {lang.share}</button>
                <button onClick={()=> window.open('https://rafaelparoni.vercel.app/inicio')} ><LuGlobe/>{lang.MySite}</button>
            </div>
            <div>
                <span>{lang.OutherProjects}</span>
                <button onClick={()=> window.open('https://save-movie.vercel.app/')} >SaveMovies</button>
                <button onClick={()=> window.open('https://taskin-five.vercel.app/')}>Taskins</button>
                <button onClick={()=> window.open('https://rafaelparoni.vercel.app/quest')}>Quest</button>
                <button onClick={()=> window.open('https://downloader-app-sable.vercel.app/')}>Downloader</button>
            </div>
        </div>
        <div className='credits'>
            <span className='select-lang-label'><MdTranslate/> Linguagem</span>
            <select className='select-lang' name='select-lang'>
                <option value="pt-br">Português(brasil)</option>
                <option value="en-us">Inglês</option>
                <option value="es">Espanhol</option>
            <div className='theme-div'>
                <div>
                    <span><LuCat/> Themes:</span> <br/>
                    <div id="input-themes">
                        <div className="radio">
                            <label>
                            <input onChange={(e)=> setTheme('dark')} id='dark' type="radio" name="option[356]" value="dark"/>
                            <span><MdDarkMode/> Dark</span>
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                            <input onChange={(e)=> setTheme('light')} id='light' type="radio" name="option[356]" value="light"/>
                            <span><MdLightMode/> Light</span>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
            </select>
            <h3><LuCrown/> {lang.credits}</h3>
            <p>Builder: <a href='https://www.instagram.com/rafaelparroni/'>Rafael Paroni</a></p>
            <p>Host  <a href='https://vercel.com/'>Vercel.app</a></p>
            <p>design: <a href='https://www.instagram.com/rafaelparroni/'>Rafael Paroni</a></p>
        </div>
    </footer>
  );
}

export default FooterComponent;
