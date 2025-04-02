"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EditorContent from "@/components/editor/EditorContent";
import CountdownCTA from "@/components/CountdownCTA";

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
          <div className="mb-10">
            <CountdownCTA
              timeLeft={timeLeft}
              ctaText=""
              ctaLink=""
            />
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
{/* description */}
          <div className="text-xl/9 text-center mb-10">
            <p><strong>Ngosha Size</strong> ni Tiba Asili ya Kupaka yenye uwezo wa Kurefusha na Kunenepesha Uume kutoka Inch 3.1 mpaka Inch 5.1 Ndani ya siku 7 Tu…</p>

            <p><strong><br /><i>NA:</i></strong></p>
            <p>
            …Inaenda kutibu Tatizo la Kibamia (Maumbile madogo) kutoka katika Vyanzo Vyote Ikiwemo:</p>
            <p><i><strong>
            ….“Kitambi, Kurithi, Punyeto, Ngiri, Umri & Upungufu wa Homoni (Testosterone)”</strong></i></p>
            <p><br />Ukweli ni kwamba:</p>
            <p>Maumbile Madogo <i>(Kibamia)</i> yanaweza kukutolea urijali wako mbele ya wanawake kwa kukosa CONFIDENCE ya kupiga show ya Kibabe itakayomridhisha mwanamke wako Kitandani</p>
            <p>
            Hali ambayo inaweza kukusababishia Matatizo kama:</p>
            <p><i><strong>
            “Msongo wa Mawazo, Upungufu wa Nguvu za Kiume, Kukosa Kujiamini,Kujitenga, Kukimbiwa na wanawake & Kuogopa kuchekwa”</strong></i></p>

            <br />
            <p><strong><i>LAKINI:</i></strong></p>
            <p>Habari njema ni kwamba:</p>
            <p>Unaweza Kutokomeza <strong>KIBAMIA</strong> ndani ya siku 7 Tu kwa kupaka Dawa hii ya <strong>“Ngosha Size”</strong></p>
            <p>…Dawa hii inaenda Kurefusha uume wako hadi inch 6.7…na Kunenepesha Hadi inch 3.1 Ndani ya Siku 7-14 Tu</p>
            <br />
            <p>Kwa hiyo:</p>
            <p>…Utakuwa na Uhakika wa Kupiga show ya kibabe na Kumfikisha mwanamke wako Kileleni muda wowote akihitaji.</p>
            <p>Hembu fikiria Jinsi utakavyokuwa ukiwa na</p>
            <p><strong><i>…Confidence, Mashine Ndefu, Nene na Imara kama Nyati</i></strong></p>
            <p>
Hautakuwa na HOFU ya Kuchekwa wala kupiga show Mbovu tena, Bali Utakuwa Huru na Mwenye Kujiamini kama Mwanaume rijali</p>
<br />
<h1 className="text-4xl"><strong><i>...Sema Kwaheri...</i></strong></h1>
<p><strong><i>“Upasuaji, Mazoezi Makali, Mavidonge yenye Kemikali, Supplements za network Marketing, Kibamia Kurudi tena baada ya Muda Mfupi & Kupoteza Pesa bila Tatizo Kuisha”</i></strong></p>
<br />

<h1 className="text-4xl"><strong><i>...Sema Karibu...</i></strong></h1>
<p><strong><i>
“Urijali na Kujiamini, Kukaa Dkk 39 Bila Kumwaga, Mahusiano yenye Amani, Furaha, Mvuto, Heshima & Kutokusalitiwa Milele”</i></strong></p>
<br />
<p><strong><u>“Zaidi ya Wanaume wa Kitanzania 9,687+ Tayari Wameshapata Matokeo Kupitia Dawa Hii Unayoenda Kuiona Ndani ya Muda Mfupi ujao”</u></strong></p>
<br /><p>Huniamini?....</p>
<p><strong><i>
….Basi Jionee Mwenyewe Jinsi Hawa Wanaume Wenzio Wanavyosema hapa chini….</i></strong></p>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex justify-center">
              <Image
                src="/img/2.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/3.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/4.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/5.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/6.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/7.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="text-xl/9 text-center mt-12 mb-10">
            <p>…Dawa Hii Hairefushi na Kunenepesha UUME Tu…Wanaume Wengi Wametumia Dawa Hii Pia Kupona Matatizo Yafuatayo:</p>
            <p><strong><i>“Ngiri, Kuwahi kumwaga, Uume kusimama ukiwa legelege, Uume kulala baada ya bao la kwanza, Kushindwa kurudia tendo na Uume kusinyaa na kuwa kama wa mtoto mdogo”</i></strong></p>
            <br />
            <p><strong>…Je Upo Tayari Kurefusha & Kunenepesha MKONGA Wako Hadi Inch 6.7?...</strong></p>
            <p><strong>
            …Basi Wahi Nyakua SASAHIVI Dawa Hii Inayoitwa:</strong></p>
            <br />
            <h1 className="text-6xl font-bold text-blue-700">"Ngosha Size"</h1>
            <br />
            <div className="flex justify-center">
              <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/img/ngoshasize.jpg"
                  alt="Ngosha Size Results"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <br />
            <p><strong className="text-red-600">“Ngosha Size”</strong> ni Dawa ya Asili iliyotengenezwa kwa Mizizi & Mimea Adimu kutoka katika Milima ya <strong>“Nyigongo”</strong> Nchini Kongo…</p>
            <p>…Inachukua Miezi 16 kuchimba,kukausha, Kusaga na Kuchanganya Mizizi na Mimea ya Kutengenezea Pamoja na kusafirishwa mpaka Tanzania</p>
            <br />
            <p>
            Huo ni sawa na mwaka Mmoja na Miezi 4…</p>
            <br />
            <p><strong><i>NA:</i></strong></p>
            <p><strong><i>
            ….Mpaka sasa zimeshabaki Chupa 50 Tu za Dawa…(LIMITED)...</i></strong></p>
            <p><strong><i>
            …Je ni Sawa Dawa Hii Ikiuzwa Tshs <span className="text-red-600">500,000</span>?...</i></strong></p>
            <p>Nitasema Hapana hata kama Dawa Hii ina Thamani Kubwa zaidi ya hiyo…</p>
            <p>NA:</p>
            <p>…Vipi Kuhusu Tshs <span className="text-red-600">400,000</span>?</p>
            <p>
            Hiyo ipo Sawa kabisa ila bado nataka nishuke chini zaidi kwa ajili ya wale ambao hawana kazi wala kipato kwa sasa</p>
            <p>Kwahiyo:</p>
            <p>…Leo Utaipata “Ngosha Size” Kwa Malipo Kidogo Ya:</p>
            <br />
            <h1 className="text-4xl font-bold text-green-600">“Tshs 245,000 Tu”</h1>
            <p className="line-through text-gray-500">Tshs 500,000 Tu</p>
          </div>
          {/* Countdown Timer and CTA */}
          <CountdownCTA
            timeLeft={timeLeft}
            ctaText="Bofya Hapa SASAHIVI Kupata Ngosha Size Yako"
            ctaLink="https://api.whatsapp.com/send/?phone=255679509126&text=Habari+Khalfan%2C+Nahitaji+Kupata+Ngosha+Size+SASAHIVI+&type=phone_number&app_absent=0"
          />

            {/* Benefits */}
          <Card className="px-12 py-16 mb-10 bg-white shadow-lg rounded-xl">
            <p className="text-center"><strong><i>
            …Hizi ni Nusu Tu Ya FAIDA Utakazopata Kama Utaanza Kutumia “Ngosha Size” Leo!...</i></strong></p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 aspect-square">
                  ✓
                </div>
                <p>Inaenda Kurefusha Uume wako Hadi Inch 5.1 & Kunenepesha Hadi Inch 2.1…Kwahiyo utakuwa na Uhakika wa kumridhisha Mwanamko wako na Hautakuwa na Hofu ya Kusalitiwa Milele</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 aspect-square">
                  ✓
                </div>
                <p>
                Itakusaidia Kufika Kwenye G-Spot ya mwanamke Yeyote na kumfanya afike kileleni ndani ya Dkk 5 Tu…kwahiyo atakuganda kama ruba</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 aspect-square">
                  ✓
                </div>
                <p>Inaenda Kuufanya Uume wako Usimame Imara kama Msumari wakati wa tendo la ndoa…kwahiyo utaweza kupiga Show za Kibabe tena kwa Style zote bila Mashine kulegea Hovyo</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 aspect-square">
                  ✓
                </div>
                <p>Inaenda Kuboresha Mzunguko wa damu kwenye Misuli ya Uume…kwahiyo Uume wako utakuwa na Nguvu na Imara Mara 10 zaidi ya Ulivyo sasa</p>
              </div>
            </div>
            <p className="text-center"><strong><i>
            …Pamoja na FAIDA Zingine Kibao!</i></strong></p>
          </Card>


       

          {/* Content from Editor Section */}
          {/* <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Content from Editor</h2>
              <Link href="/editor">
                <Button variant="outline" size="sm">Edit Content</Button>
              </Link>
            </div>
            <Card className="p-6 bg-white shadow-lg rounded-xl">
              <EditorContent />
            </Card>
          </div> */}
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
