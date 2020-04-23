import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import data from './Data';

function Product(props) {
  console.log(props.match.params.id);
  // const [data,setData] = React.useState(false);
  // if ( ! data ) fetch(...).then(..).then(data=>setData(data))

  let product = data.products.find(
    x => x.id === parseInt(props.match.params.id)
  );

  return <div className="mt-1 product-out">
    <div className="container-fluid">
      <div className="row">

        <div className="mt-1  col-md-12">

          <div className="image col-md-7 float-left overflow">
            <img className="img2 one animated zoomIn" src={product.image2} alt="Product" />
          </div>

          <div className="text2 col-md-3 float-left animated zoomIn">
            <h1 className="h1 two animated fadeInLeft delay-1s">{product.name}</h1>

            <div className="text-rating three animated fadeInUp delay-2s">{product.rating}</div>

            <div className="icon1 four animated fadeInDown delay-2s">
              <h4 className="text-product">{product.return}</h4>
              <span>{product.returnText}</span>
            </div>

            <div className="icon2 five animated fadeInRight delay-1s">
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

        <div class="form-group green-border-focus">
          <label for="exampleFormControlTextarea18">Your comments :</label>
          <textarea class="form-control" id="exampleFormControlTextarea5" rows="3"
            placeholder="leave some comments here....."></textarea>
        </div>

      </div>
    </div>

  </div>

}

export default Product;
