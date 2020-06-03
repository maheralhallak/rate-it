import React from 'react'
import './commentlist.css'
import axios  from 'axios'

import Box from '@material-ui/core/Box';

import Rating from '@material-ui/lab/Rating';




function CommentList(props) { 

    const handleDelete = (commentId) => {
        // Whatever you want to do with that item
        axios.delete(`/comment/delete/${commentId}`,  { headers: { 'x-auth-token': localStorage.getItem('token') } }).then(response => {
          console.log(response);
          props.updater(response);
        });}

        
    return (
        <div class="c-card" >
            {(props.picture === null) ? null
            :(<img className=" my-img rounded mx-auto d-block" style={{height:"200px",width:"200px",marginLeft:"32%"}} alt="..." src={'http://localhost:5000/images/'+props.picture} />)}
            <div className="card-body ">
            <h3  className="card-title">{props.fullName}</h3>
            <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent" >
              
              <Rating  name="rating" max={5} value={props.rating} readOnly />
              </Box>
                <h5 className="card-title">{props.title}</h5>
                <hr />
                     <p className="card-text text-justify ctext">{props.content} </p>
                     <p className="card-text">{props.brandId} </p>
                <hr />
               <button className="btn btn-danger m-1" onClick={()=>handleDelete(props.commentId)}>Delete</button>
               {/* <button className="btn btn-success m-2">Edit</button> */}

            </div>
        </div>
    )
}

export default CommentList


