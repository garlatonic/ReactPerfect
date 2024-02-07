import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommentList from '../list/CommentList';
import Button from '../ui/Button';
import '../style/postViewPage.css';
import data from '../../data.json';

function PostViewPage() {
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find(item => item.id == postId);

    return (
        <div className="wrapper">
            <div className="container">
                <div className="post-container">
                    <p className="title">{post.title}</p>
                    <p className="content">{post.content}</p>
                </div>

                <p className="comment-label">댓글</p>
                <CommentList comments={post.comments} />

            </div>
        </div>
    );
}

export default PostViewPage;