import { Divider, } from "@mantine/core";
import { Vacancies } from "../components/Vacancies";
import { Outlet } from "react-router-dom";

const VacanciesPage = () => {
    return (
        <>
            <Vacancies />
            <Divider color="gray.2" size="xs"
            />
            <Outlet></Outlet>
        </>


    )
};

export { VacanciesPage };