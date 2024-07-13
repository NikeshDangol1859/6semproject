import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './style/style.css'
import './style/RegStyle.css'
import AdminApp from './Admin/AdminApp.jsx'
import { SearchProvider } from './Componet/pages/SearchContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SearchProvider>
  <App/>
  </SearchProvider>
  {/* <AdminApp/> */}
  </BrowserRouter>
)
// ReactDOM.render(
//   <SearchProvider>
//       <App />
//   </SearchProvider>,
//   document.getElementById('root')
// );
