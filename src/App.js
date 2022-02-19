import logo from './logo.svg';
import './App.css';
import { Navbar, Brand } from "./components";
import { Header, Body,Footer} from './containers'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brand />

      <Body />
      <Footer />
    </div>
  );
}

export default App;
