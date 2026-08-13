import { Box } from "@mantine/core";
import { Outlet} from 'react-router-dom';
import { Header } from "../Header";

const Layout = () => {
    return (
        <>
            <Box >
                <Header />
                <main >
                    <Outlet ></Outlet>
                </main>
            </Box >
        </>
    )
};

export { Layout };