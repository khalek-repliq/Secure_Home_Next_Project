"use client";
import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CommentSection = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/khalek-repliq/Secure_Home_Next_Project/main/DummyData/servicesData/services.json"
      );
      return res.data;
    },
  });

  const allReviews = services?.map((item) => item.reviews).flat() ?? [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-5 md:my-6 lg:my-8">
      <SectionHeader
        direction={"#"}
        title={"Top comments"}
        btnText={"all comments"}
      />
      <Slider {...settings} className={`mt-5`}>
        {allReviews.map((review, index) => (
          <div
            key={index}
            className={`bg-white p-3 rounded-lg shadow-lg flex flex-col }`}
          >
            <h6 className="text-xl font-medium">{review.user}</h6>
            <div>
              <p className="text-gray-600">
                Rating: <span>({review.rating})</span>
              </p>
              <Rating
                value={review.rating}
                readOnly
                style={{ maxWidth: 100 }}
              />
            </div>
            <div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommentSection;
