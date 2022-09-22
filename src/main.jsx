import React from 'react'
import ReactDOM from 'react-dom/client'
import BackgroundImage from './components/BackgroundImage;index'
import App from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundImage>
      <App />
    </BackgroundImage>
  </React.StrictMode>
)
