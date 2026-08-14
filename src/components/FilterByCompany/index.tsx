import { Button, Group, TextInput } from '@mantine/core';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useSearchParams } from 'react-router-dom';

export const FilterByCompany: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [inputValue, setInputValue] = useState(searchParams.get('search') ||'');


    const handleClick = () => {
        const trimmed = inputValue.trim()
        const params = new URLSearchParams(searchParams);
        if (trimmed !== '') {
            params.set('search', trimmed);

        }
        setSearchParams(params)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        if (event.target.value.trim() === '') {
            const params = new URLSearchParams(searchParams);
            params.delete('search');
            setSearchParams(params)
        }
    }

    return (
        <Group wrap={'nowrap'} gap={12}>
            <TextInput
                radius={4}
                leftSection={<MagnifyingGlassIcon size={14} />}
                flex={1}
                label=""
                placeholder="Должность или название компании"
                value={inputValue}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleClick()
                    }
                }}
                onChange={handleChange}
            />
            <Button variant="filled"
                fw={400} fz='16px'
                color="hsla(228, 81%, 59%, 1)"
                size='sm' radius='md' miw="93px"
                onClick={() => {
                    handleClick()


                }}>Найти</Button>
        </Group>
    );
}