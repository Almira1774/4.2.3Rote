import { VacanciesPage } from './pages/VacanciesPage';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SingleVacancy, singleVacansyLoader } from './pages/SingleVacancy/index';
import './App.css';
import '@mantine/core/styles.css';
import { ErrorPage } from './pages/ErrorPage';
import { ListContainer, } from './components/ListContainer';
import { JobList, } from './components/JobList';
import { MainContainer, vacanciesLoader } from './components/MainContainer';
//import { AboutMe } from './pages/AboutMePage';
//import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<Layout />} errorElement={<ErrorPage />}  >
        <Route index element={<Navigate to="vacancies/moscow" replace={true} />} />
        <Route path='vacancies' element={<VacanciesPage />} >
          <Route path=':city' element={<MainContainer />} loader={vacanciesLoader} />
          <Route path=':city/:id' element={<SingleVacancy />} loader={singleVacansyLoader} />
        </Route>



        {/*<Route path='about' element={<AboutMe />} />*/}
        {/*<Route path='*' element={<NotFoundPage />} />*/}
      </Route>

    )
  )
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
