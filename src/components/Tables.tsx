import { Table } from "./Table"

export const Tables= () =>{
    return(
        <div>
            <Table
                tablename = 'sam'
                size={ 4 }
                length= { 43}
                legs= {[1,2,3]} 

            />
        </div>
    )
}