import React from 'react';
import Tour from './Tour';


const Tours = ({tours, removeTour}) => {
  return (
  <section>
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'>

      </div>
    </div>
    {
      tours.map(tour=>
        <Tour
        key = {tour.id}
        id={tour.id}
        name = {tour.name}
        info = {tour.info}
        image = {tour.image}
        price = {tour.price}
        removeTour = {removeTour}        
        />
      )
    }
  </section>
  );
};

export default Tours;
