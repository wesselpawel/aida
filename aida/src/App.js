import './styles/styles.scss';
import logo from './images/Aidalogo3.png'
function App() {
  return (
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
    </div>
  );
}

export default App;
