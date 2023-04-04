import React from 'react';
import './App.css';


import fried from './imgs/beky17.jpg';
import chicken from './imgs/beky14.jpg'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: "Fried Rice",
          description: "Tomato sauce, mozzarella, and basil",
          price: 1500,
          image: fried
        },
        {
          id: 2,
          name: "Chicken",
          description: "Pasta with homemade pesto sauce and parmesan cheese",
          price: 1000,
          image: chicken
        },
        {
          id: 3,
          name: "Jollof Rice",
          description: "Grilled chicken, romaine lettuce, croutons, and Caesar dressing",
          price: 8.99,
          // image: caesar
        },
        {
          id:4,
          name:"COCONUT RICE",
          description: "Grilled chicken, romaine lettuce, croutons, and Caesar dressing",
          price: 1500,
          // image
        },
        {
          id:5,
          name:"NATIVE RICE WITH BEEF SAUCE WITH WATER",
          description: "Grilled chicken, romaine lettuce, croutons, and Caesar dressing",
          price:3000
        },
        {
          id:6,
          name:"COCONUT RICE WITH PEPPERED CHICKEN WITH A BOTTLE OF COKE",
          description: "Grilled chicken, romaine lettuce, croutons, and Caesar dressing",
          price:3000
        }
      ]
    };
  }

  handleOrder = (itemId) => {
    // Logic for handling the order goes here
    console.log(`Order placed for item ${itemId}`);
  }

  render() {
    return (
      <div className="menu-container">
        <h1>Our Menu</h1>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button onClick={() => this.handleOrder(item.id)}>Order</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
