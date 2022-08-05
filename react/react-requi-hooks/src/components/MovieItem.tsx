import { Movie } from '../types/Movie'
import style from '../App.module.css'

type Props = {
    data: Movie,
    key: number
}
export const MovieItem = ({ data, key } : Props) => {
    return (
        <div key={key}>
            <img src={data.avatar} className={style.img} />
            <p>{data.titulo}</p>
        </div>
    )
}