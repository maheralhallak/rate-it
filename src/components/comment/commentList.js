import React from 'react'

function CommentList(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            { props.picture ?  <img className="card-img-top" alt="..." src={'http://localhost:5000/images/'+props.picture} /> : null }
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <hr />
                     <p className="card-text">{props.content} </p>
                     <p className="card-text">{props.brandId} </p>
                <hr />
                <button className="btn btn-danger m-2">Delete</button>
                <button className="btn btn-success m-2">Edit</button>

            </div>
        </div>
    )
}

export default CommentList


