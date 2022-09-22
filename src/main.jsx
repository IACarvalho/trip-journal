import React from 'react'
import ReactDOM from 'react-dom/client'
import BackgroundImage from './components/BackgroundImage'
import App from './routes'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundImage>
      <App />
    </BackgroundImage>
  </React.StrictMode>
)
