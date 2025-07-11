import Card from './Components/Card'
import React from 'react';

function App() {
   
  const items = Array.from({ length: 15 }, (_, index) => ({
    title: `Card${index + 1}`,
    description: `This is Card${index + 1} description`,
    image: `./images/image${index + 1}.jpg` // Placeholder image for each card
  }));

    return (
      <>
       <h1 className="text-purple-800 flex justify-center mt-10 font-semibold ">All the Cards are here</h1>
      <div className="flex flex-wrap justify-center gap-20 p-15 ">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      </>
  )
}

export default App  