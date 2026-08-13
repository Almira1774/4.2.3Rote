import { Group, Pagination } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changePage } from '../../store/jobSlice';
import type React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';


export const Pagination_: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.jobs.currentPage);
  const vacanciesPerPage = useAppSelector(state => state.jobs.totalPages);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
const pageParams = new URLSearchParams(searchParams);
const page = pageParams.get('page')
if(page){
dispatch(changePage(Number(page)))
}
  },[])

  const hanleChange = (value: number) => {
    dispatch(changePage(value))
    const params = new URLSearchParams(searchParams);
params.set('page', value.toString())
    setSearchParams(params)
  }

  return (
    <Pagination.Root total={vacanciesPerPage || 1}
      radius="xs"
      value={currentPage}
      onChange={ hanleChange}>
      <Group gap={5} justify="center" mb={82} >
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
