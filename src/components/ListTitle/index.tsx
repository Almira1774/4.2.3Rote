import { Tabs } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchVacancies,} from '../../store/jobSlice';
import {store} from '../../store';


const ListTitle: React.FC = () => {

    const { city } = useParams();
    const navigate = useNavigate();

    const handleChange = (value: string | null) => {
        navigate(`/vacancies/${value}`)
    }





    return (

        <Tabs defaultValue="moscow"
            onChange={handleChange}
            value={city}
        >
            <Tabs.List
            >
                <Tabs.Tab value="moscow">Москва</Tabs.Tab>
                <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}
const cityLoader = async ({params}:{params:any}) => {
const city = params.city || 'moscow';
const backendCity = city==='petersburg'? 'Санкт-Петербург' :"Москва"
   await store.dispatch(fetchVacancies(backendCity));
const data = store.getState();
const vacancies = data.jobs.jobs

    if (!vacancies || vacancies.length===0) {
        throw new Response("Вакансии для этого города не найдены",
            {
                status: 404,
                statusText: 'Not Found',
            }

        )
    }
    return {
        vacancies,
    }
}
export { ListTitle, cityLoader }