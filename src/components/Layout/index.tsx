import { Box, SimpleGrid } from "@mantine/core";
import { Outlet} from 'react-router-dom';
import { Header } from "../Header";

const Layout = () => {
    return (
        <>
            <Box >
                <Header />
                <SimpleGrid component='main' bg='hsla(220, 5%, 97%, 1)' >
                    <Outlet ></Outlet>
                </SimpleGrid>
            </Box >
        </>
    )
};

export { Layout };