import { Grid } from "@mantine/core";
import { ListContainer } from "./ListContainer";
import { SelectByCity_SkillsContainer } from "./SelectByCity_SkillsContainer";
import { useLoaderData } from "react-router-dom";
import type { JobProps } from "../store/jobSlice";
//лоадер запускается до создания компонентов.
//поскольку хуки в виде useSearchParams исп.нельзя,берем данные из request
//это просто легальный способ для лоадера узнать, какие фильтры сейчас
//  выбраны в URL-строке, без использования запрещенных там хуков 
export const vacanciesLoader = async ({ params, request }: { params: any; request: Request }) => {
  const city = params.city || "moscow"
  const backendCity = city === "petersburg" ? "Санкт-Петербург" : "Москва"


  //новый объект url чтобы прочитать query параметры из него
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';//и начальное значение
  const skills = url.searchParams.get('skills') || ['JavaScript', 'React', 'Redux', 'Python'].join(',');
  const page = url.searchParams.get('page') || '1';

  //Собираем правильную строку запроса для сервера
  const queryParams = [`city=${backendCity}`, `page=${page}`]

  if (search) {
    queryParams.push(`search=${search}`);
  }
  if (skills) {
    queryParams.push(`skills=${skills}`);
  }

  const res = await fetch(`https://kata-jobs.onrender.com/api/jobs?${queryParams.join('&')}`);

  if (!res.ok) {
    throw new Response('Ошибка сервера', {
      status: res.status,
      statusText: res.statusText,
    })
  }
  return res.json()

}

export const MainContainer: React.FC = () => {
    const data = useLoaderData() as { jobs: JobProps[]; pagination: { totalPages: number } } | undefined;
  const vacancies = data?.jobs || []
  const totalPages = data?.pagination?.totalPages || 1

    return (
        <Grid gap={24}  >
            <Grid.Col span={{ base: 1, md: 1 }} />
            <Grid.Col span={{ base: 7, md: 3 }}><SelectByCity_SkillsContainer /></Grid.Col>
            <Grid.Col span={{ base: 10, md: 7 }} ml={'auto'}><ListContainer vacancies = {vacancies} totalPages = {totalPages} /></Grid.Col>
            <Grid.Col span={{ base: 1, md: 1 }} />
        </Grid>
    )
}