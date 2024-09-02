import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/public/pages/login.jsx';
import Registro from './pages/public/pages/registro.jsx';
import Error404 from './pages/public/pages/Error.jsx';
import PrivateRoutes from './routes/routes.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/*" element={<PrivateRoutes />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
