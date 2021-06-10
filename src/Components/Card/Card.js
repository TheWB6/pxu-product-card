import React from 'react';
import Star from '../Star/Star';
import blackShirt from '../../assets/images/shirt-1.jpg';
import '../../assets/styles/card.css';

const Card = () => {
  return (
    <div className="card" style={{width: 25 +'em'}}>
      <div className="shirt">
        <img
          className="card-img-top" 
          src={blackShirt} 
        />
        <button class="btn btn-primary add-to-cart">Add To Cart</button>
      </div>
      <div className="card-body">
        <p className="card-title">Ultrafine Merino T-Shirt</p>
        <p className="card-text">$80.00</p>
        <div className="stars">
        {[1, 2, 3, 4, 5].map((index) => {
          if (index <= 4) {
            return (
              <Star fill="#000000" />
            );
          }
          return <Star />
        })}
        </div>
      </div>
    </div>
  );
};

export default Card;
