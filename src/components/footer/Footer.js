import React from 'react'
import './footer.scss'
function Footer() {
    return (
        <div className="parent">
        <div>
            <h1 className="text-center font-weight-bold"> FOLLOW US</h1>
            <ul className="ul mt-5 mb-5">
                <li>
                <a className="Smedia" href="https://accounts.google.com/AddSession?sacu=1&service=lso" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                </li>
                <li>
                 <a className="Smedia" href="https://m.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li>
                 <a className="Smedia" href="https://www.instagram.com/accounts/login/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </li>
              
            </ul>
            
        </div>
         
      </div>
    )
}

export default Footer
