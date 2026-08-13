import { SimpleGrid } from '@mantine/core';
import { ListTitle } from '../ListTitle';
import { JobList } from '../JobList';
import { Pagination_ } from '../Pagination';

export const ListContainer: React.FC = () => {


    return (

        <SimpleGrid cols={1} mih='80vh'
            component='section' >
            <ListTitle />
            <JobList />
            <Pagination_ />
        </SimpleGrid>
    );
}