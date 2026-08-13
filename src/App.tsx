import { VacanciesPage } from './pages/VacanciesPage';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SingleVacancy } from './pages/SingleVacancy/index';
import './App.css';
import '@mantine/core/styles.css';
import { ListTitle, cityLoader } from './components/ListTitle';
import { ErrorPage } from './pages/ErrorPage';
//import { AboutMe } from './pages/AboutMePage';
//import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<Layout />} errorElement={<ErrorPage />} >
        <Route index element={<Navigate to="vacancies/moscow" replace={true} />} />
        <Route path='vacancies/' element={<VacanciesPage />} >
          <Route path=':city' element={<ListTitle />} loader={cityLoader} />
        </Route>
        <Route path='vacancies/:id' element={<SingleVacancy />} />
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
