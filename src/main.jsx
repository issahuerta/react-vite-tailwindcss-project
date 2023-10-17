import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Button from './components/button.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Button></Button>
  </React.StrictMode>,
)
