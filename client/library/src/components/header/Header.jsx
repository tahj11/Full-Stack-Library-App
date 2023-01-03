import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="Card">
        <div className="container">
          <span>Get a discount of up to $20 if you purchase 3 books</span>
        </div>
      </div>
      {/* <h2>Books For Kids</h2> */}
      <div className="kids-section">
        <img
          src="https://media.istockphoto.com/id/1288884053/photo/african-american-cute-girl-is-holding-school-books-an-pointing-on-a-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=UeJ1l2VbZ3KhsqYH6AKdw3Ig5mQR8hwCdS89B4IeqJc="
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
