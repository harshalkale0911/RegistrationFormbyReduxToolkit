 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './components/Store.js'
import RegistrationForm from './components/RegistrationForm.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RegistrationForm />
  </Provider>
 
 
)
