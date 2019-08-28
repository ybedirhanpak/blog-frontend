import React from 'react';
import UserPost from './Post';

export default function PostList(props)
{
    const {postList,onClick} = props.value;
    return(
        <div className="container-fluid">
            {postList && postList.map(item=>{
                return <UserPost key={postList.id} item={item} onClick={onClick} />;
            })}
            
        </div>
    );
}