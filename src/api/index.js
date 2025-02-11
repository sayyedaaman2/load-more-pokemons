import HelloData from './hello.json'


export function fetchHello(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(HelloData)
        },5000)
    })
}

export function fetchPokemons({pageParam = 1}){
    return new Promise((resolve,reject)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${(pageParam * 5)}`)
        .then(res=> res.json())
        .then(data=> resolve(data))
        .catch(error=> reject(error));
    })
}