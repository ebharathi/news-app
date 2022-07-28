import React from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

import { Home } from './components/Home';
import News from './components/headline/news';
import Category from './components/category/Category';
import Cnews from './components/category/Cnews';
const App = () => {
     
  return (
   <div className="App">
        <Router>
              <Routes>
                    <Route path="/" element={<Navigate to="/country/in"/>} />
                    <Route path="/country/:id" element={<Home />} />
                    <Route path="/country/:id/headlines/:id" element={<News />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/category/:id/:id" element={<Cnews />} />
              </Routes>
        </Router>
   </div>
  )
}

export default App