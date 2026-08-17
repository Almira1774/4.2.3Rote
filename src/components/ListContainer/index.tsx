import { SimpleGrid } from '@mantine/core';
import { ListTitle } from '../ListTitle';
import { JobList } from '../JobList';
import { Pagination_ } from '../Pagination';
import { Outlet, useLoaderData } from 'react-router-dom';
import type { JobProps } from '../../store/jobSlice';

interface ListContainerProps {
  vacancies: JobProps[]; // Указываем, что ждём массив вакансий
}

export const ListContainer: React.FC<ListContainerProps> = ({vacancies}) => {


    return (

        <SimpleGrid cols={1} mih='80vh'
            component='section' >
            <ListTitle />
            <JobList vacancies={vacancies}/>
            {/*<Pagination_ />*/}
        </SimpleGrid>
    );
}