import { useHello } from "../hooks/queryClient";

export default function HelloWorld(){

    const {data, isLoading} = useHello()

    if(isLoading){
        return(
            <h1>
                Loading...
            </h1>
        )
    }
    return(
        <div>
            <p>
               Id: {data.id}
            </p>
            <p>
                name : {data.name}
            </p>
            <p>
                title : {
                    data.title
                }
            </p>
        </div>
    )
}