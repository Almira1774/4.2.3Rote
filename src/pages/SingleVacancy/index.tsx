
import { Await, useLoaderData, } from "react-router-dom";
import { Suspense, } from "react";
import { JobCard, } from "../../components/JobCard";
import { VacancyDescription } from "../../components/VacancyDescription";
import styles from './SingleVacancy.module.css'
import { Flex, Grid, Loader, Text } from "@mantine/core";



export const singleVacansyLoader = async ({ params }: { params: any }) => {


    const id = params.id;
    const vacansyData = fetch(`https://kata-jobs.onrender.com/api/jobs/${id}`)
        .then(res => {
            if (!res.ok) {
                throw new Response('Ошибка сервера', {
                    status: res.status,
                    statusText: res.statusText,
                }
                )
            }
            return res.json()
        })




    return {
        singleVacancy: vacansyData,
    }
}


const VacancyErrorFallback = () => (
    (
        <div className={styles.card}>
            <h3>Не удалось загрузить данные вакансии</h3>
            <p>Попробуйте обновить страницу или заглянуть позже.</p>
        </div>
    ))

const SingleVacancy = () => {


const data = useLoaderData() as { singleVacancy: Promise<any> };
const vacancyPromise = data?.singleVacancy


return (
    <Grid className={styles.card}>
        <Grid.Col span={{ base: 2 }}></Grid.Col>
        <Grid.Col span={{ base: 8 }}>
            <Suspense fallback={
                <Flex justify='center'>
                    <Flex>
                        <Loader size='sm' h='50 px' mr={10} />
                        <Text component="h3" h='75vh'>Loading data...</Text>
                    </Flex>

                </Flex>}>
                <Await resolve={vacancyPromise} errorElement={<VacancyErrorFallback />}>
                    {(resolveddata) => {

                        const vacancy = resolveddata?.job
                        const description = vacancy?.description
                        const about_company = vacancy.about_company
                        if (!vacancy) {
                            return (
                                <div className={styles.card}>
                                    <h3>По вашему запросу ничего не найдено</h3>
                                </div>
                            )
                        }

                        return (
                            <>
                                <JobCard vacancy={vacancy} ></JobCard>
                                <VacancyDescription description={description}
                                    about_company={about_company}></VacancyDescription>
                            </>
                        )
                    }}

                </Await>

            </Suspense>
        </Grid.Col>
        <Grid.Col span={{ base: 1 }}></Grid.Col>
    </Grid>

)
};

export { SingleVacancy };