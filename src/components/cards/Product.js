import React, { useState } from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import data from './Data';
import User from './user.png'

function Product(props) {
  const [comment, setComment] = useState('');
  const [showComment, setshowComment] = useState([])
  console.log(props.match.params.id);
  // const [data,setData] = React.useState(false);
  // if ( ! data ) fetch(...).then(..).then(data=>setData(data))

  let product = data.products.find(
    x => x.id === parseInt(props.match.params.id)
  );
  const addComment = (e) => {
    e.preventDefault();

    setshowComment(oldArray => [...oldArray, comment])
    setComment("")
  }

  const liElement = showComment.map((item) => { return (<li className="commentLi"><img className="img3" src={product.image3} alt="icon" />{item}</li>) })
  return <div className="mt-1  product-out">
    <div className="container-fluid">
      <div className="row">

        <div className="mt-1  col-md-12">

          <div className="image col-md-7 float-left">
            <img className="img2 one animated zoomIn" src={product.image2} alt="Product" />
          </div>

          <div className="text2 sticky-top col-md-3 float-left animated zoomIn">
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
            <Link className="btn seven animated fadeInLeft delay-2s" to="/brands">Go Back</Link>
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
        <div>{liElement}</div>
      </ul>
    </div>

  </div>


}

export default Product;
