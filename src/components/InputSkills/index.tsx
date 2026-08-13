import { Button, Group, Input, Pill, SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector, } from '../../store/hooks';
import { addTagBySkills, removeTagBySkills } from '../../store/jobSlice';
import { PlusIcon } from '@phosphor-icons/react';
import { useSearchParams } from 'react-router-dom';


export const InputSkills: React.FC = () => {

    const tags = useAppSelector(state => state.jobs.selectedSkills)
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const paramsFromUrl = searchParams.get('skills');
        const skillsArray = paramsFromUrl?.split(',')
        if (skillsArray) {
            skillsArray.forEach(skill => dispatch(addTagBySkills(skill)))

        }
    }, [])


    const handleClick = () => {
        const trimmed = inputValue.trim()//убираем пробелы
        if (trimmed !== '') {
            dispatch(addTagBySkills(trimmed));//добавляем в стейт фильтров 
            setInputValue('')

            const updateTags = [...tags, trimmed]//массив с новым тегом
            const params = new URLSearchParams(searchParams)//копия хранимых параметров
            //добавляем по ключу теги строкой через запятую
            params.set('skills', updateTags.join(','))
            setSearchParams(params);//сохраняем
        }


    }
    const handleRemove = (value: string | '') => {
        const tag = value || ''; //приводим к строке

        dispatch(removeTagBySkills(tag))
        //сщздаем копию параметров 
        const params = new URLSearchParams(searchParams)
        const tagToRemove = tags.filter(t => t !== tag);
        if (tagToRemove.length > 0) {
            params.set('skills', tagToRemove.join(','))
        }
        else {
            params.delete('skills')
        }
        setSearchParams(params)

    }

    return (
        <SimpleGrid p={24} bg="hsla(0, 0%, 100%, 1)" style={{ borderRadius: '8px' }}>
            <Input.Wrapper label="Ключевые навыки"
            >
                <Group mt="xs" gap={8} wrap="nowrap" mb={12} w="100%" >
                    <Input placeholder="Навыки"
                        flex={1} size='sm'
                        bdrs={8}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleClick()
                            }
                        }}
                        value={inputValue}
                        onChange={(event) => {
                            setInputValue(event.target.value);
                        }} />
                    <Button variant="filled" bg='hsla(208, 80%, 52%, 1)'
                        radius='8px'
                        miw={34}

                        opacity={0.5}
                        px={0}
                        onClick={handleClick}

                    ><PlusIcon size={20}
                        color='hsla(0, 0%, 100%, 1)'
                        weight='bold'
                        /></Button>


                </Group>
                {tags.map((tag) => {
                    return (
                        <Pill mr={4}
                        withRemoveButton onRemove={() => handleRemove(tag)} key={tag}>{tag}</Pill>
                    )

                })}
            </Input.Wrapper>
        </SimpleGrid>

    );
}