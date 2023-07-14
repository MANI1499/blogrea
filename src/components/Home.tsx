import { useDispatch, useSelector } from 'react-redux'

export const Home = () =>{
    const dispatch = useDispatch();
    const username =useSelector((state: any) => state.user.value.username)

    return(
        <div>
            <h1>Welcome home { username }</h1>
        </div>
    )
}