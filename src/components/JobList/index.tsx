import { Stack } from '@mantine/core';
import { JobCard } from '../JobCard';
import { type JobProps } from '../../store/jobSlice';
import { WatchVacancyButton } from '../WatchVacancyButton';

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