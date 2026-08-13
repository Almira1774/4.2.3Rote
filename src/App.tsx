import { VacanciesPage } from './pages/VacanciesPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SingleVacancy } from './pages/SingleVacancy/index';
import './App.css';
import '@mantine/core/styles.css';
//import { AboutMe } from './pages/AboutMePage';
//import { NotFoundPage } from './pages/NotFoundPage';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Navigate to="vacancies" replace={true} />} />
          <Route path='vacancies/' element={<VacanciesPage />} >
            <Route path=':city' element={<VacanciesPage />} />
          </Route>
          <Route path='vacancies/:id' element={<SingleVacancy />} />
          {/*<Route path='about' element={<AboutMe />} />*/}
          {/*<Route path='*' element={<NotFoundPage />} />*/}
        </Route>

      </Routes>
    </>
  )
}

export default App
