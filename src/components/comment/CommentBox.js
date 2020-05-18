
 import React, {useEffect,useState} from 'react'
 import {useHistory} from 'react-router-dom'
 import axios from 'axios'
 import User from '../comment/user.png'
 import product from './edit.png'
 import CommentList from './commentList'
 import FormData from 'form-data';
 import './commentBox.css'


 export default function CommentBox(props) {
  const [showComment, setshowComment] = useState([])
  const history = useHistory();
    console.log(props);
    const { brandId, productId } = props;
   

    useEffect(() => {
        axios.get(`/comment/${brandId}${productId ? `/${productId}`: ''}`, 
        {headers: {'x-auth-token':localStorage.getItem('token')}})
        .then(function (response) {
            console.log(response);
            if (response.data.status == 'success') {
              setshowComment(response.data.message);
            }else{
                localStorage.removeItem('token');
                history.push('/signin');
            }
        })
        .catch(function (error) {
            console.log(error);
           
        }); 
    },[])

    

    const submitHandler = (e) => {
        e.preventDefault();
       /*  console.log(e.target.file.files[0], e.target.name.value, e.target.email.value, e.target.phone.value, e.target.notes.value); */

        const formData = new FormData();
        formData.append('brandId',props.brandId);
        formData.append('productId',props.productId || null);
        formData.append('title',e.target.title.value);
        formData.append('content',e.target.content.value);
        formData.append('picture',e.target.file.files[0]);
    
        axios.post('/comment',
      
        formData,
        {
            headers: {
                'x-auth-token':localStorage.getItem('token'),
                'content-type': 'multipart/form-data'
            }
        })
        .then(function (response) {
            console.log(response);
            if (response.data.status == 'success') {
                setshowComment(response.data.message);
                console.log(response.data.message);
            }else{
                localStorage.removeItem('token');
                history.push('/');
            }
        })
        .catch(function (error) {
            console.log(error);
            history.push('/');
        });
        

    }
    console.log(showComment);
    
   const comments = showComment.map((item, index)=>{
      return <CommentList 
              brandId={item.brandId}
              title={item.title}
              content={item.content}
              picture={item.picture}
             />
    });


   

   return (
    <div className="input ml-5">
    <form onSubmit={submitHandler}>
       
        <img className="userImg" src={User} alt="Product" />
        <input name="file" className="col-6 product-input" type="file" id="exampleFormControlFile1"/>
        
        <input name="title" type="text" class="form-control mb-3 col-6" placeholder="Title"/>

        <textarea name="content" class="form-control mb-3 col-6 text-area " rows="3" placeholder="Please type your comment..."></textarea>

        <button className=" form-btn">ADD</button>
    </form>  

    <div className="p-box">
      <ul>
        <div>
          <img className="img3" src={product} alt="icon" />
      </div>
         <div>
          {comments} 
         </div>
        
      </ul>
    </div>
    </div>
   )
 }
 