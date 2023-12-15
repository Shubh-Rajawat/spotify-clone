import './App.css'
import Routes from './Routes';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/primereact.min.css";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { BrowserRouter, useNavigate } from 'react-router-dom';


function App() {
  const queryClient = new QueryClient()

  return (
    <PrimeReactProvider>
      <QueryClientProvider client={ queryClient }>
        <BrowserRouter>
          <Routes />
        </BrowserRouter >
      </QueryClientProvider>
    </PrimeReactProvider>
  );
}

export default App;
