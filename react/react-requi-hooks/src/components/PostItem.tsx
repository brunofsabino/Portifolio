import { Post } from '../types/Post'

type Props = {
    data: Post,
    key: number
}
export const PostItem = ({ data, key } : Props) => {
    return (
        <div key={key}>
            <h4>{data.title}</h4>
            <small># {data.id} - Usuário: {data.userId}</small>
            <p>{data.body}</p>
        </div>
    )
}