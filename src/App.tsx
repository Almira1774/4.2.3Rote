import { VacanciesPage } from './pages/VacanciesPage';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SingleVacancy, singleVacansyLoader } from './pages/SingleVacancy/index';
import './App.css';
import '@mantine/core/styles.css';
import { ErrorPage } from './pages/ErrorPage';
import { ListContainer, } from './components/ListContainer';
import { MainContainer, vacanciesLoader } from './components/MainContainer/index';
import { AboutMePage } from './pages/AboutMePage';
import { AboutMeInfo } from './components/AboutMeInfo';
//import { AboutMe } from './pages/AboutMePage';
//import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<Layout />} errorElement={<ErrorPage />}  >
        <Route index element={<Navigate to="vacancies/moscow" replace={true} />} />

        <Route path='vacancies' element={<VacanciesPage />} >
          <Route path=':city' element={<MainContainer />} loader={vacanciesLoader} >
            <Route index element={<ListContainer />} />
          </Route>

        </Route>
        <Route path='vacancies/:city/:id' element={<SingleVacancy />} loader={singleVacansyLoader} />

        <Route path='about' element={<AboutMePage />} >
          <Route index element={<AboutMeInfo />} />
        </Route>
        {/*<Route path='*' element={<NotFoundPage />} />*/}
      </Route>

    ),
    {
      // Теперь роутер будет знать, что на продакшене сайт живет в папке /4.2.3Rote
      basename: import.meta.env.PROD ? '/4.2.3Rote' : '/'
    }
  )
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

