import './Footer.css';

import favIcon from './../Icons/FavIcon256px.ico'
import { LuGithub, LuInstagram, LuCat, LuGlobe, LuCrown } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdTranslate, MdDarkMode, MdLightMode } from "react-icons/md";

 function FooterComponent() {

    function editLing(value){
        console.log(value)
        window.location.pathname = '/' + value + '/'
        window.localStorage.setItem('lang', value)
    }
    setTimeout(function(){
        document.getElementById('lang').value = window.localStorage.getItem('lang')
    },)


   var langs = {
        pt: {
            'Name': 'Emoji Universe',
            'Description': 'feito com a intenção de facilitar para quem quer "copiar" os emojis para a área de transferência, podendo assim utilizá-los em locais',
            'MySite': 'Meu site',
            'share': 'compartilhar',
            'OutherProjects': 'Outros projetos:',
            'lang': 'Linguagem',
            'credits': 'Créditos:',
            'CarinhasAniamis': 'Carinhas e Aniamis',
            'Pessoas': 'Pessoas',
            'ComidasPlantas': 'Comidas  e plantas',
            'ComemoraçõesObjetos': 'Comemorações  e Objetos ',
            'TransporteLocais': 'Transporte  e locais',
            'Símbolos': 'Símbolos',
        },
        en: {
            'Name': 'Emoji Universe',
            'Description': 'made with the intention of making it easier for those who want to "copy" the emojis to the clipboard, thus being able to use them in places',
            'MySite': 'My personal website',
            'share': 'share',
            'OutherProjects': 'Other projects:',
            'lang': 'Language',
            'credits': 'Credits:',
            'CarinhasAniamis': 'Faces and Aniamis',
            'Pessoas': 'People',
            'ComidasPlantas': 'Foods & Plants',
            'ComemoraçõesObjetos': 'Commemorations and Objects',
            'TransporteLocais': 'Transportation & Locations',
            'Símbolos': 'Symbols',
        },
        es: {
            'Name': 'Emoji Universe',
            'Description': 'Hecho con la intención de facilitar a aquellos que quieran "copiar" los emojis al portapapeles, pudiendo así usarlos en lugares',
            'MySite': 'Mi sitio web personal',
            'share': 'Compartir',
            'OutherProjects': 'Otros proyectos:',
            'lang': 'Idioma',
            'credits': 'Créditos:',
            'CarinhasAniamis': 'Rostros y Aniamis',
            'Pessoas': 'Gente',
            'ComidasPlantas': 'Comidas  e plantas',
            'ComemoraçõesObjetos': 'Alimentos y plantas',
            'TransporteLocais': 'Transporte y Ubicaciones',
            'Símbolos': 'Símbolos',
        }
   }

   var lang = {}

   async function setLang(){
        var langSeletc = window.localStorage.getItem('lang')

        switch(langSeletc){
            case 'pt':
                lang = langs.pt
            break
            case 'es':
                lang = langs.es
            break
            default: 
                lang = langs.en
            break
        }
   }
   setLang()


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
            <span className='select-lang-label'><MdTranslate/> {lang.lang}</span>
            <select id='lang' onChange={(e)=> editLing(e.target.value)} className='select-lang' name='select-lang'>
                <option value="pt">Português(brasil)</option>
                <option value="en">English</option>
                <option value="es">Español</option>
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
