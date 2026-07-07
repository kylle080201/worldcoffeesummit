"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";const areasOfInterestOptions = [
  "Agriculture",
  "Apparel",
  "Packaging",
  "Metals",
  "Energy",
];

const inputClassName =
  "block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-lime-700 focus:ring-lime-700";

export default function NewsroomSubscribeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [areasOfInterest, setAreasOfInterest] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const toggleArea = (area: string) => {
    setAreasOfInterest((current) =>
      current.includes(area)
        ? current.filter((item) => item !== area)
        : [...current, area]
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (areasOfInterest.length === 0) {
      const message = "Please select at least one area of interest.";
      setError(message);
      toast.error(message);
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/wca-network", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          areasOfInterest,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message ?? "Unable to submit subscription.");
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setCompany("");
      setAreasOfInterest([]);
      toast.success("Thank you. You've now been added to our network.");
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit subscription.";
      setError(message);
      toast.error(message);
    } finally {      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="join-our-network"
      className="w-full scroll-mt-24 bg-gray-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join our network
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-900 sm:text-xl">
              Subscribe for news, analysis and opportunities to connect –
              delivered straight to your inbox.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  First name*
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className={inputClassName}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Last name*
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Email address*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputClassName}
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Company*
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className={inputClassName}
                />
              </div>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-medium text-gray-900">
                Areas of interest*
              </legend>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {areasOfInterestOptions.map((area) => (
                  <label
                    key={area}
                    className="inline-flex items-center gap-2 text-sm text-gray-900"
                  >
                    <input
                      type="checkbox"
                      checked={areasOfInterest.includes(area)}
                      onChange={() => toggleArea(area)}
                      className="h-4 w-4 rounded border-gray-300 text-lime-700 focus:ring-lime-700"
                    />
                    {area}
                  </label>
                ))}
              </div>
            </fieldset>

            <p className="text-sm text-gray-700">
              See how we use your personal data by viewing our{" "}
              <Link
                href="https://www.worldcoffeeinnovationsummit.com/privacy-policy"
                target="_blank"
                className="underline text-lime-700"
              >
                privacy statement
              </Link>
              .
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-700 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-lime-900 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
              >
                {isSubmitting && (
                  <ArrowPathIcon
                    className="h-5 w-5 animate-spin"
                    aria-hidden="true"
                  />
                )}
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {error && (
                <p className="text-sm font-medium text-red-600 sm:text-base">
                  {error}
                </p>
              )}            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
