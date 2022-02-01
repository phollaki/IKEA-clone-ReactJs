import './App.scss';
import Banner from './components/Banner';
import Bottom from './components/Bottom';
import Footer from './components/Footer';
import Header from './components/Header';
import Inspiration from './components/Inspiration';
import Topics from './components/Topics';

function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <Topics/>
      <Inspiration/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
