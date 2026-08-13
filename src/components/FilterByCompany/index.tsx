import { Button, Group, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addSelectedCompany } from '../../store/jobSlice';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useSearchParams } from 'react-router-dom';

export const FilterByCompany: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const company = params.get('search');
        if (company) {
            setInputValue(company)
            dispatch(addSelectedCompany(company))
        }
    }, [])

    const handleClick = () => {
        const trimmed = inputValue.trim()
        const params = new URLSearchParams(searchParams);
        if (trimmed !== '') {
            dispatch(addSelectedCompany(trimmed));
            params.set('search', trimmed);

        }
        setSearchParams(params)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        if (event.target.value.trim() === '') {
            const params = new URLSearchParams(searchParams)
            dispatch(addSelectedCompany(''));
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