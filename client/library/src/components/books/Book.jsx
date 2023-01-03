import React, { useState, useEffect } from "react";
import axios from "axios";
import "./book.css";
import books from "./Books";

function Book() {
  return (
    <div className="books">
      {books.map((book) => {
        return (
          <div className="content" key={book.id}>
            <img src={book.src} />
            <span>{book.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Book;
