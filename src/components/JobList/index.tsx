import { Stack } from '@mantine/core';
import { JobCard } from '../JobCard';
import { fetchVacancies, type JobProps } from '../../store/jobSlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { WatchVacancyButton } from '../WatchVacancyButton';
import { useLoaderData, useParams } from 'react-router-dom';

type vacanciesProps={
  vacancies: JobProps[]
}
export const JobList: React.FC<vacanciesProps> = ({vacancies}) => {
  
  if (vacancies.length === 0) {
    return (
      <Stack
        gap="md"
        pl={16}
        maw={659}
      >
        <h3>По вашему запросу ничего не найдено</h3>
        <p>Попробуйте изменить фильтры</p>
      </Stack>
    )
  }

  return (
    <Stack
      gap="md"
      mt='xl'
      maw={659}
    >
      {vacancies.map(vacancy => {
        return (
          <JobCard key={vacancy.id} vacancy={vacancy}  >
            <WatchVacancyButton id={vacancy.id} />
          </JobCard>

        )
      })}
    </Stack>
  );
}