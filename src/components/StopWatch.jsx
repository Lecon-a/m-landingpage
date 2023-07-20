import React, { useEffect, useState } from "react";

const StopWatch = () => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        },
        1000)
        return () => clearInterval(interval)
    }, [])

    return (<>
        Time: {time && time}
    </>)
}

export default StopWatch;