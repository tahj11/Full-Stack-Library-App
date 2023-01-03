import React from "react";
import Banner from "../../components/banner/Banner";
import Book from "../../components/books/Book";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Navbar />
      <Header />
      <Book />
    </div>
  );
}

export default Home;
