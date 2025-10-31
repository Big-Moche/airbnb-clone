import React from "react";
import "./PropertyPage.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function PropertyPage() {
  const { id } = useParams(); // get ID from URL

  const { listings, listings2, listings3 } = useSelector(
    (state) => state.listings
  );

  const allListings = [
    ...(listings || []),
    ...(listings2 || []),
    ...(listings3 || []),
  ];

  const house = allListings.find((item) => item.id === id);

  if (!house) return <p>Listing not found!</p>;

  return (
    <div>
      <Header />
      <div className="property-page">
        <h1>{house.title}</h1>
        <img src={house.image} alt={house.title} width="400" />
        <p>Price: {house.price}</p>
        <p>Stay: {house.stay || house.nights}</p>
        <p>Stars: {house.stars}</p>
        <p>{house.description || "No description provided."}</p>
      </div>
      <Footer />
    </div>
  );
}
