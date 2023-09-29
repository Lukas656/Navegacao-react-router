import { useState } from "react";

export const useCounter = (initilvalue = 100) => {
    const [count, setCount] = useState(initilvalue )

    function inc(){
        setCount(count + 1)
    }
    function dec(){
        setCount(count - 1)
    }

    return [count, inc, dec]
}