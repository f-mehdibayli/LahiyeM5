import './App.css';
import HomePage from './pages/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path=''/>
       </Routes>
    </BrowserRouter>

    </div>
     
  );
}

export default App;
