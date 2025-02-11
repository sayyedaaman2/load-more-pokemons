import { useQuery } from "@tanstack/react-query";
import { fetchHello } from "../api";

export function useHello(){
    return useQuery({
        queryKey : ["hello"],
        queryFn : fetchHello
    })
}