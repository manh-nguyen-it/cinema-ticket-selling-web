import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './home/Home.jsx'

import './style.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
            </Routes>    
        </BrowserRouter>
    )
}

export default App;
