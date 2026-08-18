import { Group, Pagination } from '@mantine/core';
import type React from 'react';
import { useSearchParams } from 'react-router-dom';


export const Pagination_: React.FC<{ totalPages: number }> = ({ totalPages }) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;


  const hanleChange = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(value))
    setSearchParams(params)
  }

  return (
    <Pagination.Root total={totalPages || 1}
      radius="xs"
      value={currentPage}
      onChange={hanleChange}>
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
