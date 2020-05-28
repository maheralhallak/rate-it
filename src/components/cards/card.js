import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './card.css';
import Category from './Category';
import Links from './Links';
import data from './Data';
import { Link } from 'react-router-dom';


const initialState = {

  items: data.products,
  currentPage: 1,
  itemsPerPage: 6
}

export default function Card() {
  // console.log("data from file", data.products)
  const [state, setstate] = useState(initialState)
  function handleClick(event) {
    const number = Number(event.target.id)
    //console.log(number)
    setstate(prevState => ({
      ...prevState,
      currentPage: number
    }));
    //console.log(state)
  }
  const { items, currentPage, itemsPerPage } = state;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  console.log(items)
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  console.log(indexOfFirstItem, indexOfLastItem, currentItems)
  const renderProducts = currentItems.map((product, index) => {
    return (<div key={product.name} className="col-md-6 mt-5" >
      <Link to={'/product/' + product.id}>
        <div className="card mt-0 karte" style={{ margin: "0 5px" }}>
          <container>
            <Row className="show-grid">
              <Col md={6}>
                <img className="img1 mt-3 ml-4" src={product.image} alt="brand" />
              </Col>
              <Col md={6}>
              {product.rating}
              </Col>
            </Row>
          </container>
          <h6 className="d-block font-weight-bold text-dark text-center mt-3">{product.name}</h6>
          <div className="justify-content-around d-flex">
            <div className="card-body col-md-4">
              {product.icon1}
              <h5 className="text-center d-block  text-dark">{product.return}</h5>
              <span className="inCard text-nowrap text-dark font-weight-light text-center ">{product.returnText}</span>
            </div>
            <div className="card-body col-md-4 text-nowrap bd-highlight">
              {product.icon2}
              <h5 className="text-center d-block font-weight-bold text-dark">{product.speed}</h5>
              <span className="inCard text-center text-dark text-nowrap">{product.speedText}</span>
            </div>
            <div className="card-body col-md-4">
              {product.icon3}
              <h5 className="ml-3 font-weight-bold text-dark d-block ">{product.resolved}</h5>
              <span className="inCard ml-2 text-dark text-nowrap">{product.resolvedText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>);
  });
  // Logic for displaying page numbers
  var pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers)
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}>
        {number}
      </li>
    );
  });

  return (
    <>
      <div className="container-fluid mb-5" style={{ padding: 0 }}>
        <div className="row col-md-12" style={{ padding: 0, margin: "0 10px" }}>
          <Category uri='product' />

          <div className="row col-md-8 mt-5">
            {/* First Card  */}
            {
              renderProducts
            }
            <ul style={{ marginTop: "50px" }} id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        </div>
      </div>

      <Links />
    </>
  );
}