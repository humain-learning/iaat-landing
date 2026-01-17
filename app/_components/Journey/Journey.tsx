"use client";
import { useState } from "react";
import { PrimaryButton } from "@/app/ui/PrimaryButton";


export const Journey = () => {
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isPhoneValid = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };
  const isFormValid = fullName.trim() !== "" && isEmailValid(email) && isPhoneValid(phone);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitting(true);

    const payload = {
      fullName,
      email,
      phone
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbznZ6O77L6r0lLWKkGn_nHBCi_0BOogE75UUjqzL7C2sN8v53u1xE7p_v1yjGiCsxnXjw/exec", {
        method: "POST",
        mode: "no-cors", // Crucial for Google Apps Script redirects
        headers: { 
          "Content-Type": "text/plain" // Prevents CORS preflight
        },
        body: JSON.stringify(payload)
      });
      
      // Optional: Reset form or show success message here
      setOpen(false); 
      alert("Booking successful!");
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setSubmitting(false);
    }
  }


  return (
    <div className="w-full px-5 py-10 flex flex-col items-center justify-center" id="journey">
      <div className="w-full grid grid-cols-3 items-center pr-5">
        <div /> {/* empty spacer */}

        <h1 className="text-3xl font-bold text-[#0b477f] text-center">
          Your Journey Starts Here
        </h1>

        <div className="flex justify-end">
          <PrimaryButton
            text="Apply Now!"
            href="https://forms.gle/zRXAexLH1Z49VVKE8"
            external
            className="h-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 py-10 items-center justify-between w-full md:max-w-[80%] lg:max-w-[70%]">

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
                  disabled={!isFormValid || submitting}
                  style={{ opacity: !isFormValid || submitting ? 0.5 : 1, cursor: (!isFormValid || submitting) ? "not-allowed" : "pointer" }}
                >
                  {submitting ? "Booking..." : "Book Now!"}
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
              onSubmit={handleSubmit}
              autoComplete="off"
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
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    required
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  {email && !isEmailValid(email) && (
                    <span className="text-red-500 text-xs">Enter a valid email address</span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-[#0b477f] font-bold">Phone No.:</p>
                </div>
                <div className="p-3">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border-b-2 border-[#1f609a] underline-offset-4 bg-transparent outline-none"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    pattern="\d{10}"
                  />
                  {phone && !isPhoneValid(phone) && (
                    <span className="text-red-500 text-xs">Enter a valid 10-digit phone number</span>
                  )}
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
