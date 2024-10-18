import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Recipe types</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white">burger</Link></li>
              <li><Link to="#" className="text-white">pizza</Link></li>
              <li><Link to="#" className="text-white">meals</Link></li>
              <li><Link to="#" className="text-white">drinks and dessert</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Link</h5>
            <ul className="list-unstyled">
            <li><Link to="#" className="text-white">Home</Link></li>
              <li><Link to="#" className="text-white">View</Link></li>
              <li><Link to="#" className="text-white">Slices</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>important Links</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white">Home</Link></li>
              <li><Link to="#" className="text-white">View</Link></li>
              <li><Link to="#" className="text-white">Slices</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>connect with</h5>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
              <button className="btn btn-warning" type="button">CONNECT WIH US</button>
            </div>
            <div className="mb-3">
              <a href="#" className="text-white me-2"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            </div>
            <p className="small">CONNTACT: +91 09876 54321</p>
            <p className="small text-info">EMAIL: recipeworld1@gmail.com</p>
          </div>
        </div>

        <hr className="my-4 text-white" />
        <div className="text-center">
          <p className="mb-0">&copy; 2023 ... All rights reserved....</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
