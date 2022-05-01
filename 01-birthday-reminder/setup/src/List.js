import React from 'react';

const List = ({people}) => {
  return (
    <>
      {
        people.map(p=>{
          return(
            <div key={p.id}>
              <p>{p.name}</p>
              <p>{p.age}</p>
              <img src={p.image} width='100%' alt='people'/>
            </div>
          )
        })
      }
    </>
  );
};

export default List;
