import React from 'react'
import './footer.scss'


function ExtLink(props) {
    const {link, text,icon} = props;
    return (
    <a className="Smedia" href={link} target="_blank" rel="noopener noreferrer"><span>{text}</span><i className={`fa ${icon}`} aria-hidden="true"></i></a>
    )
}


function Footer() {
    return (
        <div className="f-parent">
        <div>
            <h1 className="text-center font-weight-bold follow mt-3"> FOLLOW US</h1>
            <ul className="ul mt-5 mb-5">
                <li>
                <ExtLink link="https://accounts.google.com/AddSession?sacu=1&service=lso" text="Follow us on Google" icon="fa-google-plus"/>
                </li>
                <li>
                 <ExtLink link="https://m.facebook.com/" text="Follow us on Google" icon="fa-facebook" />
                </li>
                <li>
                 <ExtLink link="https://www.instagram.com/accounts/login/" text="Follow us on Google"  icon="fa-instagram" />
                </li>
            </ul>
            <br/>
            <br/>
            <br/>
            <ul className="lfooter">
                <li><a href="/impresum" target="_self">Impresum</a> </li>
                <li><a href="/team" target="_self">Team </a></li>
                <li><a href="/AGBs" target="_self">AGBs</a> </li>
                <li><a href="/Copyrights" target="_self">2020 © Rate-it </a></li>
            </ul>
       
          
        </div>
         
      </div>
    )
}

export default Footer
