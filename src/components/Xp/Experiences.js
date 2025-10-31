import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences } from "../../features/experiences/experienceSlice";
import { fetchExperiences2 } from "../../features/experiences/experienceSlice2";
import "./Experiences.css"; // Same CSS styling for the grid/cards etc.
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Experiences = () => {
  const dispatch = useDispatch();
  const { experiences, status, error } = useSelector(
    (state) => state.experiences
  );
  const { experiences2 } = useSelector((state) => state.experiences2);

  useEffect(() => {
    dispatch(fetchExperiences());
    dispatch(fetchExperiences2());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading experiences...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div>
        <h2 className="options">
          Top Joburg Experiences <ChevronRightIcon />
        </h2>
        <div className="experiences-container">
          {experiences.map((exp) => (
            <div className="experiences-card" key={exp.id}>
              <div className="image-wrapper">
                <img src={exp.image} alt={exp.title} />
              </div>
              <div className="card-info">
                <h3 className="title">{exp.title}</h3>
                <p className="location">{exp.location}</p>
                <strong className="price">
                  R{exp.price} ⭐{exp.rating}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="options">
          Experiences in Cape Town
          <ChevronRightIcon />
        </h2>
        <div className="experiences-container">
          {experiences2.map((exp) => (
            <div className="experiences-card" key={exp.id}>
              <div className="image-wrapper">
                <img src={exp.image} alt={exp.title} />
              </div>
              <div className="card-info">
                <h3 className="title">{exp.title}</h3>
                <p className="location">{exp.location}</p>
                <strong className="price">
                  R{exp.price} ⭐{exp.rating}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
