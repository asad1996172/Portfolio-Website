import React from "react";
import data from "../../../data/publications.json";
import Carousel from "react-bootstrap/Carousel";
import CarouselItemContent from "./carousel_item_content";

const Publications = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="publications"
    >
      <div className="w-100">
        <div className="container">
          <Carousel>
            {data["papers"].map((item, key) => {
              return (
                <Carousel.Item>
                  <CarouselItemContent
                    paper_title={item["name"]}
                    paper_year={item["conference_year"]}
                    authors={item["authors"]}
                    image_path={item["image"]}
                    buttons={item["buttons"]}
                    description={item["description"]}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Publications;
