import { Button, Group, Input, Pill, SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import { PlusIcon } from '@phosphor-icons/react';
import { useSearchParams } from 'react-router-dom';


export const InputSkills: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [inputValue, setInputValue] = useState('')

    const [skillTags, setSkillTags] = useState<string[]>(() => {
        //делаем ленивую загрузку. В отличии от useEffect он загрузит данные 
        //еще до загрузки страницы. Сработает лишь один раз
        const skillsFromUrl = searchParams.get('skills')
        if (skillsFromUrl) {
            return skillsFromUrl.split(',')
        }
        return ['JavaScript', 'React', 'Redux', 'Python'];
    });


    const handleClick = () => {
        const trimmed = inputValue.trim()//убираем пробелы
        if (trimmed !== '') {
            setInputValue('');

            // Это чистый JavaScript-массив, он хранит самую актуальную информацию.
            const newSkills = [...skillTags, trimmed];
            // Экран обновится чуть позже (асинхронно), но React уже знает про изменения.
            setSkillTags(newSkills)
            const params = new URLSearchParams(searchParams)//копия хранимых параметров           
            params.set('skills', newSkills.join(','))//добавляем актуальный список тегов
            setSearchParams(params);//сохраняем
        }


    }
    const handleRemove = (value: string) => {
        const updatedTags = skillTags.filter(tag => tag !== value);
        setSkillTags(updatedTags);
        const params = new URLSearchParams(searchParams)//копия хранимых параметров   
        if (updatedTags.length > 0) {
            params.set('skills', updatedTags.join(','))//добавляем актуальный список тегов
        }
        else {
            params.delete('skills')//добавляем актуальный список тегов

        }

        setSearchParams(params);//сохраняем
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
                {skillTags.map((tag) => {
                    return (
                        <Pill mr={4}
                            withRemoveButton onRemove={() => handleRemove(tag)} key={tag}>{tag}</Pill>
                    )

                })}
            </Input.Wrapper>
        </SimpleGrid>

    );
}