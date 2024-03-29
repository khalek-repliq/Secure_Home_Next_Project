"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios"; // don't forget to import axios
import ServiceCard from "./ServiceCard";
import CardSkeleton from "../loading-skeleton/CardSkeleton";

const ServiceCards = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/khalek-repliq/Secure_Home_Next_Project/main/DummyData/servicesData/services.json"
      );
      return res.data;
    },
  });

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 md:my-12">
      {isLoading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        services?.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))
      )}
    </div>
  );
};

export default ServiceCards;
