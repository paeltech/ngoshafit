"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NgoshaFitLanding() {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 14,
    minutes: 38,
    seconds: 22,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Timer complete
                clearInterval(timer);
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            OFA Hii Inaisha Ndani Ya:
          </h1>

          {/* Countdown Timer */}
          <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 md:p-8 mb-10 mx-auto max-w-2xl">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-bold">
                  {timeLeft.days}
                </span>
                <span className="text-sm md:text-base mt-2">days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-bold">
                  {timeLeft.hours}
                </span>
                <span className="text-sm md:text-base mt-2">hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-bold">
                  {timeLeft.minutes}
                </span>
                <span className="text-sm md:text-base mt-2">minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-bold">
                  {timeLeft.seconds}
                </span>
                <span className="text-sm md:text-base mt-2">seconds</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl mb-4">
              Jinsi Nilivyotumia{" "}
              <span className="text-red-600 font-bold">"NGOSHA SIZE"</span>{" "}
              Kurefusha & Kunenepesha Uume Kutoka:
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              "Inch 3.1 Mpaka Inch 6.7 Ndani Ya Siku 7 Tu"
            </h2>

            <p className="text-lg md:text-xl text-gray-700 italic mb-10">
              ...Bila Upasuaji, Mazoezi Magumu Wala Vidonge!
            </p>
          </div>

          {/* Featured Image */}
          <div className="flex justify-center mb-10">
            <div className="relative inline-block">
              <Image
                src="/img/first.jpg"
                alt="Ngosha Size Results"
                width={500}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Description */}
          <Card className="p-6 mb-10 bg-white shadow-lg rounded-xl">
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              <span className="font-bold">Ngosha Size</span> ni Tiba Asili ya
              Kupaka yenye uwezo wa Kurefusha na Kunenepesha Uume kutoka Inch
              3.1 mpaka Inch 5.1 Ndani ya siku 7 Tu...
            </p>

            <p className="text-lg font-semibold text-gray-800 mb-4">NA:</p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <p>
                  Inaenda kutibu Tatizo la Kibamia (Maumbile madogo) kutoka
                  katika Vyanzo Vyote Ikiwemo: <br />
                  <span className="font-bold italic">
                    “Kitambi, Kurithi, Punyeto, Ngiri, Umri & Upungufu wa Homoni
                    (Testosterone)”
                  </span>
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <p>Haina side effects zozote</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <p>Matokeo ni ya kudumu</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <p>Inafanya kazi kwa wanaume wa rika zote</p>
              </div>
            </div>
          </Card>

          {/* Testimonials */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">
              Watu Wanasemaje Kuhusu Ngosha Size
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-5 shadow-md">
                <p className="italic mb-3">
                  "Niliitumia Ngosha Size kwa wiki moja tu na matokeo
                  yalinishangaza. Uume wangu umeongezeka kutoka inch 3.5 mpaka
                  inch 6.2!"
                </p>
                <p className="font-bold">- Juma K., Dar es Salaam</p>
              </Card>

              <Card className="p-5 shadow-md">
                <p className="italic mb-3">
                  "Baada ya kutumia Ngosha Size, mke wangu anafurahia mapenzi
                  zaidi na ananiomba mara kwa mara. Asante sana!"
                </p>
                <p className="font-bold">- Hamisi M., Arusha</p>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <Card className="p-6 mb-10 bg-white shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-4">
              Jinsi Ngosha Size Inavyofanya Kazi:
            </h3>

            <ol className="list-decimal pl-5 space-y-3">
              <li>
                Paka kiasi kidogo cha Ngosha Size kwenye uume wako mara 2 kwa
                siku
              </li>
              <li>Subiri kwa dakika 5-10</li>
              <li>Osha kwa maji ya kawaida</li>
              <li>Rudia kwa siku 7 mfululizo</li>
            </ol>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="font-semibold">
                Muhimu: Matokeo yanaweza kutofautiana kulingana na mtu. Wengi
                huona matokeo katika siku 3-7.
              </p>
            </div>
          </Card>

          {/* Limited Offer */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-10 text-center">
            <h3 className="text-xl font-bold text-red-600 mb-3">
              OFA MAALUM - INAISHA HIVI PUNDE!
            </h3>
            <p className="mb-4">
              Bei ya kawaida: <span className="line-through">Tsh 120,000</span>
            </p>
            <p className="text-2xl font-bold mb-4">
              Bei ya sasa: Tsh 75,000 tu!
            </p>
            <p className="text-sm mb-2">
              * Ofa hii inaisha ukiisha muda hapo juu
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 mb-12">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-xl rounded-full shadow-lg transform transition-transform hover:scale-105">
              PATA NGOSHA SIZE SASA
            </Button>

            <p className="mt-4 text-sm text-gray-600">
              Tunatuma kwa usiri mkubwa. Hakuna mtu atakayejua ulichonunua.
            </p>
          </div>

          {/* Guarantee */}
          <Card className="p-6 mb-10 bg-white shadow-lg rounded-xl text-center">
            <h3 className="text-xl font-bold mb-4">
              Dhamana ya 100% Pesa Zako Zitarudishwa
            </h3>
            <p>
              Kama hukuridhika na matokeo ya Ngosha Size ndani ya siku 30,
              tutakurudishia pesa zako zote bila maswali.
            </p>
          </Card>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Ngosha Fit. All rights reserved.</p>
          <p className="mt-2">
            Matokeo yanaweza kutofautiana kati ya mtu na mtu.
          </p>
        </footer>
      </div>
    </div>
  );
}
