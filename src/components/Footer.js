import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#383540] text-white px-10 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between space-y-2 lg:space-y-0 py-10 border-b border-gray-600">
          <div className="">
            <div className="flex justify-center">
              <img src="/digital-india.png" alt="" className=" h-12" />
            </div>
            <p className="mt-2 text-center">
              <Link href={"/"}>digitizeindia.gov.in</Link>
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src="/startup.png" alt="" className="h-12" />
            </div>
            <p className="mt-2 text-center">
              <Link href={"/"}>startupindia.gov.in</Link>
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src="/india-gov.png" alt="" className=" h-12" />
            </div>
            <p className="mt-2 text-center">
              <Link href={"/"}>india.gov.in</Link>
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src="/india-gov.png" alt="" className=" h-12" />
            </div>
            <p className="mt-2 text-center">
              <Link href={"/"}>pib.nic.in</Link>
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src="/swachha-bharat.png" alt="" className="h-12 " />
            </div>
            <p className="mt-2 text-center">
              <Link href={"/"}>swachhbharatmission.gov.in</Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row mt-10 pb-10 justify-between border-b border-gray-600">
          <div>
            <p className="font-semibold text-xl">Mumbai Police</p>
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 mt-4">
              <ul className="flex flex-col space-y-2 text-sm">
                <li>Contact us</li>
                <li>Press release</li>
                <li>About us</li>
                <li>Cookies</li>
              </ul>
              <ul className="flex flex-col space-y-2 text-sm">
                <li>Disclaimer</li>
                <li>Sitemap</li>
                <li>Important links</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl">Information & Services</p>
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 mt-4">
              <ul className="flex flex-col space-y-2 text-sm">
                <li>Crime Prevention</li>
                <li>Crime Stats</li>
                <li>Report</li>
                <li>Downloads</li>
              </ul>
              <ul className="flex flex-col space-y-2 text-sm">
                <li>Tell us about</li>
                <li>Important website links</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl">Quick Links</p>
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 mt-4">
              <ul className="flex flex-col space-y-2 text-sm">
                <li>Online complains</li>
                <li>Tenders</li>
                <li>Emergency No</li>
                <li>Your police station</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 mt-4">
              <ul className="flex flex-col space-y-2 text-sm">
                <li>Whats App : 8454999999</li>
                <li>Alert Citizen : 103</li>
                <li>Control Room : 100</li>
                <li>Elder Line : 1090</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between text-sm py-6">
          <div>Copyright © 2018 Mumbai Police</div>
          <div>Last Update: 17/08/2018 02:12:00 | Visitors : 40,000</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
