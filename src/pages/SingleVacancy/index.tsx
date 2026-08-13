
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { fetchSingleVacancy,} from "../../store/jobSlice";
import { JobCard, } from "../../components/JobCard";
import { VacancyDescription } from "../../components/VacancyDescription";
import styles from './SingleVacancy.module.css'
import { Grid,} from "@mantine/core";

const SingleVacancy = () => {
    const { id } = useParams();
    const vacancy = useAppSelector(state => state.jobs.job);
    const dispatch = useAppDispatch();
    const status = useAppSelector(state => state.jobs.singleStatus);


    useEffect(() => {
        dispatch(fetchSingleVacancy(`${id}`))
        console.log(vacancy)
    }, [id, dispatch]);

    if (status === 'loading' || status === '') {
        return (
            <div className={styles.card}>
                <h3>Loading...</h3>
            </div>
        )
    }
    if (status === 'rejected') {
        return (
            <div className={styles.card}>
                <h3>Ошибка загрузки вакансии. Попробуйте позже.</h3>
            </div>
        )
    }

    if (!vacancy) {
        return (
            <div className={styles.card}>
                <h3>По вашему запросу ничего не найдено</h3>
            </div>
        )
    }


    return (
        <Grid className={styles.card}>
            <Grid.Col span={{base:2}}></Grid.Col>
            <Grid.Col span={{base:8}}>
                <JobCard vacancy={vacancy} ></JobCard>
                <VacancyDescription description={vacancy.description} about_company={vacancy.about_company}></VacancyDescription>
            </Grid.Col>
            <Grid.Col span={{base:1}}></Grid.Col>
        </Grid>

    )
};

export { SingleVacancy };