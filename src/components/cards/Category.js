import React, { Component } from 'react'
import './category.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

const products = [
  { _id: 1, name: "Audi-cars", num: "(06)" },
  { _id: 2, name: "McDonald's", num: "(13)" },
  { _id: 3, name: "Channel", num: "(09)" },
  { _id: 4, name: "Lay's", num: "(05)" },
  { _id: 5, name: "Aldi", num: "(08)" },
  { _id: 6, name: "Mercedes", num: "(03)" },
  { _id: 7, name: "Schwan'z", num: "(02)" },
  { _id: 8, name: "BMW-cars", num: "(07)" },
  { _id: 9, name: "Rewe", num: "(10)" },
  { _id: 10, name: "Lidl", num: "(06)" },
  { _id: 11, name: "Kaufland", num: "(04)" },
  { _id: 12, name: "Medion", num: "(11)" },
  { _id: 13, name: "Edeka", num: "(8)" },
  { _id: 14, name: "Sony", num: "(3)" },
  { _id: 15, name: "Netto", num: "(12)" },
  { _id: 16, name: "Lenovo", num: "(13)" },
  { _id: 17, name: "NBA", num: "(9)" },
  { _id: 18, name: "Adidas", num: "(5)" },
  { _id: 19, name: "Samsung", num: "(8)" },
  { _id: 20, name: "Apple", num: "(12)" },
  { _id: 21, name: "Kappa", num: "(13)" },
  { _id: 22, name: "Peugeot", num: "(6)" },
  { _id: 23, name: "Dell", num: "(4)" },
  { _id: 24, name: "Starbucks", num: "(3)" },
  { _id: 25, name: "Philips", num: "(06)" },
  { _id: 26, name: "Panasonic", num: "(13)" },
  { _id: 27, name: "Skoda", num: "(09)" },
  { _id: 28, name: "Motorola", num: "(05)" },
  { _id: 29, name: "Amazon", num: "(08)" },
  { _id: 30, name: "Nike", num: "(03)" },
  { _id: 31, name: "Puma", num: "(02)" },
  { _id: 32, name: "Reebok", num: "(07)" },
  { _id: 33, name: "Nokia", num: "(10)" },
  { _id: 34, name: "LG", num: "(06)" },
  { _id: 35, name: "Toshiba", num: "(04)" },
  { _id: 36, name: "Mitsubishi", num: "(11)" },
  { _id: 37, name: "Volkswagen", num: "(8)" },
  { _id: 38, name: "RedBull", num: "(3)" },
  { _id: 39, name: "Canon", num: "(12)" },
  { _id: 40, name: "Nivea", num: "(13)" }
]

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: products,
      term: ''
    }
  }

  searchHandler = (e) => {
    this.setState({ term: e.target.value })
  }

  render() {
    var uri = this.props.uri
    const { term, products } = this.state;
    return (

      <div style={{ marginTop: "55px" }} className="category col-md-3 sticky-top float-left">
        <h4>Categories</h4>
        <form>
          <div className="container-fluid mr-5 col-md-10">
            <input type="text" onChange={this.searchHandler} value={term}
              placeholder="give a brand here..."
            />
          </div>
        </form>
        <PerfectScrollbar className="out-scroll">
          <div className="scroll">

            {
              products.filter(searchingFor(term)).map(product =>
                <div key={product.id} className="text">
                  <Link to={'/' + uri + '/' + product._id}>
                    <p>{product.name}<span className="num">{product.num}</span></p>
                  </Link>
                </div>
              )
            }
          </div>
        </PerfectScrollbar>
      </div>

    )
  }
}

export default Category
