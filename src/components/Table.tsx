interface Props {
    tablename: string,
    size: number,
    length: number,
    legs: number []
}

export const Table = (props : Props) =>{


    return (
        <div>
            <h1>{ props.tablename }</h1>
            <h1>{ props.size }</h1>
            <h1>{ props.length }</h1>
            <h1> { props.legs.map((leg) => (
                    <div >
                        <h3> {leg } </h3>
                    </div>
            )) }</h1>

        </div>
    )
}