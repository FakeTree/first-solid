import { createSignal, createEffect } from "solid-js"

const [count, setCount] = createSignal(0);
export default function counter(){
    const add = () => {
        setCount(count()+1)
    }

    const minus = () => {
        setCount(count()-1)
    }

    createEffect(()=>{
        console.log(`Something: ${count()}`)
    })

    return(
        <div>
            <button onclick={add}>+</button>
            <button onclick={minus}>-</button>
            <p>Current Count is: {count()}</p>
        </div>
    )
}