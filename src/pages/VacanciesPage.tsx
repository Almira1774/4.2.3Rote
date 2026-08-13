import { Divider, SimpleGrid } from "@mantine/core";
import { Vacancies } from "../components/Vacancies";
import { MainContainer } from "../components/MainContainer";

const VacanciesPage = () => {
    return (
        <SimpleGrid component='main' bg='hsla(220, 5%, 97%, 1)' >
            <Vacancies />
            <Divider color="gray.2" size="xs"
            />
            <MainContainer />
        </SimpleGrid>
    )
};

export { VacanciesPage };