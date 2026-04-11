"use client";

import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import BookingBanner from "../components/BookingBanner";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <Hero />

      {/* STATS */}
      <div className="section">
        <StatsBar />
      </div>

      {/* SERVICES */}
      <div className="section section-light">
        <Services />
      </div>

      {/* HOW IT WORKS */}
      <div className="section">
        <HowItWorks />
      </div>

      {/* DOCTORS */}
      <div className="section section-light">
        <Doctors />
      </div>

      {/* TESTIMONIALS */}
      <div className="section">
        <Testimonials />
      </div>

      {/* CTA */}
      <div className="section section-banner">
        <BookingBanner />
      </div>

    </div>
  );
}