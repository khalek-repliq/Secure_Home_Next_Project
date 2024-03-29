"use client";
import { Rating } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import "@smastrom/react-rating/style.css";
import toast from "react-hot-toast";
import DetailsPageSkeleton from "@/components/loading-skeleton/DetailsPageSkeleton";
import TruncatedParagraph from "@/components/see-more-paragraph/TruncatedParagraph";
import SecondaryBtn from "@/components/secondary-Btn/SecondaryBtn";

const ServiceDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [isSeeMore, setIsSeeMore] = useState(false);
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

  const handleBooking = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      toast.success("Booking confirm");
    } else {
      toast.error("Login first");
      router.push("/login");
    }
  };

  const handleIsSeeMoreButton = () => {
    setIsSeeMore((prevIsSeeMore) => !prevIsSeeMore);
    console.log(isSeeMore);
  };

  return (
    <>
      {isLoading ? (
        <DetailsPageSkeleton />
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 pt-5 md:p-5 md:my-10">
            {/* Image area */}
            <div className=" flex justify-center lg:justify-end ">
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
                <p className="text-gray-600 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
              <table className=" w-full flex flex-col space-y-5 text-sm md:text-base">
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
              <div>
                <button
                  onClick={handleBooking}
                  className="inline-block primary_btn_bg px-5 py-2 rounded-md text-sm hover:bg-[#2a8a82] duration-150 transition-all"
                >
                  Book a service
                </button>
              </div>
            </div>
          </div>
          {/* others content */}
          <div className="my-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="space-y-5">
                <h4 className="text-3xl">Provider Information</h4>
                <table className=" w-full flex flex-col space-y-1 text-sm md:text-base md:space-y-3">
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
                <div className="space-y-1 md:space-y-3 text-sm md:text-base">
                  {service.additional_features.map((features, index) => (
                    <p className="text-gray-600 font-medium" key={index}>
                      <span className="mr-2">{index + 1}.</span>
                      <span>{features}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <h4 className="text-3xl">Reviews</h4>
              <div className=" bg-white p-3 rounded-lg shadow-lg w-full">
                <div className="space-y-5">
                  {isSeeMore ||
                    service.reviews.slice(0, 1).map((review, index) => (
                      <div key={index} className="">
                        <h6 className="text-xl font-medium">{review.user}</h6>
                        <div>
                          <p className="text-gray-600 text-sm md:text-base">
                            Rating: <span>({review.rating})</span>
                          </p>
                          <Rating
                            value={review.rating}
                            readOnly
                            style={{ maxWidth: 100 }}
                          />
                        </div>
                        <TruncatedParagraph
                          text={review.comment}
                          extraClasses={
                            "text-gray-600 text-sm md:text-base inline-block"
                          }
                          maxWords={5}
                        />
                      </div>
                    ))}
                  {isSeeMore &&
                    service.reviews.map((review, index) => (
                      <div key={index} className="">
                        <h6 className="text-xl font-medium">{review.user}</h6>
                        <div>
                          <p className="text-gray-600 text-sm md:text-base">
                            Rating: <span>({review.rating})</span>
                          </p>
                          <Rating
                            value={review.rating}
                            readOnly
                            style={{ maxWidth: 100 }}
                          />
                        </div>
                        <TruncatedParagraph
                          text={review.comment}
                          extraClasses={
                            "text-gray-600 text-sm md:text-base inline-block"
                          }
                          maxWords={5}
                        />
                      </div>
                    ))}
                </div>
                {isSeeMore ? (
                  <SecondaryBtn
                    onClick={() => handleIsSeeMoreButton()}
                    title="See less comments"
                  />
                ) : (
                  <SecondaryBtn
                    onClick={() => handleIsSeeMoreButton()}
                    title="See all comments"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
