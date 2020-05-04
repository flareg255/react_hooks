import React, { useState, useEffect, useCallback} from 'react'

function DataFetchByid() {
    const [post, setPost] = useState(null);
    const [id, setId] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const item = await response.json();
        setPost(item);
        setLoading(false);
    }, [id]);
    
    useEffect( () => {
        fetchData();
    }, [fetchData,id]);
    return (
        <div>
            <input
                type='text'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            {loading ? <h1>loading</h1> : <h1>{post.title}</h1>}
        </div>
    )
}

export default DataFetchByid
