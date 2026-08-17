import { Divider, SimpleGrid } from "@mantine/core";
import { Vacancies } from "../components/Vacancies";
import { MainContainer } from "../components/MainContainer";
import { Outlet } from "react-router-dom";

const VacanciesPage = () => {
    return (
        <SimpleGrid component='main' bg='hsla(220, 5%, 97%, 1)' >
            <Vacancies />
            <Divider color="gray.2" size="xs"
            />
            <Outlet></Outlet>
        </SimpleGrid>
    )
};

export { VacanciesPage };