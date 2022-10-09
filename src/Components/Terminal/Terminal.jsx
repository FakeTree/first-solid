import { createSignal } from "solid-js"
import TStyle from "./terminal.module.css"

export default function Terminal(){
    const [text, setText] = createSignal(0);

    const textTrack = event => {
        console.log(event.target.value);
    }

    return(
        <div class={TStyle.Container}>
            <textarea onKeyUp={textTrack} name="terminal-input" id="terminal" class={TStyle.TextBox}>

            </textarea>
        </div>
    )
}