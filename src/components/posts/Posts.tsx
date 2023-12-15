import axios from "axios";
import React, { useEffect, useState } from "react";
import {styled} from 'styled-components'

interface IPosts {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Div = styled.div`
    margin-top: 40px;
`

const Posts = () => {

    const [posts, setPosts] = useState<Array<IPosts>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    const getPosts = async() => {
        try{
            setLoading(true)
            const {data, status, statusText} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            if(status > 399) {
                throw new Error(statusText)
            }
            const tenPosts = data.slice(0, 10)
            setPosts(tenPosts)
            setLoading(false)
        }catch(e){
            console.log(e)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPosts()
    },[])

    return (
    <Div>
        {posts.map(item => (
            <div key={item.id}>
                {item.title}
            </div>
        ))}
    </Div>
    )
}
export default Posts