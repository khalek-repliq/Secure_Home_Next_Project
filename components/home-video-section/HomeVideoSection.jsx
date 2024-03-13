"use client";
import { PlayCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const HomeVideoSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const aTag = document.getElementById("youTubeLink");
    if (aTag) {
      aTag.addEventListener("click", (e) => {
        e.preventDefault();
        setModalOpen(true);
      });
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 my-5 lg:my-8 space-y-3 lg:space-y-0">
        <div className="h-full flex items-center">
          <div className="space-y-6">
            <h4 className="text-3xl">Watch Our Videos</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              laborum magnam voluptates recusandae vero obcaecati quibusdam
              excepturi nesciunt ipsa placeat.
            </p>
          </div>
        </div>
        <div className="border relative">
          <Image
            className="w-full rounded-md shadow-md"
            src="https://i.ibb.co/qkLBwDn/dan-nelson-h-Iz3vb-Ub-Oo-I-unsplash.jpg"
            width={550}
            height={347.45}
            priority
            alt="About page image"
          ></Image>
          <a
            id="youTubeLink"
            className=" w-20 primary_btn_bg flex items-center justify-center h-20 text-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            href="https://www.youtube.com/watch?v=I8DUO1w5zjo"
          >
            <PlayCircleIcon size={32} />
          </a>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="lg:max-w-screen-lg   w-full m-3 md:m-8 relative"
          >
            <iframe
              className="w-full"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/I8DUO1w5zjo"
              title="TOP 5: Best Home Security System 2024"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <button
              className="mt-4 bg-black text-sm text-white px-3 py-1 rounded absolute -top-10 md:-top-11 right-3 md:right-0"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeVideoSection;
