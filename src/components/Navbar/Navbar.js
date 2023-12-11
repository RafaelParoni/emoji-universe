import './Navbar.css';
import FavIcon from './../Icons/FavIcon512px.ico'
import { LuGithub,LuInstagram,LuGlobe   } from "react-icons/lu";

function NavbarComponent() {
  var langs = {
    pt: {
        'CarinhasAniamis': 'Carinhas e Aniamis',
        'Pessoas': 'Pessoas',
        'ComidasPlantas': 'Comidas  e Natureza',
        'ComemoraçõesObjetos': 'Comemorações  e Objetos ',
        'TransporteLocais': 'Transporte  e locais',
        'Símbolos': 'Símbolos',
    },
    en: {
        'CarinhasAniamis': 'Faces and Aniamis',
        'Pessoas': 'People',
        'ComidasPlantas': 'Foods & Nature',
        'ComemoraçõesObjetos': 'Commemorations and Objects',
        'TransporteLocais': 'Transportation & Locations',
        'Símbolos': 'Symbols',
    },
    es: {
        'CarinhasAniamis': 'Rostros y Aniamis',
        'Pessoas': 'Gente',
        'ComidasPlantas': 'Alimentos y Naturaleza',
        'ComemoraçõesObjetos': 'Conmemoraciones y Objetos',
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


  return (
    <nav>
        <button onClick={()=> {window.location = '/'}} className='logoNav'>
            <img alt='Logo' src={FavIcon} height={40} />
            <h1> EMOJI UNIVERSE</h1>
        </button>
        <div className='buttonsNav'>
            <button onClick={()=>  window.location.hash = '#faces&Animais'}>{lang.CarinhasAniamis}</button>
            <button onClick={()=> window.location.hash = '#people'}>{lang.Pessoas}</button>
            <button onClick={()=> window.location.hash = '#food&Nature'}>{lang.ComidasPlantas}</button>
            <button onClick={()=> window.location.hash = '#commemorations&objects'}>{lang.ComemoraçõesObjetos}</button>
            <button onClick={()=> window.location.hash = '#transportation&locations'}>{lang.TransporteLocais} </button>
            <button onClick={()=> window.location.hash =  '#symbols'}>{lang.Símbolos}</button>
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
