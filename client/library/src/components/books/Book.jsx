import React, { useState, useEffect } from "react";
import axios from "axios";
import "./book.css";
import books from "./Books";

function Book() {
  return (
    <div className="books">
      <h1>Fictional Books</h1>
      <div className="grid">
        {books.map((book) => {
          return (
            <div className="content" key={book.id}>
              <img src={book.src} />
              <span>{book.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Book;
