import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import UserLoginPage from './pages/UserLoginPage'
import UserProfilePage from './pages/UserProfilePage'
import UserContext from './contexts/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <UserContext.Provider value={{email: ""}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>    
      </BrowserRouter>
    </UserContext.Provider>
    
    
  </StrictMode>,
)
