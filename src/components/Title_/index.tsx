import { Title, Text,Stack } from "@mantine/core"

export const Title_: React.FC = () => {
    return (
       <Stack gap={4} mb={24} align="flex-start">
            <Title
                ff="Open Sans, sans-serif"
                fw={700} lh='135%' lts='0%'
                fz={26}
                component='h1'
                ta='left'
            >Список вакансий</Title>
            <Text
                ff="Open Sans, sans-serif"
                fw={500}
                fz={20} lts={0} lh='135%'
                c='hsla(241, 1%, 6%, 0.5)'
            >По профессии Frontend-разработчик</Text>
        </Stack>
    )
}