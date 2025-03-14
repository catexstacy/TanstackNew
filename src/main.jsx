import {QueryClient, QueryClientProvider} from '@tanstack/react-query' 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App'
import { BrowserRouter, Routes, Route } from 'react-router'
import UserProfile from './pages/Userprofile'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
  <Routes>
    <Route path={"/"} element= {<App />} />
    <Route path="/:username" element={<UserProfile />} />
  </Routes>
  </BrowserRouter>
  </QueryClientProvider>
 

)
