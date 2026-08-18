import { Divider, SimpleGrid } from "@mantine/core";
import { Vacancies } from "../components/Vacancies";
import { MainContainer } from "../components/MainContainer";
import { Outlet } from "react-router-dom";

const VacanciesPage = () => {
    return (
        <>
            <Divider color="gray.2" size="xs"
            />
            <Outlet></Outlet>
        </>


    )
};

export { VacanciesPage };