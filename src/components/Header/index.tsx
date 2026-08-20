import { Box, Flex, Group, Image, SimpleGrid, Text } from "@mantine/core";
import hhLogo from '../../assets/hh.svg';
import Dot from '../../assets/Ellipse.svg';
import { UserCircleIcon } from '@phosphor-icons/react';

import { CustomLink } from "../CustomLink";

export const Header: React.FC = () => {
    return (

        <SimpleGrid
            pos={'fixed'}
            component={'header'}
            cols={3}
            w={'100%'}
            bg='white'
            h='60px'

        >
            <Group gap="xs" maw='116px'
                mr='auto'
                ml='20px'>
                <Image w='30px' src={hhLogo}></Image>
                <Text ff="Open Sans, sans-serif"
                    fw={600} fz={16} lh='155%'
                >.FrontEnd</Text>
            </Group>

            <Group ml={24} gap="xs" miw='212px' justify="center" >
                <Text ff="Open Sans, sans-serif"
                    fz={14}
                    fw={500}
                    c='hsla(241, 1%, 6%, 1)'>Вакансии FE</Text>


                <Image src={Dot} w={6}></Image>
                <Box display={'flex'}>

                    <CustomLink to='about'   >
                        {({ isActive }) => (
                            <Flex >
                                <UserCircleIcon size={22} 
                                color={isActive ? 'hsla(241, 1%, 6%, 1)'
                                     : "hsla(241, 1%, 6%, 0.5)"} />
                                <Text ml={2}
                                td='undefined'
                                    ff="Open Sans, sans-serif"
                                    fz='14px'
                                    fw={500}
                                   
                                    c={isActive ? 'hsla(241, 1%, 6%, 1)'
                                        : "hsla(241, 1%, 6%, 0.5)"}
                                >Обо мне </Text>
                            </Flex>
                        )}

                    </CustomLink>
                </Box>

            </Group>
        </SimpleGrid>
    )
}