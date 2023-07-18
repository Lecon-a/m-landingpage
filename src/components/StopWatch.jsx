import React, { useState } from "react";

const StopWatch = () => {

    const [time, setTime] = useState(0);

    return (<>
        Time: {time}
    </>)
}

export default StopWatch;