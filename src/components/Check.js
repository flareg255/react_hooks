import React, {useState, useMemo} from 'react'

function Check() {
    const [countOne, setcountOne] = useState(0);
    const [countTwo, setcountTwo] = useState(0);

    const incrementOne = () => {
        setcountOne(countOne + 1);
    }

    const incrementTwo = () => {
        setcountTwo(countTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne]);

    return (
        <div>
            <p>カウント１： {isEven ? '偶数' : '奇数'}</p>
            <button onClick={incrementOne}>カウント１　-　{countOne}</button>
            <button onClick={incrementTwo}>カウント２　-　{countTwo}</button>
        </div>
    )
}

export default Check
