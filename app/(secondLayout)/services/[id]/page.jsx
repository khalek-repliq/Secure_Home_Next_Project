"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 p-5 md:my-10">
          <div className=" flex justify-end ">
            <Image
              src={service?.image}
              alt="Service Image"
              width={400}
              height={240}
              className="shadow-lg rounded-lg"
            />
          </div>
          <div className="space-y-5">
            <div className="flex flex-col space-y-5">
              <h4 className="text-3xl">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <table className=" w-full flex flex-col space-y-5">
              <tr className="flex border">
                <td className="w-1/2 font-bold text-gray-600">Price:</td>
                <td className="text-[#27bfb3] font-medium">{service?.price}</td>
              </tr>
              <tr className="flex ">
                <td className="w-1/2 font-bold text-gray-600">Duration: </td>
                <td className="font-medium text-gray-600">
                  {service.duration}
                </td>
              </tr>
              <tr className="flex ">
                <td className="w-1/2 font-bold text-gray-600">Location: </td>
                <td className="font-medium text-gray-600">
                  {service.location}
                </td>
              </tr>
              <tr className="flex border">
                <td className="w-1/2 font-bold text-gray-600 border">
                  Availability:
                </td>
                <td className="font-medium text-gray-600">
                  {service.availability}
                </td>
              </tr>
              <tr className="flex border">
                <td className="w-1/2 font-bold text-gray-600 border">
                  Requirements:
                </td>
                <td className="font-medium text-gray-600">
                  {service.requirements}
                </td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
