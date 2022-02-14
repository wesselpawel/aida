import logo from "./images/logo.png"
import klaser from "./images/klaser.png"
import papiery from "./images/papiery.png"
import line from "./images/line.png"
import waga from "./images/waga.png"
import ksiega from "./images/ksiega.png"
import facebook from "./images/facebook.png"
import cik from "./images/cik.png"
import mybusiness from "./images/mybusiness.png"
import trojmiasto from "./images/trojmiasto.png"
import './App.css';
import react from 'react';
import {Link} from 'react-scroll'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'



class App extends react.Component {
  constructor(props){
  super(props)
    this.state = {
      visible:false,
      style:{
        width:'100%',
        height:'300px',
        overflow:'hidden',
        position:'relative'
      },
      whichActive:'',
    }
  }
  render()
  {
  return (
    <div className="App">
        <div class="navbar-wrapper">
                <img src={logo} alt=""/>
        </div>
      <div className="content-wrapper">
      <section>
        <div className="quote-wrapper">
        <h1 className="quote">Firma to nie nazwa, stos papierów i zera na koncie. To mieszanka ludzkich doświadczeń, relacji i zaangażowania. Za każdym biznesem stoi człowiek i to właśnie do niego kieruję swoją ofertę.</h1>
        </div>
      </section>
      
        <h1 id="oferta" className="headline">Nasza oferta</h1>
        <section >
      <div className="content">
        <ul className="items">
          <li className="item">
            <img src={papiery} alt="papiery"/>
            <strong><h1>PODATKOWA KSIĘGA PRZYCHODÓW I ROZCHODÓW</h1></strong>
          </li>
          <li className="item">
            <img src={klaser} alt="papiery"/>
            <strong><h1>EWIDENCJA RYCZAŁTOWA</h1></strong>
          </li>
          <li className="item">
            <img src={waga} alt="papiery"/>
            <strong><h1>KADRY I PŁACE</h1></strong>
          </li>
          <li className="item">
            <img src={ksiega} alt="papiery"/>
            <strong><h1>KSIĘGA HANDLOWA</h1></strong>
          </li>
        </ul>
      </div>
      </section>
      <section>
      <h1 id="cennik" className="headline">Cennik</h1>
      <table className="new-offer">
        <tr>
        <th>Podatkowa księga przychodów i rozchodów</th><th colspan="2">Cena</th>
        
        </tr><br/>
        <tr><td>do 10 dokumentów</td><td>170zł - 200zł</td></tr>
        <tr><td>od 10 - 30 dokumentów</td><td>200zł - 250zł</td></tr>
        <tr><td>od 30 - 50 dokumentów</td><td>270zł - 350zł</td></tr>
        <tr><td>powyżej 50 dokumentów</td><td colspan="2">wycena indywidualna</td></tr>
      </table>

      <table className="new-offer">
        <tr>
        <th>Obsługa kadrowo - płacowa</th><th colspan="2">Cena</th>
        </tr><br/>
        <tr><td>umowa zlecenie</td><td colspan="2">40zł/ osobę</td></tr>
        <tr><td>umowa o pracę</td><td colspan="2">50zł/ osobę</td></tr>
        <tr><td>zus właściciela za 1 miesiąc</td><td colspan="2">40zł</td></tr>
        <tr><td>powyżej 50 dokumentów</td><td colspan="2">wycena indywidualna</td></tr>
      </table>

      <table className="new-offer">
        <tr>
        <th>Ryczałt ewidencjonowany</th><th colspan="2">Cena</th>
        </tr><br/>
        <tr><td>do 10 dokumentów</td><td>100zł - 150zł</td></tr>
        <tr><td>od 10 - 30 dokumentów</td><td>200zł - 250zł</td></tr>
      </table>
      
      <table className="new-offer">
        <tr>
        <th>PIT-y roczne</th><th colspan="2">Cena</th>
        </tr><br/>
        <tr><td>PIT-37/PIT-36</td><td colspan="2">50zł</td></tr>
      </table>
      </section>
     
    </div>
    <div className="nav-menu">
      <table>
        <tr><td colspan="2"><div className={ this.state.whichActive==='oferta' ? 'nav-itemblue' : 'nav-item' }></div></td><div><Link to="oferta"><button value="oferta" onClick={() => this.setState({whichActive:'oferta'})} className="nav-button" >OFERTA</button></Link></div></tr>
        <td><img className="line" src={line} alt="line"/></td>
        <tr><td colspan="2"><div className={ this.state.whichActive==='cennik' ? 'nav-itemblue' : 'nav-item' }></div></td><div><Link to="cennik"><button value="cennik" onClick={() => this.setState({whichActive:'cennik'})} className="nav-button" >CENNIK</button></Link></div></tr>
        <td><img className="line" src={line} alt="line"/></td>
        <tr><td colspan="2"><div className={ this.state.whichActive==='kontakt' ? 'nav-itemblue' : 'nav-item' }></div></td><div><Link to="kontakt"><button value="kontakt" onClick={() => this.setState({whichActive:'kontakt'})} className="nav-button" >kontakt</button></Link></div></tr>
      </table>
    </div>
    <h1 id="kontakt" className="headline">Dane kontaktowe</h1>
    <section className="kontakt">
     <strong> BIURO RACHUNKOWE AIDA<br/>
      SANDRA JASIŃSKA<br/>
      81-133 GDYNIA<br/>
      PODCHORĄŻYCH 10 A (PIERWSZE PIĘTRO)<br/>
      TEL. 603 395 723<br/>
      EMAIL: ksiegowosc.aida@gmail.com </strong><br />
     
          
          <button
          onClick={() => this.setState({visible:!this.state.visible})}
          className="show-map"
          >
              POKAŻ NA MAPIE
          </button>
          <div className="map">
          <Map
          defaultCenter={this.props.center}
          style={this.state.style} 
          google={this.props.google}
          zoom={15}
          visible={this.state.visible}
          initialCenter={{
            lat: 54.5509147,
            lng: 18.533965
            }}
          >
              <Marker />
          </Map>
          </div>
          <ul className="contact-list">
          <a href="https://www.facebook.com/biuroaida/" rel="noreferrer" target="_blank"><li className="item"><img  width="25%" src={facebook} alt="?"/></li></a>
          <a href="https://biuro-rachunkowe-aida-biuro-podchorazych.business.site/?m=true" rel="noreferrer" target="_blank"><li className="item"><img src={mybusiness} alt="?"/></li></a>
            <a href="https://www.trojmiasto.pl/Biuro-Rachunkowe-Aida-S-Jasinska-o75098.html" rel="noreferrer" target="_blank"><li className="item"><img src={trojmiasto} alt="?"/></li></a>
            <a href="https://www.cik.org.pl/biuro/biuro-rachunkowe-aida-sandra-jasinska-8551" rel="noreferrer" target="_blank"><li className="item"><img width="25%" src={cik} alt="?"/></li></a>
          </ul>
          <div className="footer">
            Wszelkie prawa zastrzeżone &copy; ksiegowosc.aida.pl
            <br/>
            designed by wesselpawel.pl
          </div>
    </section>
    
    </div>
  );
}
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyATjmqUcoBbwCTCA4y_9rOPzUp5LAhHl34'),
  version: 3.31
 })(App);