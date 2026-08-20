import { Card, Text } from "@mantine/core";

const AboutMeInfo = () => {
    return (
        <Card>
            <Text component="h2" 
            fw={700} 
            display='flex' >
                Иван Васильев
            </Text>

            <Text component="p">
                Привет! Я - Frontend-разработчик.
                Пишу приложения на React + TypeScript + Redux Toolkit.
            </Text>
        </Card>

    )
};

export { AboutMeInfo };