import { useState } from "react"

const PathSearch = ({ search }) => {

    const [path, setpath] = useState("")

    const searchPath = () => {
        search(path);
    }

    return (
        <div className="w-[80%] h-auto border flex flex-row items-center justify-between rounded-md overflow-hidden">
            <input
                type="text"
                placeholder="eg: $.user.address.city"
                value={path}
                onChange={(e) => { setpath(e.target.value) }}
                className="w-auto h-full px-[5px] outline-none flex-1"
            />
            <button
                className="w-auto h-fit px-[10px] bg-[#3184E6] text-[150%] text-white"
                onClick={searchPath}
            >
                Search
            </button>
        </div>
    )
}

export default PathSearch