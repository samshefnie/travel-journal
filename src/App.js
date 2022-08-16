import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Card from './Components/Card/Card';
import data from './data'

function App() {
  
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.img}
        country={item.country}
        location={item.location}
        name={item.name}
        startDate={item.startDate}
        endDate={item.endDate}
        info={item.info}
      />
    )
  })
  
  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
