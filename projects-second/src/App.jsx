import './App.css';
import './styles/styles.css';
import {BrowserRouter as Router, Routes, Route}         from "react-router-dom";
import Index                                            from 'pages';
import Login                                            from 'pages/login';
import Register                                         from 'pages/register';
import Admin                                            from 'pages/admin/index';
import Clientes                                         from 'pages/admin/clientes'; 
import Analisis                                         from 'pages/admin/analisis'; 
import PrivateLayout                                    from 'layouts/privateLayout';
import PublicLayout                                     from 'layouts/PublicLayout';
import AuthLayout                                       from 'layouts/authLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/register"       element={<Register />} />
          <Route path="/login"          element={<Login />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/admin/clientes" element={<Clientes />} />
          <Route path="/admin/analisis" element={<Analisis />} />
          <Route path="/admin/"         element={<Admin />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Index />} />
        </Route>      
      </Routes>
    </Router>
  );
}

export default App;
