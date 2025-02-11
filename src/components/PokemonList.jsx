import { usePokemon } from "../hooks/queryClient"
export default function PokemonList() {
    const { data, fetchNextPage ,isLoading} = usePokemon()
    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }
    return (
        <>
            <ul className="bg-red-50">
                {
                    data.pages.map((group) => (
                        group.results.map((pokemon,index) => (
                            <li>{pokemon.name}</li>
                        ))
                    ))
                }
            </ul>
            <button onClick={fetchNextPage}> More</button>

        </>)
}