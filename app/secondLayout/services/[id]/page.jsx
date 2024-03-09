"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
        <div className="bg-white rounded-xl p-5 my-6 md:my10">
          <div>
            <h1 className="text-4xl">Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
