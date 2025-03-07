import React, { useState } from "react";

// Functional Component for Billing Form
function BillingForm({ addItem }) {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item && price && quantity) {
      addItem({ item, price: parseFloat(price), quantity: parseInt(quantity) });
      setItem("");
      setPrice("");
      setQuantity("");
    }
  };

  return (
    <div>
      <h2>Add Jewelry Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item Name" value={item} onChange={(e) => setItem(e.target.value)} required /><br></br>
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required /><br></br>
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required /><br></br>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

// Class Component for Bill Calculation
class Bill extends React.Component {
  calculateTotal() {
    return this.props.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  render() {
    return (
      <div>
        <h2>Bill Summary</h2>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>
              {item.item} - {item.quantity} x Rs. {item.price.toFixed(2)} = Rs. {(
                item.price * item.quantity
              ).toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total: Rs. {this.calculateTotal().toFixed(2)}</h3>
      </div>
    );
  }
}

// Main App Component
export default function JewelShop() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Jewelry Shop Billing System</h1>
      <BillingForm addItem={addItem} />
      <Bill items={items} />
    </div>
  );
}