import { SimpleGrid } from '@mantine/core';
import { ListTitle } from '../ListTitle';
import { JobList } from '../JobList';
import { Pagination_ } from '../Pagination';
import type { JobProps } from '../../store/jobSlice';
import { useOutletContext } from 'react-router-dom';

interface ListContainerProps {
    vacancies: JobProps[]; // Указываем, что ждём массив вакансий
    totalPages: number; // Указываем, что ждём количество страниц
}

export const ListContainer: React.FC = () => {
    const { vacancies, totalPages } = useOutletContext<ListContainerProps>()

    return (

        <SimpleGrid cols={1} mih='80vh'
            component='section' >
            <ListTitle />
            <JobList vacancies={vacancies} />
            <Pagination_ totalPages={totalPages} />
        </SimpleGrid>
    );
}