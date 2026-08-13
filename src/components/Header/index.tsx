import { Box, Group, Image, SimpleGrid, Text } from "@mantine/core";
import hhLogo from '../../assets/hh.svg';
import Dot from '../../assets/Ellipse.svg';
import { UserCircleIcon } from '@phosphor-icons/react';
import { Link } from "react-router-dom";
import style from './Header.module.css';

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
                    <UserCircleIcon size={22} color="#0f0f10" opacity={0.5} />
                    <Link to='*' className={style.noDecorate}>    <Text ml={2}
                        ff="Open Sans, sans-serif"
                        fz='14px'
                        fw={500}
                        c='hsla(241, 1%, 6%, 0.5)'
                    >Обо мне </Text></Link>
                </Box>

            </Group>
        </SimpleGrid>
    )
}