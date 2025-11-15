import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Header from './common/Header/Header.jsx'

import './style.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/header" element={<Header />}/>
            </Routes>    
        </BrowserRouter>
    )
}

export default App;
