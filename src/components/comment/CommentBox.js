
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import product from './edit.png';
import CommentList from './commentList';
import FormData from 'form-data';
import './commentBox.css';
import Box from '@material-ui/core/Box';

import Rating from '@material-ui/lab/Rating';

export default function CommentBox(props) {
    const [showComment, setshowComment] = useState([])
    const [rating,setRating] = useState(null);
    const history = useHistory();
    console.log(props);
    const { brandId, productId } = props;

    const handelChange = event => {
        
        setRating(event.target.value);
        /* console.log(event.target.value); */
        
    }
    console.log(rating);
    
    useEffect(() => {

        axios.get(`/comment/${brandId}${productId ? `/${productId}` : ''}`,
            { headers: { 'x-auth-token': localStorage.getItem('token') } })
            .then(function (response) {
                console.log(response);
                if (response.data.status === 'success') {
                    setshowComment(response.data.message);
                } else {
                    localStorage.removeItem('token');
                    history.push('/signin');
                }
            })
            .catch(function (error) {
                console.log(error);

            });
    }, [brandId, productId,history])

   const updateResultHandler = (response) => {
        setshowComment(response.data.message);
   }


    const submitHandler = (e) => {
        e.preventDefault();
        
        
        const formData = new FormData();
        formData.append('brandId', props.brandId);
        formData.append('productId', props.productId || null);
        formData.append('title', e.target.title.value);
        formData.append('content', e.target.content.value);
        formData.append('picture', e.target.file.files[0]);
        formData.append('rating', rating)
        formData.append('userName', localStorage.getItem('fullName'))
        axios.post('/comment',

            formData,
            {
                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                    'content-type': 'multipart/form-data'
                }
            })
            .then(function (response) {
                console.log(response);
                if (response.data.status === 'success') {
                    setshowComment(response.data.message);
                    console.log(response.data.message);
                } else {
                    localStorage.removeItem('token');
                    history.push('/');
                }
            })
            .catch(function (error) {
                console.log(error);

                history.push('/signin');
            });


    }
    console.log(showComment);

    const comments = showComment.map((item, index) => {
        return <CommentList
            /* brandId={item.brandId} */
            commentId={item._id}
            title={item.title}
            content={item.content}
            picture={item.picture}
            rating={item.rating}
            fullName={item.userName}
            updater = {updateResultHandler}
        />
    });




    return (
        <div className="input ml-5">
            <form onSubmit={submitHandler}>
                <div class="col-md-6">
                    <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent" >
              
              <Rating  name="rating" defaultValue={1} max={5} value={rating} onChange={(e)=>handelChange(e)} />
              </Box></div>
                <input name="file" className="col-6 product-input" type="file" id="exampleFormControlFile1" />

                <input name="title" type="text" class="form-control mb-3 col-6" placeholder="Title" />

                <textarea name="content" class="form-control mb-3 col-6 text-area " rows="3" placeholder="Please type your comment..."></textarea>

                <button className=" form-btn">ADD</button>
            </form>

            <div className="p-box">
                <ul>
                    <div>
                        <img className="img3" src={product} alt="icon" />
                        <span>comments</span>
                        
                    </div>
                    <div>
                        {comments}
                    </div>

                </ul>
            </div>
        </div>
    )
}
