import { useState } from "react"
import PathSearch from "./PathSearch";

const JsonVisualizer = ({ parsedJson }) => {

    console.log(parsedJson);

    const [pathError, setPathError] = useState("")

    const search = (path) => {
        console.log(path);
    }

    return (
        <div className="w-[48%] h-full flex flex-col items-center justify-start gap-2.5">
            <PathSearch search={search} />
            <p className="text-[red] text-[90%]">{pathError}</p>
            <div className="border w-full h-full rounded-md">

            </div>

        </div>
    )
}

export default JsonVisualizer