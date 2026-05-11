import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import UserLoginPage from './pages/UserLoginPage'
import UserProfilePage from './pages/UserProfilePage'
import UserContext from './contexts/UserContext'
import UserContextProvider from './components/UserContextProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>    
      </BrowserRouter>
    </UserContextProvider>
    
    
  </StrictMode>,
)
