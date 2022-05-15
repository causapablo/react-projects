import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text} = people[index];
  const checkNumber = (number)=>{
    if(number>people.length-1){
      number=0;
    }
    if(number<0){
      number=people.length-1;
    }
    return number
  }
  let nextProfile = ()=>{
    setIndex((index)=>checkNumber(index+1));
  }
  let prevProfile = ()=>{
    setIndex((index)=>checkNumber(index-1));
  }
  let randomProfile = ()=>{
    setIndex(()=>Math.floor(Math.random()*(people.length)))
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} className='person-img' alt={name}></img>
        <span className='quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevProfile}><FaChevronLeft/></button>
        <button className='next-btn' onClick={nextProfile}><FaChevronRight/></button>
      </div>
      <button className='random-btn' onClick={randomProfile}>Surprise me</button>

    </article>
  );
};

export default Review;
