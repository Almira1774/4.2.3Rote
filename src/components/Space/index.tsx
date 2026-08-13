import { Box, Text } from "@mantine/core";


type ConfigItem = {
    text: string;
    background: string;
    color: string;

}

const spaceConfig: Record<string, ConfigItem> = {
    office: { text: 'офис', background: 'hsla(241, 1%, 6%, 0.1)', color: 'hsla(241, 1%, 6%, 0.5)' },
    hybrid: { text: 'гибрид', background: 'hsla(241, 1%, 6%, 1)', color: 'hsla(0, 0%, 100%, 1)' },
    remote: {
        text: 'можно удаленно',
        background: 'hsla(228, 81%, 59%, 1)',
        color: 'hsla(0, 0%, 100%, 1)'
    }
};


export const Space = ({ space }: { space: string }) => {
    const current = spaceConfig[space] || spaceConfig.office;

    return (
        <Box bg={current.background} w='fit-content' bdrs='xs'>
            <Text
                size='xs'
                c={current.color}
                ff="Inter, sans-serif"
                pl={6} pr={6}
            >
                {current.text}</Text>
        </Box>

    )
}