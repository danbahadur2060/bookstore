import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div className='light:bg-gray-50'>
     <BrowserRouter>
    <App />
  </BrowserRouter>
  </div>
 
  
)
