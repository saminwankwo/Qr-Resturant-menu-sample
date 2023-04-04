import React from 'react';
import './App.css';

// import margherita from './images/margherita.jpg';
// import pesto from './images/pesto.jpg';
// import caesar from './images/caesar.jpg';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: "Margherita Pizza",
          description: "Tomato sauce, mozzarella, and basil",
          price: 10.99,
          // image: margherita
        },
        {
          id: 2,
          name: "Pesto Pasta",
          description: "Pasta with homemade pesto sauce and parmesan cheese",
          price: 12.99,
          // image: pesto
        },
        {
          id: 3,
          name: "Chicken Caesar Salad",
          description: "Grilled chicken, romaine lettuce, croutons, and Caesar dressing",
          price: 8.99,
          // image: caesar
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
