import React from 'react';
import './items.css';
import data from './ItemsData';
import { Link } from 'react-router-dom';

function Items(props) {

  let item = data.items.find(
    x => x.id === parseInt(props.match.params.id)
  );

  return (
    <div className="out-div">
      <h1 className="item-h1 one animated fadeInDown delay-2s" >{item.name1}</h1>
      <div className="d-flex justify-content-center">
        <div className="row col-md-12 item-row">

          <div className="items two animated fadeInLeft delay-1s">
            <div className="overflow">
              <img className="item-image card-img-top" src={item.img1} alt="item-1" />
            </div>
            <div className="card-body">
              <div className="item-name">
                <a href="item.html">{item.name1}</a>
              </div>
              <div className="item-brand">{item.type1}</div>
              <div className="item-price">{item.description1}</div>
              <div className="item-rating">{item.rating1}</div>
            </div>
          </div>

          <div className="items three animated zoomIn">
            <div className="overflow">
              <img className="item-image card-img-top" src={item.img2} alt="item-2" />
            </div>
            <div className="card-body">
              <div className="item-name">
                <a href="item.html">{item.name2}</a>
              </div>
              <div className="item-brand">{item.type2}</div>
              <div className="item-price">{item.description2}</div>
              <div className="item-rating">{item.rating2}</div>
            </div>
          </div>

          <div className="items four animated fadeInRight delay-1s">
            <div className="overflow">
              <img className="item-image card-img-top" src={item.img3} alt="item-3" />
            </div>
            <div className="card-body">
              <div className="item-name">
                <a href="item.html">{item.name3}</a>
              </div>
              <div className="item-brand">{item.type3}</div>
              <div className="item-price">{item.description3}</div>
              <div className="item-rating">{item.rating3}</div>
            </div>
          </div>

        </div>
      </div>

      <div className="row item-btns">
        <Link className="btn item-btn btn-outline-success five animated jackInTheBox delay-2s" to={'/'}>Home Page</Link>
        <Link className="btn item-btn btn-outline-success six animated fadeInUp delay-2s" to={'/brands/'}>Product Page</Link>
        <Link className="btn item-btn btn-outline-success six animated jackInTheBox delay-2s" to={'/items/'}>Items Page</Link>
      </div>
    </div>
  )
}

export default Items;
