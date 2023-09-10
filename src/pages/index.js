import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Phone from "../../components/Phone";
import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        {/* <style>
          {`
            .custom-clip-path {
              clip-path: polygon(46% 0, 80% 0%, 100% 0, 100% 58%, 52% 100%, 20% 100%, 0% 80%, 0 38%);
            }
          `}
        </style> */}
      </Head>
      <main>
        <div className="bg-[#f8f8f8]">
          {/* tools for fonts change */}
          <div className="hidden lg:flex flex-row justify-between px-36 text-sm fixed z-40 py-5 bg-white w-full">
            <div className="flex flex-row space-x-2">
              <button className="border border-[#413d4a] w-8 h-8 flex justify-center items-center rounded-sm shadow">
                A-
              </button>
              <button className="border border-[#413d4a] w-8 h-8 flex justify-center items-center rounded-sm shadow">
                A
              </button>
              <button className="border border-[#413d4a] w-8 h-8 flex justify-center items-center rounded-sm shadow">
                A+
              </button>
            </div>

            <div className="flex flex-row space-x-2">
              <button className="bg-[#413d4a] text-white w-8 h-8 flex justify-center items-center rounded-sm shadow">
                A
              </button>
              <button className="bg-[#39429b] text-white w-8 h-8 flex justify-center items-center rounded-sm shadow">
                A
              </button>
            </div>

            <div className="flex flex-row space-x-2">
              <button className="border border-[#39429b] text-[#39429b] px-6 h-8 flex justify-center items-center rounded-sm shadow">
                Skip to Main Content
              </button>
            </div>

            <div className="flex flex-row space-x-2">
              <select
                name="select-station"
                id="station"
                className="border border-[#413d4a] text-[#413d4a] h-8 flex w-[233px] items-center rounded-sm shadow"
              >
                <option value="station">Know Your Police station</option>
              </select>
            </div>

            <div className="flex flex-row space-x-2">
              <button className="border border-[#39429b] bg-[#39429b] text-white px-6 w-24 h-8 flex justify-center items-center rounded-sm shadow">
                मराठी
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="mt-20 lg:mt-80 ml-10 lg:ml-36 mb-10">
              <img
                src="/police-logo.png"
                alt="police logo"
                className=" w-auto lg:w-[140.6px] lg:h-[133.2px]"
              />
              <p className="text-3xl text-[#413d4a] font-semibold font-[PlayfairDisplay]">
                Make your Complaints Online
              </p>
              <p className="text-lg text-[#413d4a] font-[PlayfairDisplay] opacity-80 lg:w-[415px] mt-4 mb-2">
                Your Complaint does NOT constitute an FIR. For Lodging an FIR
                the traditional system of lodging it at the police station
                prevails.
              </p>
              <div>
                <button className="border border-[#39429b] text-[#39429b] px-6 lg:w-[225px] lg:h-[45px] flex justify-center items-center rounded-sm shadow font-semibold">
                  Online Complaint
                </button>
              </div>
            </div>

            <div>
              <img
                src="/hq-image-new.jpg"
                alt="hq iamge"
                className="w-[840px] rounded-bl-full custom-clip-path"
              />
            </div>
          </div>
        </div>

        {/* navbar  */}

        <nav className="bg-[#5e6ab0] text-white py-5 sticky hidden lg:block top-16 z-50">
          <ul className="flex flex-row mx-36 justify-between ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li className="opacity-70">
              <Link href={"/"}>Reports</Link>
            </li>

            <li className="opacity-70">
              <Link href={"/"}>Tell Us About</Link>
            </li>
            <li className="opacity-70">
              <Link href={"/"}>Citizens Corner</Link>
            </li>
            <li className="opacity-70">
              <Link href={"/"}>Police Corner</Link>
            </li>
            <li className="opacity-70">
              <Link href={"/"}>About Us</Link>
            </li>
          </ul>
        </nav>

        {/* cards */}

        <div className="px-36 py-16 bg-[#f8f8f8]">
          <div className="flex flex-col items-center lg:flex-row space-x-0 space-y-2 lg:space-y-0 lg:space-x-2">
            <div className="w-[375px] border border-gray-400 shadow py-8 px-5 rounded-md hover:bg-white hover:shadow-lg">
              <img src="/accident.png" alt="accident" className="h-[71px] " />
              <h2 className="text-xl font-bold mt-2 text-[#413d4a]">
                Accident Compensation
              </h2>
              <p className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
            <div className="w-[375px] border border-gray-400 shadow py-8 px-5 rounded-md hover:bg-white hover:shadow-lg">
              <img
                src="/stolen-vehicle.png"
                alt="accident"
                className="h-[71px]"
              />
              <h2 className="text-xl font-bold mt-2 text-[#413d4a]">
                Stolen & Abandoned Vehicles
              </h2>
              <p className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
            <div className="w-[375px]  border border-gray-400 shadow py-8 px-5 rounded-md hover:bg-white hover:shadow-lg">
              <img src="/missing.png" alt="accident" className="h-[71px]" />
              <h2 className="text-xl font-bold mt-2 text-[#413d4a]">
                Missing Persons
              </h2>
              <p className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row space-x-0 space-y-2 lg:space-y-0 lg:space-x-2 mt-2">
            <div className="w-[375px] border border-gray-400 shadow py-8 px-5 rounded-md hover:bg-white hover:shadow-lg">
              <img src="/passport.png" alt="accident" className="h-[71px] " />
              <h2 className="text-xl font-bold mt-2 text-[#413d4a]">
                Passport
              </h2>
              <p className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
            <div className="w-[375px] border border-gray-400 shadow py-8 px-5 rounded-md hover:bg-white hover:shadow-lg">
              <img src="/report.png" alt="accident" className="h-[71px]" />
              <h2 className="text-xl font-bold mt-2 text-[#413d4a]">
                First Information Report
              </h2>
              <p className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
            <div className="w-[375px]  border border-gray-400 shadow py-8 px-5 rounded-md hover:bg-white hover:shadow-lg">
              <img
                src="/verification.png"
                alt="accident"
                className="h-[71px]"
              />
              <h2 className="text-xl font-bold mt-2 text-[#413d4a]">
                Verfication Unit
              </h2>
              <p className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row space-x-0 space-y-2 lg:space-y-0 lg:space-x-2 mt-2">
            <div className="w-[375px] border border-gray-400 shadow py-8 px-5 rounded-md hover:bg-white hover:shadow-lg">
              <img
                src="/recruitment.png"
                alt="accident"
                className="h-[71px] "
              />
              <h2 className="text-xl font-bold mt-2 text-[#413d4a]">
                Recuritment
              </h2>
              <p className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
            <div className="w-[375px] border border-gray-400 shadow py-8 px-5 rounded-md hover:bg-white hover:shadow-lg">
              <img src="/payment.png" alt="accident" className="h-[71px]" />
              <h2 className="text-xl font-bold mt-2 text-[#413d4a]">
                Gras Payment
              </h2>
              <p className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
            <div className="w-[375px]  border border-gray-400 shadow py-8 px-5 rounded-md hover:bg-white hover:shadow-lg">
              <img src="/press.png" alt="accident" className="h-[71px]" />
              <h2 className="text-xl font-bold mt-2 text-[#413d4a]">
                Press Release
              </h2>
              <p className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
            </div>
          </div>
        </div>

        {/* our mission */}

        <div className="py-16 ">
          <h2 className="text-2xl text-center font-bold text-[#413d4a]">
            Our Mission
          </h2>
          <div className="w-12 h-1 bg-[#39429b] rounded-full mx-auto mt-2"></div>

          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row max-w-sm lg:max-w-3xl mx-auto mt-10 p-5 lg:p-0">
            <div className="w-full lg:w-1/3 flex justify-center items-end">
              <img src="/sample-police.jpeg" alt="" className="rounded-xl " />
            </div>
            <div className="w-full lg:w-2/3 ">
              <p className="text-[#413d4a] opacity-90">
                Mumbai Police shall ensure the Rule of Law, enforce the law of
                the land impartially and firmly without fear or favour, and
                strive to create a fear free environment that is conducive to
                growth and development.
              </p>
              <p className="text-[#413d4a] opacity-90 mt-5">
                Mumbai Police shall ensure the Rule of Law, enforce the law of
                the land impartially and firmly without fear or favour, and
                strive to create a fear free environment that is conducive to
                growth and development.
              </p>
              <div className="text-[#39429b] text-sm font-bold mt-3">
                Read More
              </div>

              <div className="mt-3">
                <span className="text-[#413d4a] font-bold inline-block mr-2">
                  Subodh Kumar Jaiswal ( I.P.S ),
                </span>
                <span className="text-[#413d4a] opacity-90">
                  Commissioner of Police, Mumbai
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Martyrs */}

        <div className="py-16 bg-[#f8f8f8]">
          <h2 className="text-2xl text-center font-bold text-[#413d4a]">
            Martyrs
          </h2>
          <div className="w-12 h-1 bg-[#39429b] rounded-full mx-auto mt-2"></div>
          <div className="max-w-4xl mx-auto py-10 mt-5">
            <Slider />
          </div>
        </div>

        {/* initiatives */}

        <div className="py-16">
          <h2 className="text-2xl text-center font-bold text-[#413d4a]">
            Initiatives
          </h2>
          <div className="w-12 h-1 bg-[#39429b] rounded-full mx-auto mt-2"></div>

          <div className="flex flex-col lg:flex-row max-w-xs lg:max-w-3xl mx-auto mt-10 space-x-0 lg:space-x-2 space-y-2 lg:space-y-0">
            <div className="w-full lg:w-1/2">
              <div className="bg-[#f8f8f8]">
                <img src="/group.jpeg" alt="" className="" />
                <h3 className="text-[#413d4a] font-bold p-2">
                  Positive Stories & Good Work by Mumbai Police
                </h3>
                <p className="text-[#413d4a] opacity-90 text-sm p-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-[#f8f8f8] p-2">
                <h3 className="text-[#413d4a] font-bold">Suspicious Objects</h3>
                <p className="text-[#413d4a] opacity-90 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="bg-[#f8f8f8] p-2 mt-2">
                <h3 className="text-[#413d4a] font-bold">Suspicious Objects</h3>
                <p className="text-[#413d4a] opacity-90 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="bg-[#f8f8f8] p-2 mt-2">
                <h3 className="text-[#413d4a] font-bold">Suspicious Objects</h3>
                <p className="text-[#413d4a] opacity-90 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 mx-auto font-semibold border-[#39429b] text-[#39429b] border w-40 h-10 flex justify-center items-center rounded-md">
            Show All
          </div>
        </div>

        {/* social media feed */}

        <div className="py-16 bg-[#f8f8f8]">
          <h2 className="text-2xl text-center font-bold text-[#413d4a]">
            Social Media Feeds
          </h2>
          <div className="w-12 h-1 bg-[#39429b] rounded-full mx-auto mt-2"></div>

          <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 max-w-5xl mt-10 mx-auto justify-center items-center">
            <div className="w-[376px] bg-white shadow-lg ">
              <img
                src="/social1.jpeg"
                alt=""
                className="w-80 h-40 mx-auto mt-5"
              />
              <img
                src="/facebook.png"
                alt=""
                className="w-9 h-9 mx-auto mt-3"
              />
              <div className="text-[#485a96] font-semibold text-center mt-2 px-3">
                @mumbaipolice
              </div>
              <p className="text-[#413d4a] font-bold mt-3 px-3">
                Road Security Campaign 2018
              </p>
              <p className="text-[#413d4a] opacity-90 mt-3 px-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-[#485a96] my-3 font-semibold px-3">
                Facebook Page
              </div>
              <div className="bg-[#f8f8f8] flex flex-row justify-between p-3">
                <div className="text-xs text-[#413d4a]">12 hours ago</div>
                <div>
                  <img src="/share.png" alt="" />
                </div>
              </div>
            </div>

            <div className="w-[376px] bg-white shadow-lg">
              <img
                src="/social2.jpeg"
                alt=""
                className="w-80 h-40 mx-auto mt-5"
              />
              <img src="/twitter.png" alt="" className="w-9 h-9 mx-auto mt-3" />
              <div className="text-[#5da8dc] font-semibold text-center mt-2 px-3">
                @mumbai_police
              </div>
              <p className="text-[#413d4a] font-bold mt-3 px-3">
                Road Security Campaign 2018
              </p>
              <p className="text-[#413d4a] opacity-90 mt-3 px-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-[#5da8dc] my-3 font-semibold px-3">
                Twitter Page
              </div>
              <div className="bg-[#f8f8f8] flex flex-row justify-between p-3">
                <div className="text-xs text-[#413d4a]">4 days ago</div>
                <div>
                  <img src="/share.png" alt="" />
                </div>
              </div>
            </div>

            <div className="w-[376px] bg-white shadow-lg ">
              <img
                src="/social3.jpeg"
                alt=""
                className="w-80 h-40 mx-auto mt-5"
              />
              <img src="/youtube.png" alt="" className="w-9 h-9 mx-auto mt-3" />
              <div className="text-[#cd201f] font-semibold text-center mt-2 px-3">
                @mumbaipolice
              </div>
              <p className="text-[#413d4a] font-bold mt-3 px-3">
                Road Security Campaign 2018
              </p>
              <p className="text-[#413d4a] opacity-90 mt-3 px-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="text-[#cd201f] my-3 font-semibold px-3">
                Youtube Page
              </div>
              <div className="bg-[#f8f8f8] flex flex-row justify-between p-3">
                <div className="text-xs text-[#413d4a]">4 days ago</div>
                <div>
                  <img src="/share.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Phone />

      <Footer />
    </div>
  );
}
