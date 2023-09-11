import { Route, Routes } from 'react-router-dom';
import '../res/App.css';
import Home from './home';
import List from './list';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/list' element={<List />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default App;
