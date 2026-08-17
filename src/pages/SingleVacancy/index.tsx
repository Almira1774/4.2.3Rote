
import { useLoaderData, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { fetchSingleVacancy, type JobProps, } from "../../store/jobSlice";
import { JobCard, } from "../../components/JobCard";
import { VacancyDescription } from "../../components/VacancyDescription";
import styles from './SingleVacancy.module.css'
import { Grid, } from "@mantine/core";



export const singleVacansyLoader = async({ params}: { params: any}) => {

    
    const id = params.id;


    const res =  await fetch(`https://kata-jobs.onrender.com/api/jobs/${id}`);

    if(!res.ok){
        throw new Response('Ошибка сервера',{
            status: res.status,
            statusText: res.statusText,
        }
        )
    }

    return res.json();
}


const SingleVacancy = () => {

const data = useLoaderData() as {job:JobProps};
const vacancy   = data?.job


    if (!vacancy) {
        return (
            <div className={styles.card}>
                <h3>По вашему запросу ничего не найдено</h3>
            </div>
        )
    }


    return (
        <Grid className={styles.card}>
            <Grid.Col span={{ base: 2 }}></Grid.Col>
            <Grid.Col span={{ base: 8 }}>
                <JobCard vacancy={vacancy} ></JobCard>
                <VacancyDescription description={vacancy.description} about_company={vacancy.about_company}></VacancyDescription>
            </Grid.Col>
            <Grid.Col span={{ base: 1 }}></Grid.Col>
        </Grid>

    )
};

export { SingleVacancy };