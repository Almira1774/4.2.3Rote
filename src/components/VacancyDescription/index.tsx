import { Box, Card,Text } from "@mantine/core";



type DescriptionProps = {
    description: string | undefined;
    about_company: string | undefined;
}


const VacancyDescription: React.FC<DescriptionProps> = ({ description, about_company }) => {
    return (
        <>
            <Card shadow="sm" padding={24}
                withBorder bg='#FFFFFF'>
                <Box mb="xs" >
                    <Text fw={600} size='lg' >Компания</Text>
                    <Text >{about_company}</Text>
                </Box>

                <Box mb="xs" >
                    <Text fw={600} size='lg'>О вакансии:</Text>
                    <Text>{description}</Text>
                </Box>
            </Card>
        </>

    )
};

export { VacancyDescription };