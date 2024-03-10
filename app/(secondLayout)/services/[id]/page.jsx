"use client";
import { Rating } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import "@smastrom/react-rating/style.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      axios
        .get(
          "https://raw.githubusercontent.com/khalek-repliq/Secure_Home_Next_Project/main/DummyData/servicesData/services.json"
        )
        .then((res) => res.data),
  });
  const service = services?.find((service) => service.id == id);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 p-5 md:my-10">
            {/* Image area */}
            <div className=" flex justify-end ">
              <Image
                src={service?.image}
                alt="Service Image"
                width={400}
                height={240}
                className="shadow-lg rounded-lg"
              />
            </div>
            {/* content area */}
            <div className="space-y-5">
              <div className="flex flex-col space-y-5">
                <h4 className="text-3xl">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <table className=" w-full flex flex-col space-y-5">
                <tr className="flex">
                  <td className="w-1/3 font-bold text-gray-600">Price:</td>
                  <td className="text-[#27bfb3] font-medium w-2/3">
                    {service?.price}
                  </td>
                </tr>
                <tr className="flex ">
                  <td className="w-1/3 font-bold text-gray-600">Duration: </td>
                  <td className="font-medium text-gray-600 w-2/3">
                    {service.duration}
                  </td>
                </tr>
                <tr className="flex ">
                  <td className="w-1/3 font-bold text-gray-600">Location: </td>
                  <td className="font-medium text-gray-600 w-2/3">
                    {service.location}
                  </td>
                </tr>
                <tr className="flex">
                  <td className="w-1/3 font-bold text-gray-600">
                    Availability:
                  </td>
                  <td className="font-medium text-gray-600 w-2/3">
                    {service.availability}
                  </td>
                </tr>
                <tr className="flex">
                  <td className="w-1/3 font-bold text-gray-600">
                    Requirements:
                  </td>
                  <td className="font-medium text-gray-600 w-2/3">
                    {service.requirements}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          {/* others content */}
          <div className="mb-10">
            <div className="space-y-5 mb-5">
              <h4 className="text-3xl">Reviews</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
                {service.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-lg"
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
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-5">
                <h4 className="text-3xl">Provider Information</h4>
                <table className=" w-full flex flex-col space-y-3">
                  <tr className="flex">
                    <td className="w-1/3 font-bold text-gray-600">
                      Company Name:
                    </td>
                    <td className="text-gray-600 font-medium w-2/3">
                      {service.provider_information.company_name}
                    </td>
                  </tr>
                  <tr className="flex">
                    <td className="w-1/3 font-bold text-gray-600">
                      Contact Email:
                    </td>
                    <td className="text-gray-600 font-medium w-2/3">
                      {service.provider_information.contact_email}
                    </td>
                  </tr>
                  <tr className="flex">
                    <td className="w-1/3 font-bold text-gray-600">
                      Contact Phone:
                    </td>
                    <td className="text-gray-600 font-medium w-2/3">
                      {service.provider_information.contact_phone}
                    </td>
                  </tr>
                  <tr className="flex">
                    <td className="w-1/3 font-bold text-gray-600">Website:</td>
                    <td className="text-gray-600 font-medium w-2/3">
                      <a
                        target="blank"
                        href={service.provider_information.website}
                      >
                        {service.provider_information.website}
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="space-y-5">
                <h4 className="text-3xl">Additional Features</h4>
                <div className="space-y-3">
                  {service.additional_features.map((features, index) => (
                    <p className="text-gray-600 font-medium" key={index}>
                      <span className="mr-2">{index + 1}.</span>
                      <span>{features}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
