import { Flex, Grid, Loader, Text } from "@mantine/core";
import { SelectByCity_SkillsContainer } from "../SelectByCity_SkillsContainer";
import { Await, Outlet, useLoaderData, } from "react-router-dom";
import { Suspense } from "react";
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
  const jobsPromise = fetch(`https://kata-jobs.onrender.com/api/jobs?${queryParams.join('&')}`)
    .then(res => {
      if (!res.ok) {
        throw new Response('Ошибка сервера', {
          status: res.status,
          statusText: res.statusText,
        })
      }
      return res.json()
    });

  return {
    jobsData: jobsPromise,
  }



}

export const MainContainer: React.FC = () => {
  const data = useLoaderData() as { jobsData: Promise<any> };


  return (
    <Grid gap={24}  >
      <Grid.Col span={{ base: 1, md: 1 }} />
      <Grid.Col span={{ base: 7, md: 3 }}><SelectByCity_SkillsContainer /></Grid.Col>
      <Grid.Col span={{ base: 10, md: 7 }} ml={'auto'}>
        <Suspense fallback={
          <Flex justify='center'>
            <Flex >
              <Loader size='sm' h='50 px' mr={10} />
              <Text component="h3" h='75vh'>Loading data...</Text>
            </Flex>
          </Flex>
        }>
          {/* Все, что снаружи саспенса, отрендерится сразу.
          Компонент Await сам дождется выполнения промиса и отдаст результат внутрь функции */}
          <Await resolve={data.jobsData}>
            {(resolvedData) => {

              const vacancies = resolvedData?.jobs || []
              const totalPages = resolvedData?.pagination?.totalPages || 1
              //  Как только данные приехали, плавно рендерим 
              return <Outlet context={{ vacancies, totalPages }} />
            }}

          </Await>

        </Suspense>
      </Grid.Col>
      <Grid.Col span={{ base: 1, md: 1 }} />
    </Grid>
  )
}




