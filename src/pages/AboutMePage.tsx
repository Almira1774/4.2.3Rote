import {Grid, } from "@mantine/core";
import { Outlet } from "react-router-dom";

const AboutMePage = () => {

    
    return (
        <Grid mt={100}>
            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6}><Outlet /></Grid.Col>
            <Grid.Col span={3}></Grid.Col>
        </Grid>
    )
};

export { AboutMePage };