import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './card.css';
import './category.css';
import Links from './Links';
import data from './Data';
import { Link } from 'react-router-dom';

const initialState = {

  items: data.products,
  currentPage: 1,
  itemsPerPage: 6
}

export default function Card1() {
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
      <Link to={'/item/' + product.id}>
        <div className="">

          <div className="col-md-12 card2 mt-2" style={{ margin: "0px 0px" }}>
            <container>
              <Row className="show-grid">
                <Col md={6}>
                  <img className="card1-img1 d-block mt-3 ml-auto mr-auto" src={product.image} alt="brand" />
                </Col>
                <Col md={6}>
                  <h4 className="card1-name col-md-12 d-block text-bold text-center mt-5">{product.name}</h4>
                </Col>
              </Row>
            </container>
            <div className="description col-md-12 text-center mt-4">{product.des}</div>
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
    <div className="card1">
      <div className="container-fluid mb-5" style={{ padding: 0 }}>
        <div className="row col-md-12" style={{ padding: 0, margin: "0 0px" }}>

          <h1 className="card1-h1 text-center ml-auto mr-auto mt-3">Check the latest from our brands</h1>

          <div className="row col-md-12">
            {/* First Card  */}
            {
              renderProducts
            }
            <ul className="ml-auto mr-auto" style={{ marginTop: "80px" }} id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        </div>
      </div>

      <Links />
    </div>
  );
}