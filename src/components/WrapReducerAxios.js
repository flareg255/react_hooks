import React, { useEffect, useReducer }from 'react'
import Axios from 'axios';

const initialState2 = {
    loading: true,
    error: '',
    post: {}
};

const reducer2 = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
            loading: false,
            post: {},
            error: 'データの取得に失敗しました'
            }
        default:
            return state
    }
};

function WrapReducerAxios() {

    const [state, dispatch2] = useReducer(reducer2, initialState2);

    useEffect(() => {
        Axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
            dispatch2({type: 'FETCH_SUCCESS', payload: res.data});
            })
            .catch(res => {
            dispatch2({type: 'FETCH_ERROR'});
            });
    },[])

    return (
        <div>
            <div>{state.loading ? 'Loading...' : state.post.title}</div>
            <div>{state.error ? state.error : null}</div>
        </div>
    )
}

export default WrapReducerAxios
