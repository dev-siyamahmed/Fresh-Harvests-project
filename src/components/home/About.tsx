"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function About() {
    return (
        <section className="relative bg-white h-[657px]  max-w-[1213px] mx-auto p-4 flex flex-col lg:flex-row items-center gap-10 my-10">
            {/* Left Side - Image + Badge */}
            <div className="relative h-[639px] flex-1 flex justify-center items-center">
                <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yq_kcp5w8zlYbsJvrkT_TdARd1bVHCTCzw&s"
                    alt="Fresh Harvest"
                    width={400}
                    height={600}
                    className="rounded-md object-contain"
                />

                <div className="absolute top-0 left-80 lg:left-130 ">
                    <Image
                        src="https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-leaf---gacher-pata-design-vector-png-image_14234602.png"
                        className=""
                        alt=""
                        width={60}
                        height={45}
                    />
                </div>

                <div className="absolute flex gap-2 bottom-60 left-50 lg:left-80 bg-white shadow-lg rounded-lg p-2 ">
                    <div className="w-7 h-7 bg-green-600 rounded-md"></div>
                    <span className="font-bold text-lg text-gray-900">
                        Fresh Harvests
                    </span>
                </div>
                {/* Floating Product Card */}
                <div className="absolute bottom-0  left-58 lg:left-90 bg-white shadow-lg rounded-lg p-2 ">
                    <div className="w-[150px] h-[192px] ">
                        <div className=" bg-green-100 flex justify-center items-center h-[110px] rounded-[2px] ">
                            <Image
                                src="https://i.ibb.co.com/3p2VXxn/pomegrate.webp"
                                alt="Fresh Harvest"
                                width={400}
                                height={400}
                                className="rounded-md object-contain"
                            />
                        </div>
                        <div className=" flex flex-col text-center">
                            <h4 className="font-normal text-[#212337] text-[9px] ">
                                Mushroom
                            </h4>
                            <p className="text-[9px] text-[#4A4A52]  ">$2.3/kg</p>

                            <Button className="mt-3" variant="secondary" size="sm">Add To Cart</Button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Text */}
            <div className="flex-1">
                {/* Tag */}
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm font-medium">
                    About us
                </span>

                {/* Title */}
                <h2 className="mt-3 text-3xl font-bold text-gray-800">
                    About Fresh Harvest
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Welcome to Fresh Harvest, your premier destination for high-quality
                    and fresh produce. We are passionate about providing you with the
                    finest fruits, vegetables, and salad ingredients to nourish your body
                    and delight your taste buds. With a commitment to excellence,
                    sustainability, and customer satisfaction, Fresh Harvest is here to
                    revolutionize your grocery shopping experience.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-4">
                    <Button variant="outline"> Read More </Button>
                </div>
            </div>
        </section>
    );
}
