import HelloData from './hello.json'


export function fetchHello(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(HelloData)
        },5000)
    })
}