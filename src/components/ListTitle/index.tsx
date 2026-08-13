import { Tabs } from '@mantine/core';
import { useNavigate, useParams} from 'react-router-dom';


export const ListTitle: React.FC = () => {

const {city}= useParams();
const navigate = useNavigate()

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