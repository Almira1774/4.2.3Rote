import { Grid } from "@mantine/core";
import { FilterByCompany } from "../FilterByCompany";
import { Title_ } from "../Title_";
import type React from "react";

export const Vacancies: React.FC = () => {
    return (
        <Grid mt={84} gap={24} >
            <Grid.Col span={{ base: 1, md: 1 }} />
            <Grid.Col span={{ base: 9, md: 5 }} ><Title_></Title_></Grid.Col>
            <Grid.Col span={{ base: 10, md: 5 }} ml='auto'><FilterByCompany></FilterByCompany></Grid.Col>
            <Grid.Col span={{ base: 1, md: 1 }} />
        </Grid>

    )
}