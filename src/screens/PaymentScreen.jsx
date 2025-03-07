// src/PaymentScreen.jsx
import React, { useState } from 'react';

const PaymentScreen = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();

    // Basic validation
    if (!amount || !cardNumber || !expiry || !cvv) {
      setMessage('Please fill in all fields.');
      return;
    }
    if (cardNumber.length < 12 || cardNumber.length > 19) {
      setMessage('Please enter a valid card number.');
      return;
    }
    // Add additional validation as needed (e.g., regex for expiry, cvv, etc.)

    // Simulate payment processing (replace with actual API call)
    setMessage(`Payment of $${amount} processed successfully!`);

    // Reset fields after submission
    setAmount('');
    setCardNumber('');
    setExpiry('');
    setCvv('');
  };

  return (
    <div className="payment-screen">
      <h1>Payment Screen</h1>
      <form onSubmit={handlePayment}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default PaymentScreen;
