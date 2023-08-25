import './App.css'
import Routes from './Routes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/primereact.min.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";



function App() {
  return (
    <PrimeReactProvider>
      <Routes />
    </PrimeReactProvider>
  );
}

export default App;
