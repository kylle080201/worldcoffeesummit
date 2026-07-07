"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const networkBenefits = [
  "Stay informed with the latest news, insights and announcements",
  "Expand your network across the global coffee and cocoa value chain and beyond",
  "Gain insights into the trends shaping the future of coffee and cocoa",
  "Build new partnerships and unlock new opportunities",
];

const inputClassName =
  "block w-full border-0 bg-white p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/80";

export default function NewsroomSubscribeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
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
          areasOfInterest: [],
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
      toast.success("Thank you. You've now been added to our network.");
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit subscription.";
      setError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="join-our-network"
      className="w-full scroll-mt-24 bg-lime-700 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">Join Our Network to:</h2>
            <ul className="mt-6 list-disc space-y-4 pl-5 text-base leading-relaxed sm:text-lg">
              {networkBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-white sm:text-base"
                >
                  First Name*
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
                  className="mb-2 block text-sm font-medium text-white sm:text-base"
                >
                  Last Name*
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
                  className="mb-2 block text-sm font-medium text-white sm:text-base"
                >
                  Work Email*
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
                  className="mb-2 block text-sm font-medium text-white sm:text-base"
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
            <div className="pt-2 text-center text-sm text-white sm:text-base">
              <p className="font-bold">Receive updates from us.</p>
              <p className="mt-1">
                Unsubscribe anytime. View our{" "}
                <Link
                  href="https://www.worldcoffeeinnovationsummit.com/privacy-policy"
                  target="_blank"
                  className="underline"
                >
                  Privacy Policy here
                </Link>
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-[10rem] items-center justify-center gap-2 rounded-lg border-2 border-white bg-lime-700 px-8 py-2.5 text-base font-bold text-white transition-colors hover:bg-lime-800 disabled:cursor-not-allowed disabled:opacity-60"
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
                <p className="text-center text-sm font-medium text-white">
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
