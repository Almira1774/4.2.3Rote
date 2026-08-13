import { Grid } from "@mantine/core";
import { ListContainer } from "./ListContainer";
import { SelectByCity_SkillsContainer } from "./SelectByCity_SkillsContainer";


export const MainContainer: React.FC = () => {
    return (
        <Grid gap={24}  >
            <Grid.Col span={{ base: 1, md: 1 }} />
            <Grid.Col span={{ base: 7, md: 3 }}><SelectByCity_SkillsContainer /></Grid.Col>
            <Grid.Col span={{ base: 10, md: 7 }} ml={'auto'}><ListContainer /></Grid.Col>
            <Grid.Col span={{ base: 1, md: 1 }} />
        </Grid>
    )
}