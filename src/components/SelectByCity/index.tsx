import { Select, SimpleGrid } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addSelectedCity } from '../../store/jobSlice';
import { MapPinIcon } from '@phosphor-icons/react';
import { useSearchParams } from 'react-router-dom';

export const SelectByCity: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(state => state.jobs.selectedCity)
const [searchParams,setSearchParams]=useSearchParams();

//вместо него теперь табы!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Callback-функция: Mantine сам вызывает её под капотом при клике на город 
// и автоматически передает новое выбранное значение в аргумент 'value'
const handleChange=(value: string  | null)=>{
// Так как в нашем Select нет крестика очистки, value всегда будет строкой.
    // Но тип компонента Mantine строго требует обработку 'null', поэтому оператор || 
    // подстраховывает код и превращает любую пустоту в безопасную пустую строку ''.
   const newCity = value || '';
     // Диспатчим очищенное значение в Redux для обновления стейта и запроса вакансий
    dispatch(addSelectedCity(newCity));
    const params  = new URLSearchParams(searchParams);
    params.set('city', newCity);
    setSearchParams(params);
    
 
}

  return (
    <SimpleGrid p={24} bg="white" bdrs={8}>
      <Select
        radius={4}
        h={30}
        label=""
        placeholder="Все города"
        onChange={handleChange}
        
        value={selectedCity || 'Все города'}
        searchable
        leftSection={<MapPinIcon size={18} color="var(--mantine-color-gray-5)" />}
        data={['Все города', 'Москва', 'Санкт-Петербург']}

      />
    </SimpleGrid>

  );
}