import './App.css';
import Header from './conponents/Header/Header'
import Home from './conponents/Home/Home'
import About from './conponents/About/About'
import Qa from './conponents/Qa/Qa'
import Footer from './conponents/Footer/Footer'
import Upload from './conponents/Upload/Upload'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Upload />
        <About />
        <Qa />
      </main>
      <Footer />
    </div>
  );
}

export default App;
