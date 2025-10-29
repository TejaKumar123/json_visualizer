import { useState } from "react"

const JsonTextarea = ({ visualize }) => {

    const [jsonData, setJsonData] = useState("");
    const [jsonError, setJsonError] = useState("")

    const InsertTab = (e) => {
        if (e.key != "Tab") {
            return
        }
        e.preventDefault()
        let start = e.target.selectionStart;
        let end = e.target.selectionEnd;
        let tab = "\t"
        let data = jsonData.substring(0, start) + tab + jsonData.substring(end)
        setJsonData(data)

        setTimeout(() => {
            e.target.selectionStart = e.target.selectionEnd = start + tab.length
        }, 0)

    }

    const checkVisualize = () => {
        //console.log(jsonData)
        try {
            let data = JSON.parse(jsonData);
            setJsonError("");
            //console.log(data)
            visualize(data);
        }
        catch (err) {
            //console.log(err);
            setJsonError(String(err));
        }
    }

    return (
        <div className="w-[48%] h-full flex flex-col items-start justify-self gap-2.5">
            <p>Paste or Type the JSON</p>
            <textarea
                className="w-full whitespace-pre resize-none h-full p-2.5 border-[1px] border-[rgba(0,0,0,0.7)] border-[black] rounded-md overflow-auto"
                placeholder="Enter your json data here"
                value={jsonData}
                onChange={(e) => { setJsonData(e.target.value) }}
                onKeyDown={InsertTab}
            >

            </textarea>
            <p className="text-[red] text-[90%]">{jsonError}</p>
            <button className="p-[5px_10px] bg-[#3184E6] text-white rounded-md cursor-pointer" onClick={checkVisualize}>
                Visualize JSON
            </button>

        </div>
    )
}

export default JsonTextarea