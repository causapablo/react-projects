import React, { useState } from 'react';
import data from './data';
import List from './List';
import Swal from 'sweetalert2'
function App() {
  const [people, setPeople] = useState(data);
  let clearAll = () => {
     Swal.fire({
      title: 'Clear Birthdays!',
      text: 'Do you want to clear the list',
      icon: 'warning',
      confirmButtonText: 'Ok'
    }).then(respuesta=>{
      if(respuesta){
        setPeople([])
      }
    }

    )
    
  }
  let chargeAll = ()=>{
    setPeople(data)
  }

  return (
    <main>

      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => clearAll() }>Clear all</button>
        <button onClick={() => chargeAll() }>Charge people </button>
      </section>

    </main>
  )
}

export default App;
