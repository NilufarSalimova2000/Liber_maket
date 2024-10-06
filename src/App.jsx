import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/home';
import { MainLayout } from './layout/main-layout';
import { NewBookDetail } from './components/newbook-detail';
import { ProfileLayout } from './components/profile-layout';
import { Obuna } from './components/obuna';
import { Sozlamalar } from './components/sozlamalar';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='/newbook/:id' element={<NewBookDetail />} />
          <Route path='profile' element={<ProfileLayout />}>
            <Route index element={<Obuna />} />
            <Route path='hisob' element={<div>Э-Хисоб</div>} />
            <Route path='kitoblar' element={<div>Китобларим</div>} />
            <Route path='saqlangan' element={<div>Сақланганлар</div>} />
            <Route path='sozlamalar' element={<Sozlamalar />} />
            <Route path='rejim' element={<div>Тунги режим</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
