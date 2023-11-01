import React from 'react'

const Cards = () => {
  return (
    <div className="cards-container">
        <div className="card-box card-box1">
        <i class="fas fa-stopwatch"></i>
        <h2>Quick and Easy Recipes</h2>
        <p>Explore a collection of delicious and time-saving recipes that are perfect for busy days. From 30-minute meals to one-pot wonders, we've got you covered.</p>
    </div>
    <div className="card-box card-box2">
        <i className="fas fa-globe"></i>
        <h2>Global Cuisine Adventures</h2>
        <p>Embark on a culinary journey around the world with our diverse selection of international recipes. Discover flavors from every corner of the globe.</p>
    </div>
    <div className="card-box card-box3">
        <i className="fas fa-apple-alt"></i>
        <h2>Healthy Eating Choices</h2>
        <p>Make nutritious and wholesome food choices with our range of healthy recipes. Find low-calorie, high-protein, and plant-based options to support your well-being.</p>
    </div>
    </div>
  )
}

export default Cards
