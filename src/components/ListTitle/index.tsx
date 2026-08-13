import { Tabs } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { fetchVacancies } from '../../store/jobSlice';


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
const cityLoader = async () => {

    const dispatch = useAppDispatch();
    const vacancies = await dispatch(fetchVacancies());

    if (!vacancies) {
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