import React from 'react'
import './commentlist.css'
import axios  from 'axios'



const handleDelete = (itemId) => {
    // Whatever you want to do with that item
    axios.delete("/delete",  { headers: { 'x-auth-token': localStorage.getItem('token') } },
     { params: { id: itemId } }).then(response => {
      console.log(response);
    });}


function CommentList(props) {
    return (
        <div class="c-card" >
            {(props.picture === null) ? null
            :(<img className=" my-img rounded mx-auto d-block" style={{height:"200px",width:"200px",marginLeft:"32%"}} alt="..." src={'http://localhost:5000/images/'+props.picture} />)}
            <div className="card-body ">
                <h5 className="card-title">{props.title}</h5>
                <hr />
                     <p className="card-text text-justify ctext">{props.content} </p>
                     <p className="card-text">{props.brandId} </p>
                <hr />
               <button className="btn btn-danger m-1" onSubmit={()=>handleDelete()}>Delete</button>
               {/* <button className="btn btn-success m-2">Edit</button> */}

            </div>
        </div>
    )
}

export default CommentList


