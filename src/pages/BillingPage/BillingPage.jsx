import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import './BillingPage.css';

const BillingPage = () => {
  return (
    <div className="billing-page">
      <Navbar />
      <main>
        <h2>Billing & Subscriptions</h2>
        {/* Here you'd integrate with your payment system, like Stripe, PayPal, etc. */}
        <div className="payment-section">
          {/* Display current subscription, billing details, etc. */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BillingPage;
