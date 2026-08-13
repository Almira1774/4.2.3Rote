import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
 export type WatchButtonProps = {
    id: number;
 }
const WatchVacancyButton :React.FC<WatchButtonProps> = ({id}) => {
    return (
        <Link to={`${id}`}><Button color="hsla(241, 1%, 6%, 1)" mt="md" maw={172}>
            Смотреть вакансию
        </Button></Link>
    )
};

export { WatchVacancyButton };