import { Stack } from '@mantine/core';
import { JobCard } from '../JobCard';
import { fetchVacancies } from '../../store/jobSlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { WatchVacancyButton } from '../WatchVacancyButton';


export const JobList: React.FC = () => {
  const vacancies = useAppSelector((state) =>
    state.jobs.jobs
  );

  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.jobs.status);
  const skills = useAppSelector(state => state.jobs.selectedSkills);
  const company = useAppSelector(state => state.jobs.selectedCompany);
  const page = useAppSelector(state => state.jobs.currentPage);
  

  

  useEffect(() => {

    dispatch(fetchVacancies())
  }, [dispatch,  skills, company, page]);

  if (status === 'loading') {
    return (
      <Stack
        gap="md"
        maw={659}
        pl={16}
      >
        <h3>Loading...</h3>
      </Stack>
    )
  }
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