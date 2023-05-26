import './App.css'
import { UserProvider } from './context/User';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Dashboard from './pages/dashboard/Dashboard';
import Dev from './pages/dev/Dev';
import Game from './pages/game/Game';
import Login from './pages/login/Login';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (

    <div className='App'>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            
            <Route element={<ProtectedRoutes />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/game' element={<Game />} />
              <Route path='/dev' element={<Dev />} />
            </Route>

            <Route path='/' element={<Navigate to={'/login'} />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App;