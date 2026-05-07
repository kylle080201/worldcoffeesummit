"use client"

import React, { useState } from "react";

type StartUpEnquiryData = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  companyWebsite: string;
  country: string;
  workEmail: string;
  companyStage: "Early-stage (pre-seed / seed)" | "Growth-stage" | "";
  briefDescription: string;
};

const initialFormData: StartUpEnquiryData = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  companyName: "",
  companyWebsite: "",
  country: "",
  workEmail: "",
  companyStage: "",
  briefDescription: "",
};

function StartUpEnquiryForm() {
  const [formData, setFormData] = useState<StartUpEnquiryData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/start-up-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const responseJson = await response.json();
        throw new Error(responseJson?.error?.message || "Unable to submit enquiry.");
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (error: any) {
      setErrorMessage(error?.message || "Unable to submit enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="z-40 py-12 bg-white sm:py-20">
        <div className="max-w-screen-md px-4 mx-auto mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Thank you
          </h2>
          <p className="text-lg text-gray-900">
            Thank you — our team will review your application and get back to you shortly.
          </p>
          <p className="mt-4 text-lg text-gray-900">
            If needed, you can also email{" "}
            <a
              href="mailto:info@worldcoffeealliance.com"
              className="text-lime-700 underline"
            >
              info@worldcoffeealliance.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="z-40 py-12 bg-white sm:py-20">
      <div className="max-w-screen-md px-4 mx-auto mb-12">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Start-Up Pass Enquiry
        </h2>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
              <input name="firstName" value={formData.firstName} onChange={onChange} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" required />
            </div>
            <div className="w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
              <input name="lastName" value={formData.lastName} onChange={onChange} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" required />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Job Title</label>
            <input name="jobTitle" value={formData.jobTitle} onChange={onChange} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Company Name</label>
            <input name="companyName" value={formData.companyName} onChange={onChange} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Company Website</label>
            <input type="url" name="companyWebsite" value={formData.companyWebsite} onChange={onChange} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Country</label>
            <input name="country" value={formData.country} onChange={onChange} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Work Email</label>
            <input type="email" name="workEmail" value={formData.workEmail} onChange={onChange} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" required />
          </div>

          <fieldset>
            <legend className="block mb-2 text-sm font-medium text-gray-900">Company Stage</legend>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-900">
                <input
                  type="radio"
                  name="companyStage"
                  value="Early-stage (pre-seed / seed)"
                  checked={formData.companyStage === "Early-stage (pre-seed / seed)"}
                  onChange={onChange}
                  required
                />
                Early-stage (pre-seed / seed)
              </label>
              <label className="flex items-center gap-2 text-gray-900">
                <input
                  type="radio"
                  name="companyStage"
                  value="Growth-stage"
                  checked={formData.companyStage === "Growth-stage"}
                  onChange={onChange}
                  required
                />
                Growth-stage
              </label>
            </div>
          </fieldset>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Brief description (optional)
            </label>
            <textarea
              name="briefDescription"
              value={formData.briefDescription}
              onChange={onChange}
              rows={4}
              className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          {errorMessage ? <p className="text-sm text-red-700">{errorMessage}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-lime-700 hover:bg-lime-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default StartUpEnquiryForm;
