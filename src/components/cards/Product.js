import React, { useState } from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import data from './Data';
import User from './user.png'
import axios from 'axios';
import { useEffect } from 'react';

function Product(props) {
  const [comment, setComment] = useState('');
  const [showComment, setshowComment] = useState([])
  console.log("id inside product", props.match.params.id);
  // const [data,setData] = React.useState(false);
  // if ( ! data ) fetch(...).then(..).then(data=>setData(data))

  let product = data.products.find(
    x => x.id === parseInt(props.match.params.id)
  );
  const brandId = props.match.params.id
  useEffect(() => {
    axios.post("http://localhost:5000/fetchcomment", brandId).then((data) => {// the incoming data will contain all the comments in the DB as an array
      if (data) { setshowComment(data) }
      else { console.log("Data is empty") }
    }).catch((err) => { console.log(err) })
  }, [])
  const addComment = async (e) => {
    e.preventDefault();
    await setshowComment(oldArray => [...oldArray, comment])
    setComment("")
    axios.post("http://localhost:5000/addcoment", { id: brandId, data: comment })//every comment will go one by one. In the backend, these will be saved to DB as an array
      .then((data) => {
        console.log("Comment successfully added to DB", data)
      }).catch((err) => {
        console.log(err)
      })
  }

  const liElement = showComment.map((item) => {
    return (<li className="commentLi">
      <img className="img3" src={product.image3} alt="icon" />
      {item}
    </li>)
  })


  return <div className="mt-5  product-out">
    <div className="container-fluid">
      <div className="row">

        <div className="mt-5  col-md-12">

          <div className="image col-md-7 float-left">
            <img className="img2 one animated zoomIn" src={product.image2} alt="Product" />
          </div>

          <div className="text2 col-md-3 sticky-top float-left animated zoomIn">
            <h1 className="h1 two animated fadeInLeft delay-1s">{product.name}</h1>

            <div className="image">
              <img className="img1 mt-2 mb-3 three animated fadeInUp delay-2s" src={product.image} alt="Product" />
            </div>

            <div className="icon1 mb-3 four animated fadeInDown delay-2s">
              <h4 className="text-product">{product.return}</h4>
              <span>{product.returnText}</span>
            </div>

            <div className="icon2 mb-3 five animated fadeInRight delay-1s">
              <h4 className="text-product">{product.speed}</h4>
              <span>{product.speedText}</span>
            </div>

            <div className="icon3 six animated jackInTheBox delay-3s">
              <h4 className="text-product">{product.resolved}</h4>
              <span>{product.resolvedText}</span>
            </div>
            <Link className="btn btn-goBack seven animated fadeInLeft delay-2s" to="/brands">Go Back</Link>
          </div>
        </div>

      </div>
    </div>

    <div className="text-rating">{product.rating}</div>

    <div className="input">
      <form onSubmit={addComment}>
        <img className="userImg" src={User} alt="Product" />
        <input className="product-input" type="text" value={comment} onChange={e => setComment(e.target.value)}
          placeholder=" leave your comments here....." />
        <button className="form-btn" onClick={addComment}>Add Comment</button>

      </form>
    </div>

    {/*   */}
    <div className="p-box">
      <ul>
        <div>
          <img className="img3" src={product.image3} alt="icon" />
          <div>the window is coming up because my screen dims just like it did when the
          window popped up. So that's another layer to my problem. I can't even enter
          into dual display mode anymore because I can't hit the Keep Settings button on the popup window.</div>
        </div>
        <div>{liElement}</div>
      </ul>
    </div>

  </div>


}

export default Product;
