import { useState } from "react"
import UseContext from "./UseContext";

const ContextProvider = ({ children }) => {
    const [data, setData] = useState({});
    return (
        <UseContext.Provider value={{ data, setData }}>
            {children}
        </UseContext.Provider>
    )
}

export default ContextProvider;