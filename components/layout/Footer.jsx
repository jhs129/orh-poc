/**
 * This code was generated by Builder.io.
 */
import React from "react";

const SectionTitle = ({ children }) => (
  <div className="flex flex-col items-start py-12 pr-20 pl-10 text-base font-bold leading-5 text-white uppercase border-b border-solid border-b-white tracking-[4.5px] max-md:px-5 max-md:max-w-full">
    {children}
  </div>
);

const MenuItem = ({ children }) => <div className="mt-6">{children}</div>;


const HealthcareComponent = () => {
  return (
    <footer className="flex flex-col pt-12 pb-6 border-solid bg-neutral-700 border-t-[15px] border-t-rose-800">
      <div id="logo">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60563457eb65f481ee1109f84916e2c154866564106e4bb03c0056165f74aeb4?apiKey=9d9c17771b684627bed7d61d5f05ef44&"
          alt=""
          className="self-center mt-9 max-w-full aspect-[11.11] w-[399px]"
        />
      </div>
      <div id="navigation">
        <div className="flex justify-center items-center px-16 py-px mt-14 w-full border-t border-solid border-y-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="w-full max-w-[1360px] max-md:max-w-full">
            <nav className="flex gap-5 max-md:flex-col max-md:gap-0">
              <section className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <SectionTitle>
                  <MenuItem>FIND A LOCATION</MenuItem>
                  <MenuItem>Find a Doctor</MenuItem>
                  <MenuItem>PATIENT PORTAL</MenuItem>
                  <MenuItem>MAKE AN APPOINTMENT</MenuItem>
                  <MenuItem>VIRTUAL VISIT</MenuItem>
                  <MenuItem>REFILL MY PRESCRIPTION</MenuItem>
                  <MenuItem>Online Estimates</MenuItem>
                  <MenuItem>MY BILLING</MenuItem>
                  <MenuItem>BECOME A DONOR</MenuItem>
                </SectionTitle>
              </section>
              <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <SectionTitle>
                  <MenuItem>ABOUT ORLANDO HEALTH</MenuItem>
                  <MenuItem>SERVICES AND SPECIALTIES</MenuItem>
                  <MenuItem>INSURANCE PLANS</MenuItem>
                  <MenuItem>PATIENTS INFORMATION</MenuItem>
                  <MenuItem>INFORMATION AND EVENTS</MenuItem>
                  <MenuItem>PATIENT FINANCIAL ASSISTANCE</MenuItem>
                  <MenuItem>Community Health Needs Assessment</MenuItem>
                  <MenuItem>Price Transparency</MenuItem>
                </SectionTitle>
              </section>
              <section className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <SectionTitle>
                  <MenuItem>CONTACT US</MenuItem>
                  <MenuItem>FEEDBACK FORM</MenuItem>
                  <MenuItem>FOR NURSES</MenuItem>
                  <MenuItem>FOR MEMBERS</MenuItem>
                  <MenuItem>Orlando Health Careers</MenuItem>
                  <MenuItem>MEDICAL PROFESSIONALS</MenuItem>
                  <MenuItem>CLINICAL TRIALS & RESEARCH</MenuItem>
                  <MenuItem>DONATE</MenuItem>
                </SectionTitle>
              </section>
            </nav>
          </div>
        </div>
      </div>
      <div className="text-center w-80 lg:w-full mt-8 mx-auto text-xs leading-4 text-white tracking-[3px]">
    COPYRIGHT © 2024 ORLANDO HEALTH. ALL RIGHTS RESERVED
  </div>
    </footer>
  );
};

export default HealthcareComponent;