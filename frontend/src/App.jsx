import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Header from './common/Header/Header.jsx'

import './style.css'

function App() {
    return (
        <BrowserRouter>
            {/* Linking */}
            <div className="site-map">
                <h3>Site Map</h3>
                <Link to="/header">Header</Link>
                

            </div>

            {/* Route Configuration */}
            <Routes>
                <Route path="/header" element={<Header />}/>
            </Routes>    
        </BrowserRouter>
    )
}

export default App;
