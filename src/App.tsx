import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Library from './pages/library';
import { UserStorage } from './context/userContext';
import Login from './pages/login';
import { MainContainer } from './App-style';
import Shorts from './pages/shorts';
import Subscribe from './pages/subscribe';
import YourVideos from './pages/your-videos';
import SearchPage from './pages/search';
import SingUp from './pages/sign-up';

function App() {

  return (
    <BrowserRouter> 
      <UserStorage>
        <div className="App">
          <MainContainer>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shorts' element={<Shorts />} />
              <Route path='/subscribe' element={<Subscribe />} /> 
              <Route path='/library' element={<Library />} />
              <Route path='/login' element={<Login />} />
              <Route path='/yourvideos' element={<YourVideos />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/sign-up' element={<SingUp />} />
            </Routes>
          </MainContainer>
        </div>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
