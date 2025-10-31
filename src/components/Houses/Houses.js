import React, { useEffect } from "react";
import "./Houses.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../features/listings/listingSlice";
import { fetchListings2 } from "../../features/listings/listingSlice2";
import { fetchListings3 } from "../../features/listings/listingSlice3";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, NavLink } from "react-router-dom";

const Houses = () => {
  const dispatch = useDispatch();
  const { listings, error } = useSelector((state) => state.listings);
  const { listings2 } = useSelector((state) => state.listings2);
  const { listings3 } = useSelector((state) => state.listings3);

  useEffect(() => {
    dispatch(fetchListings());
    dispatch(fetchListings2());
    dispatch(fetchListings3());
  }, [dispatch]);

  if (error) return <p>Error: {error}</p>;

  const allListings = [...listings, ...(listings2 || []), ...(listings3 || [])];

  return (
    <div>
      <div>
        <h2 className="options">
          Popular homes in Cape Town <ChevronRightIcon />
        </h2>
        <div className="houses-container">
          {listings && listings.length > 0 ? (
            listings.map((house) => (
              <NavLink
                key={house.id}
                to={`/property/${house.id}`}
                className="house-link"
              >
                <div key={house._id} className="house-card">
                  <img src={house.image} alt={house.title} />

                  <div className="house-info">
                    <div className="house-top">
                      <h3>{house.title}</h3>
                      <span className="rating">⭐ {house.stars}</span>
                    </div>

                    <p className="location">{house.location}</p>

                    <p className="price">
                      <strong>R{house.price}</strong> / {house.stay}
                    </p>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <p>No houses found.</p>
          )}
        </div>
      </div>
      <h2 className="options">
        Available in Joburg this weekend <ChevronRightIcon />
      </h2>
      <div className="houses-container">
        {listings2 && listings2.length > 0 ? (
          listings2.map((house) => (
            <NavLink
              key={house.id}
              to={`/property/${house.id}`}
              className="house-link"
            >
              <div key={house._id} className="house-card">
                <img src={house.image} alt={house.title} />

                <div className="house-info">
                  <div className="house-top">
                    <h3>{house.title}</h3>
                    <span className="rating">⭐ {house.stars}</span>
                  </div>

                  <p className="location">{house.location}</p>

                  <p className="price">
                    <strong>R{house.price}</strong> / {house.stay}
                  </p>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <p>No houses found.</p>
        )}
      </div>
      <h2 className="options">
        Popular stays in Durban <ChevronRightIcon />
      </h2>
      <div className="houses-container">
        {listings3 && listings3.length > 0 ? (
          listings3.map((house) => (
            <NavLink
              key={house.id}
              to={`/property/${house.id}`}
              className="house-link"
            >
              <div key={house._id} className="house-card">
                <img src={house.image} alt={house.title} />

                <div className="house-info">
                  <div className="house-top">
                    <h3>{house.title}</h3>
                    <span className="rating">⭐ {house.stars}</span>
                  </div>

                  <p className="location">{house.location}</p>

                  <p className="price">
                    <strong>R{house.price}</strong> / {house.stay}
                  </p>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <p>No houses found.</p>
        )}
      </div>
    </div>
  );
};

export default Houses;
