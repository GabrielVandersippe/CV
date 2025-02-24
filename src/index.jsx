/* @refresh reload */
import { render } from 'solid-js/web' //Lui dit : load la fonction render de solid-js/web
import './index.css' //Lui dit : load le CSS dans ta page
import App from './App.jsx'

const root = document.getElementById('root')

render(() => <App />, root)
