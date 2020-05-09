import React, { useState, useEffect, useRef } from 'react'


function Count2() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => clearInterval(intervalRef.current)}>ストップ</button>
        </div>
    )
}

export default Count2
