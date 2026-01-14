"use client";
import { useState } from "react";
import { PrimaryButton } from "@/app/ui/PrimaryButton";

export const Journey = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-5 py-10 flex flex-col items-center justify-center" id="journey">
      <div className="w-full flex items-center justify-between pr-5">
        <h1 className="w-3/5 text-3xl font-bold text-[#0b477f]">
          Your Journey Starts Here
        </h1>
        <PrimaryButton text="Apply Now!" href="https://tinyurl.com/PGCIB-24126" external className="h-full"/>
      </div>

      <div className="flex flex-col gap-5 py-10 items-center justify-between w-full">

        <div className="w-full flex flex-col bg-gray-200 rounded-lg transition-all duration-300 relative">

            {/* HEADER CONTENT (always visible) */}
            <div className="w-full p-5 flex justify-between items-center gap-x-7">
                <div className="text-md">
                Book a One-on-One Session with a Counsellor
                </div>

                <button
                form="booking-form"
                type="submit"
                className="text-[rgb(18,68,119)] whitespace-nowrap underline underline-offset-4 font-bold"
                >
                Book Now!
                </button>
            </div>

            {/* INVISIBLE EXPAND TRIGGER */}
            {!open && (
                <button
                onClick={() => setOpen(true)}
                className="absolute inset-0 z-10"
                aria-label="Open booking form"
                />
            )}

            {/* EXPANDING FORM BODY */}
            <form
                id="booking-form"
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[520px] pb-7" : "max-h-0"}`}
                onSubmit={(e) => {
                e.preventDefault();
                // submission handler
                console.log("Book Now clicked — form submission triggered");
                }}
            >
                <div className="px-5 grid grid-cols-[auto_1fr] gap-y-2 gap-x-2 items-center">

                    <div className="p-3">
                        <p className="text-[#0b477f] font-bold">Full Name:</p>
                    </div>
                    <div className="p-3">
                        <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border-b-2 border-[#1f609a] underline-offset-4 bg-transparent outline-none"
                        />
                    </div>

                    <div className="p-3">
                        <p className="text-[#0b477f]  font-bold">Email:</p>
                    </div>
                    <div className="p-3">
                        <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border-b-2 border-[#1f609a] underline-offset-4 bg-transparent outline-none"
                        />
                    </div>

                    <div className="p-3">
                        <p className="text-[#0b477f] font-bold">Phone No.:</p>
                    </div>
                    <div className="p-3">
                        <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border-b-2 border-[#1f609a] underline-offset-4 bg-transparent outline-none"
                        />
                    </div>

                </div>

            </form>

            {/* COLLAPSE CONTROL */}
            <div className="py-2 absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-auto">
                <img
                src="/icons/dropdown.png"
                onClick={() => setOpen(false)}
                className={`cursor-pointer transition-transform duration-300 ${open ? "rotate-180" : ""}`}                />
            </div>
        </div>

        {/* OTHER CARDS — unchanged */}
        <div className="w-full flex flex-col">
          <div className="w-full h-auto p-5 bg-gray-200 rounded-lg flex items-center gap-4">
            <div className="text-md w-full">
              Register For Our Information Session
            </div>
            <a
              href="https://tinyurl.com/PGCIB-24126"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#124477] text-end whitespace-nowrap underline underline-offset-4 font-bold min-w-1/4"
            >
              Zoom
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="w-full h-auto p-5 bg-gray-200 rounded-lg flex items-center gap-4">
            <div className="text-md w-full">
              Call or Whatsapp Us at
            </div>
            <a href="tel:+918588052814" className="text-[#124477] whitespace-nowrap underline underline-offset-4 font-bold">
              +91 8588052814
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
