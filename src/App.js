import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { AuthProvider } from './contexts/firebaseContext';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';  
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/edit-profile' element={<EditProfile />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path='/sign' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
