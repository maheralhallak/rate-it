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
        <div className="card card2 mt-5" style={{ margin: "0 5px" }}>
          <container>
            <Row className="show-grid">
              <Col>
                <img className="card1-img1" src={product.image} alt="brand" />
              </Col>
            </Row>
          </container>
          <h4 className="card1-name d-block text-bold text-center">{product.name}</h4>
          <div className="description text-center">{product.des}</div>
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
        <div className="row col-md-12" style={{ padding: 0, margin: "0 10px" }}>

          <Category uri='item' />


          <div className="row col-md-8">
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
    </div>
  );
}