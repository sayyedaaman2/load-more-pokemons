import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchHello, fetchPokemons } from "../api";

export function useHello(){
    return useQuery({
        queryKey : ["hello"],
        queryFn : fetchHello
    })
}

export function usePokemon(){
    return useInfiniteQuery({
        queryKey : ["pokemon"],
        queryFn : fetchPokemons,
        initialPageParam : 0,
        getNextPageParam: (_lastPage, pages)=>{
            const total = Math.floor(pages[0].count / 5)
            if(pages.length <= total){
                return pages.length;
            }else{
                return undefined;
            }
        }
    })
}