import './App.css';
import './Components/CSS/header.css';
import './Components/CSS/footer.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About  from './Components/About';
import Shop from './Components/Shop';


function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
