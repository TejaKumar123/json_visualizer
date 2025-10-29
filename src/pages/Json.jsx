import { useState } from "react"
import JsonHeader from "../components/json/JsonHeader"
import JsonTextarea from "../components/json/JsonTextarea"
import JsonVisualizer from "../components/json/JsonVisualizer"

const Json = () => {

    const [parsedJson, setParsedJson] = useState("");

    const visualize = (data) => {
        //console.log(data)
        setParsedJson(data);
    }

    return (
        <>
            <JsonHeader />
            <div className="w-full flex flex-row items-center justify-between p-[10px_20px]" style={{ height: "calc(100dvh*0.8)" }}>
                <JsonTextarea visualize={visualize} />
                <JsonVisualizer parsedJson={parsedJson} />
            </div>
        </>
    )
}

export default Json