import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Email: <Link to="/contact">reagan.rodriguez.a@gmail.com</Link>
      </p>

      <p>
        CV: <Link to="/contact">Download PDF</Link>
      </p>
      <p>
        Github:<a href="https://github.com/reaganrodriguez" target="_blank" > https://github.com/reaganrodriguez </a>
     
      </p>

      <p>
        LinkedIn: <Link to="/contact">https://www.linkedin.com/in/rodriguezreagana/</Link>
      </p>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br></br>
        <label htmlFor="message">Message:</label> <br></br>
        <textarea id="message" name="message" required></textarea>
        <br></br>
      </form>
      <button onClick={() => navigate("/")}>Send</button>
    </div>
  );
}

export default Contact;
