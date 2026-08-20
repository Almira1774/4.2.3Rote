import { Card, Text, Group, Box, Stack } from '@mantine/core';
import type { JobProps } from './types';
import { Space } from '../Space';

export type cardVacansyProps = {
    vacancy: JobProps;
    children?: React.ReactNode;
}

export const JobCard = ({ vacancy, children, }: cardVacansyProps) => {


    return (

        <Card shadow="sm" padding={24}
            withBorder bg='#FFFFFF' mb={24}
        >
            <Box mb="xs"  >
                <Text fw={600} size='xl' c='#364FC7'>{vacancy.name}</Text>
                <Group gap={6} h={24} >
                    <Text fw={400} size='md'>
                        {`${new Intl.NumberFormat('ru-RU').format(Number(vacancy.salary))} ₽`}</Text>
                    <Text size='sm' c='#0F0F1080'  >{`Опыт ${vacancy.experience}`}</Text>
                </Group>
            </Box>


            <Stack gap={0} >
                <Text c="dimmed" fw={400} size='md' mb={8} >{vacancy.company_name}</Text>
                <Box>
                    <Space space={vacancy.space} />
                    <Text fw={400} size="16px"
                        lh='24px'
                        c="dimmed">{vacancy.city}</Text>

                </Box>
            </Stack>

            {children}

        </Card>

    );
}