import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Film from './get-film.jsx'
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Bọc Router ở đây hoặc trong App đều được
import App from './App.jsx'
import './styles/variables.css' // Import biến màu sắc

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Nếu bạn bọc BrowserRouter ở đây thì trong App.jsx không cần bọc nữa */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)