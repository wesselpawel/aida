import './styles/styles.scss';
import logo from './images/Aidalogo.png'
function App() {
  return (
    <div className="all">
    <div className='filter'></div>
      <div>
      <header>
        <ul>
          <li className='first-item'>
            <div>
              <img src={logo} alt=""/>
            </div>
          </li>
          <li className='second-item'>
            <nav>
              <div>OFERTA</div>
              <div>CENNIK</div>
              <div>KONTAKT</div>
            </nav>
          </li>
        </ul>
      </header>
      <div className='content'>
        <div className='text'>
          Firma to nie nazwa, stos papierów i zera na koncie. To mieszanka ludzkich doświadczeń, relacji i zaangażowania. Za każdym biznesem stoi człowiek i to właśnie do niego kieruję swoją ofertę.
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
