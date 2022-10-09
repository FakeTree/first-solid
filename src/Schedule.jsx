import { createResource } from "solid-js"

export default function Schedule(){
    // https://loripsum.net/api
    
    const [schedule] = createResource(async ()=>{
        return fetch(`https://loripsum.net/api/10/short/headers`, {method: 'GET',mode:'no-cors'})
        .then((res)=>console.log(res.json()))
        // .then()
        .catch(console.log("failed to load API"))
    })

    return(
        
        
    )
}