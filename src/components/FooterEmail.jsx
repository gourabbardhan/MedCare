import React, { useState } from "react";

const FooterEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Simple email regex validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      setSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      setSuccess(false);
      return;
    }

    // Success
    setError("");
    setSuccess(true);
    setEmail(""); // Clear the input
  };

  return (
    <footer className="footer">
        <form onSubmit={handleSubmit} className="footer-form">
          <div className="footmails"><input type="email" name="email" id="email" autoComplete="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
          <button type="submit" className="subs-btn">Subscribe</button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Subscribed successfully!</p>}
    </footer>
  );
};

export default FooterEmail;