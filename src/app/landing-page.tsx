"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
//import EditorContent from "@/components/editor/EditorContent";
import CountdownCTA from "@/components/CountdownCTA";
import WarningCard from "@/components/WarningCard";

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
            <CountdownCTA timeLeft={timeLeft} ctaText="" ctaLink="" />
          </div>
        </header>

        {/* Main Content */}
        <main>
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl mb-4 italic">
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
            <p>
              <strong>Ngosha Size</strong> ni Tiba Asili ya Kupaka yenye uwezo
              wa Kurefusha na Kunenepesha Uume kutoka Inch 3.1 mpaka Inch 5.1
              Ndani ya siku 7 Tu…
            </p>

            <p>
              <strong>
                <br />
                <i>NA:</i>
              </strong>
            </p>
            <p>
              …Inaenda kutibu Tatizo la Kibamia (Maumbile madogo) kutoka katika
              Vyanzo Vyote Ikiwemo:
            </p>
            <p>
              <i>
                <strong>
                  ….“Kitambi, Kurithi, Punyeto, Ngiri, Umri & Upungufu wa Homoni
                  (Testosterone)”
                </strong>
              </i>
            </p>
            <p>
              <br />
              Ukweli ni kwamba:
            </p>
            <p>
              Maumbile Madogo <i>(Kibamia)</i> yanaweza kukutolea urijali wako
              mbele ya wanawake kwa kukosa <strong>CONFIDENCE</strong> ya kupiga
              show ya Kibabe itakayomridhisha mwanamke wako Kitandani
            </p>
            <p>Hali ambayo inaweza kukusababishia Matatizo kama:</p>
            <p>
              <i>
                <strong>
                  “Msongo wa Mawazo, Upungufu wa Nguvu za Kiume, Kukosa
                  Kujiamini,Kujitenga, Kukimbiwa na wanawake & Kuogopa kuchekwa”
                </strong>
              </i>
            </p>

            <br />
            <p>
              <strong>
                <i>LAKINI:</i>
              </strong>
            </p>
            <p>Habari njema ni kwamba:</p>
            <p>
              Unaweza Kutokomeza <strong>KIBAMIA</strong> ndani ya siku 7 Tu kwa
              kupaka Dawa hii ya <strong>“Ngosha Size”</strong>
            </p>
            <p>
              …Dawa hii inaenda Kurefusha uume wako hadi inch 6.7…na Kunenepesha
              Hadi inch 3.1 Ndani ya Siku 7-14 Tu
            </p>
            <br />
            <p>Kwa hiyo:</p>
            <p>
              …Utakuwa na Uhakika wa Kupiga show ya kibabe na Kumfikisha
              mwanamke wako Kileleni muda wowote akihitaji.
            </p>
            <p>Hembu fikiria Jinsi utakavyokuwa ukiwa na</p>
            <p>
              <strong>
                <i>…Confidence, Mashine Ndefu, Nene na Imara kama Nyati</i>
              </strong>
            </p>
            <p>
              Hautakuwa na HOFU ya Kuchekwa wala kupiga show Mbovu tena, <br />
              Bali Utakuwa Huru na Mwenye Kujiamini kama Mwanaume rijali
            </p>
            <br />
            <h1 className="text-4xl">
              <strong>
                <i>...Sema Kwaheri...</i>
              </strong>
            </h1>
            <p>
              <strong>
                <i>
                  “Upasuaji, Mazoezi Makali, Mavidonge yenye Kemikali,
                  Supplements za network Marketing, Kibamia Kurudi tena baada ya
                  Muda Mfupi & Kupoteza Pesa bila Tatizo Kuisha”
                </i>
              </strong>
            </p>
            <br />

            <h1 className="text-4xl">
              <strong>
                <i>...Sema Karibu...</i>
              </strong>
            </h1>
            <p>
              <strong>
                <i>
                  “Urijali na Kujiamini, Kukaa Dkk 39 Bila Kumwaga, Mahusiano
                  yenye Amani, Furaha, Mvuto, Heshima & Kutokusalitiwa Milele”
                </i>
              </strong>
            </p>
            <br />
            <p>
              <strong>
                <u>
                  “Zaidi ya Wanaume wa Kitanzania 9,687+ Tayari Wameshapata
                  Matokeo Kupitia Dawa Hii Unayoenda Kuiona Ndani ya Muda Mfupi
                  ujao”
                </u>
              </strong>
            </p>
            <br />
            <p>Huniamini?....</p>
            <p>
              <strong>
                <i>
                  ….Basi Jionee Mwenyewe Jinsi Hawa Wanaume Wenzio Wanavyosema
                  hapa chini….
                </i>
              </strong>
            </p>
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
            <p>
              …Dawa Hii Hairefushi na Kunenepesha UUME Tu…Wanaume Wengi
              Wametumia Dawa Hii Pia Kupona Matatizo Yafuatayo:
            </p>
            <p>
              <strong>
                <i>
                  “Ngiri, Kuwahi kumwaga, Uume kusimama ukiwa legelege, Uume
                  kulala baada ya bao la kwanza, Kushindwa kurudia tendo na Uume
                  kusinyaa na kuwa kama wa mtoto mdogo”
                </i>
              </strong>
            </p>
            <br />
            <p>
              <strong>
                …Je Upo Tayari Kurefusha & Kunenepesha MKONGA Wako Hadi Inch
                6.7?...
              </strong>
            </p>
            <p>
              <strong>…Basi Wahi Nyakua SASAHIVI Dawa Hii Inayoitwa:</strong>
            </p>
            <br />
            <h1 className="text-6xl font-bold text-blue-700">"Ngosha Size"</h1>
            <br />
            <div className="flex justify-center mt-10">
              <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/img/ngoshasize.jpeg"
                  alt="Ngosha Size Results"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <br />
            <p>
              <strong className="text-red-600">“Ngosha Size”</strong> ni Dawa ya
              Asili iliyotengenezwa kwa Mizizi & Mimea Adimu kutoka katika
              Milima ya <strong>“Nyigongo”</strong> Nchini Kongo…
            </p>
            <p>
              …Inachukua Miezi 16 kuchimba,kukausha, Kusaga na Kuchanganya
              Mizizi na Mimea ya Kutengenezea Pamoja na kusafirishwa mpaka
              Tanzania
            </p>
            <br />
            <p>Huo ni sawa na mwaka Mmoja na Miezi 4…</p>
            <br />
            <p>
              <strong>
                <i>NA:</i>
              </strong>
            </p>
            <p>
              <strong>
                <i>….Mpaka sasa zimeshabaki Chupa 50 Tu za Dawa…(LIMITED)...</i>
              </strong>
            </p>
            <p>
              <strong>
                <i>
                  …Je ni Sawa Dawa Hii Ikiuzwa Tshs{" "}
                  <span className="text-red-600">500,000</span>?...
                </i>
              </strong>
            </p>
            <p>
              Nitasema Hapana hata kama Dawa Hii ina Thamani Kubwa zaidi ya
              hiyo…
            </p>
            <p>NA:</p>
            <p>
              …Vipi Kuhusu Tshs <span className="text-red-600">400,000</span>?
            </p>
            <p>
              Hiyo ipo Sawa kabisa ila bado nataka nishuke chini zaidi kwa ajili
              ya wale ambao hawana kazi wala kipato kwa sasa
            </p>
            <p>Kwahiyo:</p>
            <p>…Leo Utaipata “Ngosha Size” Kwa Malipo Kidogo Ya:</p>
            <br />
            <h1 className="text-4xl font-bold text-green-600">
              “Tshs 297,500 Tu”
            </h1>
            <p className="line-through text-gray-500">Tshs 595,000 Tu</p>
          </div>
          {/* Countdown Timer and CTA */}
          <CountdownCTA
            timeLeft={timeLeft}
            ctaText="Bofya Hapa SASAHIVI Kupata Ngosha Size Yako"
            ctaLink="https://api.whatsapp.com/send/?phone=255679509126&text=Habari+Khalfan%2C+Nahitaji+Kupata+Ngosha+Size+SASAHIVI+&type=phone_number&app_absent=0"
          />

          {/* Benefits */}
          <Card className="px-12 py-16 mb-10 bg-white shadow-lg rounded-xl">
            <p className="text-center">
              <strong>
                <i>
                  …Hizi ni Nusu Tu Ya FAIDA Utakazopata Kama Utaanza Kutumia
                  “Ngosha Size” Leo!...
                </i>
              </strong>
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 aspect-square">
                  ✓
                </div>
                <p>
                  Inaenda Kurefusha Uume wako Hadi Inch 5.1 & Kunenepesha Hadi
                  Inch 2.1…Kwahiyo utakuwa na Uhakika wa kumridhisha Mwanamko
                  wako na Hautakuwa na Hofu ya Kusalitiwa Milele
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 aspect-square">
                  ✓
                </div>
                <p>
                  Itakusaidia Kufika Kwenye G-Spot ya mwanamke Yeyote na
                  kumfanya afike kileleni ndani ya Dkk 5 Tu…kwahiyo atakuganda
                  kama ruba
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 aspect-square">
                  ✓
                </div>
                <p>
                  Inaenda Kuufanya Uume wako Usimame Imara kama Msumari wakati
                  wa tendo la ndoa…kwahiyo utaweza kupiga Show za Kibabe tena
                  kwa Style zote bila Mashine kulegea Hovyo
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 aspect-square">
                  ✓
                </div>
                <p>
                  Inaenda Kuboresha Mzunguko wa damu kwenye Misuli ya
                  Uume…kwahiyo Uume wako utakuwa na Nguvu na Imara Mara 10 zaidi
                  ya Ulivyo sasa
                </p>
              </div>
            </div>
            <p className="text-center">
              <strong>
                <i>…Pamoja na FAIDA Zingine Kibao!</i>
              </strong>
            </p>
          </Card>
          <div className="text-xl/9 text-center mt-12 mb-10">
            <p>Sio Hivyo Tu</p>
            <p>
              <strong>
                <i>
                  …Kama utakuwa Miongoni mwa Watu 50 wa kwanza Kulipia “Ngosha
                  Size” Utapata Hizi BONUSES Hapa Chini BURE Kabisa!
                </i>
              </strong>
            </p>
            <br />
            <p>
              <strong>
                <i>
                  <span className="text-red-600">BONASI # 1:</span> Utapata BURE
                  Dawa inayoitwa “Cleanser”...(Thamani yake ni Tshs 155,000)
                </i>
              </strong>
            </p>
            <div className="flex justify-center mt-10">
              <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/img/cleanser.jpg"
                  alt="Ngosha Size Results"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <br />
            <p>
              Hii inaenda kusafisha ndani ya mwili kwenye utumbo mwembamba na
              mpana, Kuondoa sumu na mafuta machafu mwilini…Plus Kuunguza mafuta
              ya Kitambi na Manyama uzembe
            </p>
            <br />
            <p>
              <strong>
                <i>
                  <span className="text-red-600">BONASI # 2:</span> Utapata BURE
                  Dawa inayoitwa “Super Kongwa”...(Thamani yake ni Tshs 255,000)
                </i>
              </strong>
            </p>
            <div className="flex justify-center mt-10">
              <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/img/kongwe.jpg"
                  alt="Ngosha Size Results"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <br />
            <p>
              Hii ni Dawa ya kutibu Ngiri, Vidonda vya tumbo, Bawasili, UTI Sugu
              & Kupata choo kigumu
            </p>
            <br />
            <p>
              <strong>
                <i>
                  <span className="text-red-600">BONASI # 3:</span> Utapata BURE
                  Dawa inayoitwa “Misuli Stabilizer”... (Thamani yake ni Tshs
                  175,000)
                </i>
              </strong>
            </p>
            <div className="flex justify-center mt-10">
              <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/img/misuli.jpg"
                  alt="Ngosha Size Results"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <br />
            <p>
              Hii inaenda kuimarisha na kukomaza misuli ya Uume iliyolegea baada
              ya kuathiriwa na Punyeto….(utakuwa na uwezo wa kupiga show mpaka
              Dkk 47)
            </p>
            <br />
          </div>
          {/* Countdown Timer and CTA */}
          <CountdownCTA
            timeLeft={timeLeft}
            ctaText="Ndio Nataka Kupata Ngosha Size Yangu SASAHIVI"
            ctaLink="https://api.whatsapp.com/send/?phone=255679509126&text=Habari+Khalfan%2C+Nahitaji+Kupata+Ngosha+Size+SASAHIVI+&type=phone_number&app_absent=0"
          />
          <div className="text-xl/9 text-center mt-12 mb-10">
            <p>Subiri Kwanza…</p>
            <p>Bado Kuna Zaidi…</p>
            <p>
              <strong>
                …Kama utakuwa Miongoni mwa watu 25 wa kwanza Kulipia Utapata
                Hizi SPECIAL BONUSES Hapa chini BURE Kabisa:
              </strong>
            </p>
            <br />
            <p>
              <strong>
                <span className="text-red-600">SPECIAL BONASI # 4:</span>{" "}
                Utapata BURE Dawa inayoitwa “Tamba Plus”... (Thamani yake ni
                Tshs 195,000)
              </strong>
            </p>
            <div className="flex justify-center mt-10">
              <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/img/tambaplus.jpeg"
                  alt="Ngosha Size Results"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            <br />
            <p>
              Hii ni kwa ajili ya kurudisha Madini na Virutubisho Vilivyopotea
              Mwilini kwa ajili ya sababu mbali mbali ikiwemo Punyeto!
            </p>
            <br />
            <p>
              <strong>
                <span className="text-red-600">SPECIAL BONASI # 5:</span>{" "}
                Utapata BURE ratiba ya Mpangilio bora wa vyakula…(Wengine huwa
                wanalipia Tshs 130,000)
              </strong>
            </p>
            <p>
              Magonjwa mengi yanayokutesa kwa sasa chanzo chake kikuu ni chakula
              na hii ndio Ratiba bora ya chakula iliyovujishwa na Dr. Sebi
            </p>
            <p>
              Tamba Plus inaenda Kumaliza Milele changamoto yako ndani ya siku 3
              tu hata kama una Miaka 55+ Guaranteed!
            </p>
            <br />
            <p>
              <strong>Jumlisha na:</strong>
            </p>
            <p>
              <strong>
                <span className="text-red-600">SPECIAL BONASI # 6:</span>{" "}
                Nitakupa BURE Program ya “Ngosha Fit” ….(Gharama yake ni Tshs
                350,000)
              </strong>
            </p>
            <p>
              Huu ni mjumuisho wa Program zetu zote za Kurefusha na kunenepesha
              uume pamoja na changamoto zote za Nguvu za Kiume
            </p>
            <br />
            <p>
              <strong>
                <u>Thamani ya BONUSES Zote ni Tshs 1,260,000</u>
              </strong>
            </p>
            <p>
              Hicho ndicho Kila Kitu Unachohitaji ili Kurefusha Uume wako Hadi
              Inch 5.1 na Kunenepesha Hadi 3.1 Ndani ya Siku 7 Zijazo!
            </p>
            <p>Kwa Malipo Kidogo Ya:</p>
            <h1 className="text-4xl font-bold text-green-600">
              “Tshs 297,500 Tu”
            </h1>
            <p className="line-through text-gray-500">Tshs 595,000 Tu</p>
            <br />
            <div className="flex justify-center mt-10">
              <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/img/ngoshasize.jpeg"
                  alt="Ngosha Size Results"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* Countdown Timer and CTA */}
          <CountdownCTA
            timeLeft={timeLeft}
            ctaText="Bofya Hapa SASAHIVI Kupata Ngosha Size Yako"
            ctaLink="https://api.whatsapp.com/send/?phone=255679509126&text=Habari+Khalfan%2C+Nahitaji+Kupata+Ngosha+Size+SASAHIVI+&type=phone_number&app_absent=0"
          />

          <div className="text-xl/9 text-center mt-12 mb-10">
            <p>NA:</p>
            <p>…Huu Ndio Mjumuisho wa Vitu Vyote Unavyoenda Kuvipata Leo…</p>
            <br />
            <p>
              <strong>
                <i>
                  Ngosha Size…(Value=Tshs{" "}
                  <span className="text-red-600">500,000</span>)
                </i>
              </strong>
            </p>
            <p>
              <strong>
                <i>
                  Cleanser…(Value=Tshs{" "}
                  <span className="text-red-600">155,000</span>)
                </i>
              </strong>
            </p>
            <p>
              <strong>
                <i>
                  Super Kongwa…(Value=Tshs{" "}
                  <span className="text-red-600">255,000</span>)
                </i>
              </strong>
            </p>
            <p>
              <strong>
                <i>
                  Misuli stabilizer…(Value=Tshs{" "}
                  <span className="text-red-600">175,000</span>)
                </i>
              </strong>
            </p>
            <p>
              <strong>
                <i>
                  Tamba Plus…(Value=Tshs{" "}
                  <span className="text-red-600">195,000</span>)
                </i>
              </strong>
            </p>
            <p>
              <strong>
                <i>
                  Mpangilio wa Ratiba ya Vyakula…(Value=Tshs{" "}
                  <span className="text-red-600">130,000</span>)
                </i>
              </strong>
            </p>
            <p>
              <strong>
                <i>
                  Ngosha Fit Program…(Value=Tshs{" "}
                  <span className="text-red-600">350,000</span>)
                </i>
              </strong>
            </p>
            <br />
            <p>
              <strong>...Jumla ya Thamani Yote ni Tshs 1,760,000</strong>
            </p>
            <br />
            <p>
              <strong>…Kwa Malipo Kidogo Ya:</strong>
            </p>
            <h1 className="text-4xl font-bold text-green-600">
              “Tshs 297,500 Tu”
            </h1>
            <p className="line-through text-gray-500">Tshs 595,000 Tu</p>
          </div>

          {/* Countdown Timer and CTA */}
          <CountdownCTA
            timeLeft={timeLeft}
            ctaText="Bofya Hapa SASAHIVI Kupata Ngosha Size Yako"
            ctaLink="https://api.whatsapp.com/send/?phone=255679509126&text=Habari+Khalfan%2C+Nahitaji+Kupata+Ngosha+Size+SASAHIVI+&type=phone_number&app_absent=0"
          />

          <div className="text-xl/9 text-center mt-12 mb-10">
            <WarningCard
              title="ONYO!"
              description="Dawa hii sio kwa ajili YA:"
              items={[
                "Wanaume Wanaotaka Matokeo Ndani ya Usiku Mmoja",
                "Wanaume ambao tayari Maumbile yao ni makubwa…(Kuanzia Inch 6.1+)",
                "Wanaume Wasioamini Kwenye Dawa za Asili",
                "Wanaume ambao hawapo tayari kuwekeza Pesa na Muda",
                "Vijana ambao wapo Chini ya Umri wa Miaka 18",
              ]}
            />
            <p>
              Nimeweza Kurefusha Uume wangu Hadi Inch 5.1…na Kunenepesha Hadi
              Inch 2.1 Kirahisi sana{" "}
            </p>
            <br />
            <p>
              <strong>
                <i>LAKINI...</i>
              </strong>
            </p>
            <p>Ukweli ni kwamba:</p>
            <p>
              <strong>
                <i>…Haikuwa Rahisi kama jinsi inavyoonekana…</i>
              </strong>
            </p>
            <p>Kwani</p>
            <p>…Uume wangu ulikuwa na urefu wa Inch 2 Tu yaani Kibamia</p>
            <p>
              Nilikosa <strong>CONFIDENCE</strong> mbele ya wanawake..
            </p>
            <p>…nikawa naogopa hadi kutongoza</p>
            <p>Hali iliyonipelekea mpaka Kupata:</p>
            <p>
              <strong>
                <i>
                  …“Msongo wa Mawazo, Upungufu wa Nguvu za Kiume, Kukosa
                  Kujiamini,Kujitenga Pamoja na Kukimbiwa na wanawake”
                </i>
              </strong>
            </p>
            <p>
              Mpaka pale nilipotumia <strong>“Ngosha Size”</strong>
            </p>
            <p>…Kila kitu kilibadilika ndani ya siku 7 Tu</p>
            <p>Kwani:</p>
            <p>
              <strong>
                <i>
                  …“Uume wangu Uliongezeka Urefu Kutoka Inch 3 Hadi Inch 6.7…na
                  Unene Uliongezeka Hadi Inch 3.1 Ndani ya Siku 7 Tu Kama jinsi
                  unavyoonekana hapa chini
                </i>
              </strong>
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
              <Image
                src="/img/first.jpg"
                alt="Ngosha Size Results"
                width={500}
                height={600}
                className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>

          <div className="text-xl/9 text-center mt-12 mb-10">
            <p>
              <strong>
                <i>NA:</i>
              </strong>
            </p>
            <p>
              …Sasahivi sina hata Chembe ya HOFU ya Kusalitiwa Milele sababu ya
              Mashine na Kupiga show za Kibabe!
            </p>
            <p>Na jinsi ya Kutumia Dawa hii ni Rahisi sana…</p>
            <p>Kwani:</p>
            <p>
              <strong>
                <u>
                  “Unapaka Mara 2 Tu kwa Siku Ndani ya Siku 7 Halafu Kwaheri
                  Kibamia Milele”
                </u>
              </strong>
            </p>
            <p>Wewe Unasubiri Nini?...</p>
            <p>
              …Wahi Nyakuwa <strong>“Ngosha Size”</strong> Leo Kwa Malipo Kidogo
              Ya:
            </p>
            <h1 className="text-4xl font-bold text-green-600">
              “Tshs 297,500 Tu”
            </h1>
            <p className="line-through text-gray-500">Tshs 595,000 Tu</p>
          </div>

          <div className="flex justify-center mt-10">
            <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
              <Image
                src="/img/ngoshasize.jpeg"
                alt="Ngosha Size Results"
                width={500}
                height={500}
                className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>
          {/* Countdown Timer and CTA */}
          <CountdownCTA
            timeLeft={timeLeft}
            ctaText="Bofya Hapa SASAHIVI Kupata Ngosha Size Yako"
            ctaLink="https://api.whatsapp.com/send/?phone=255679509126&text=Habari+Khalfan%2C+Nahitaji+Kupata+Ngosha+Size+SASAHIVI+&type=phone_number&app_absent=0"
          />

          <div className="text-xl/9 text-center mt-12 mb-10">
            <p>
              <strong>
                <i>NA:</i>
              </strong>
            </p>
            <p>
              …ili kukuonesha kwamba Hakuna RISK yoyote upande wako Kama
              Utanunua Dawa Hii Leo…basi nakupa Hii <strong>GUARANTEE</strong>{" "}
              Hapa chini…
            </p>
            <br />
            <p>
              <strong>
                <i>
                  “Ikitokea Uume wako Haujaongezeka Hata Inch MOJA ndani ya siku
                  7 Baada ya Kutumia Ngosha Size…basi nitakurudishia Pesa Zako
                  Bila kukuuliza swali lolote na Dawa unabaki nayo”
                </i>
              </strong>
            </p>
          </div>
          <br />
          <div className="flex justify-center mt-10">
            <div className="transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-lg overflow-hidden">
              <Image
                src="/img/satisfaction.png"
                alt="Ngosha Size Results"
                width={500}
                height={500}
                className="rounded-lg shadow-md hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>
          <div className="text-xl/9 text-center mt-12 mb-10">
            <p>
              <strong>PS: Inavyoonekana Mpaka sasa una Chaguo Mbili Tu…</strong>
            </p>
            <p>
              Aidha ukubali uendelee kudharaulika , Kusalitiwa, Kuachwa na
              kukosa <span className="text-red-600">KUJIAMINI</span> mbele ya
              wanawake au uchukue <strong>“Ngosha Size”</strong> Leo na
              ubadilishe kila Kitu ndani ya siku 7 Tu…
            </p>
            <br />
            <p>
              <strong>…Chaguo ni lako rafiki yangu…</strong>
            </p>
            <br />
            <p>
              <i>Ni mimi mwenye Kujali Urijali wako</i>
            </p>
            <p>
              <i>Ngosha!</i>
            </p>
          </div>

          {/* Countdown Timer and CTA */}
          <CountdownCTA
            timeLeft={timeLeft}
            ctaText="Bofya Hapa SASAHIVI Kupata Ngosha Size Yako"
            ctaLink="https://api.whatsapp.com/send/?phone=255679509126&text=Habari+Khalfan%2C+Nahitaji+Kupata+Ngosha+Size+SASAHIVI+&type=phone_number&app_absent=0"
          />

          <div className="text-xl/9 text-center mt-12 mb-10">
            <p>Hey bado upo?...</p>
            <p>
              Nina uhakika utakuwa unajiuliza maswali haya ili kuwa na UHAKIKA
              Zaidi wa Dawa Hii…
            </p>
            <p>...Si ndio?...</p>
            <br />
            <p>
              <strong>
                Swali: Je Dawa hii inamaliza Kabisa Tatizo au inatibu kwa muda
                tu?...
              </strong>
            </p>
            <p className="text-red-600">
              Jibu: Jibu: Inamaliza kabisa Tatizo kwa 100% na unatumia mara moja
              tu
            </p>
            <p>
              <strong>Swali: Je inachukua Muda gani kupata Matokeo?...</strong>
            </p>
            <p className="text-red-600">
              Jibu: Matokeo utaanza kuyaona ndani ya siku 7-14 Tu{" "}
            </p>
            <p>
              <strong>
                Swali: Je inachukua muda gani kupata Dawa baada ya Kulipia?
              </strong>
            </p>
            <p className="text-red-600">
              Jibu: kama upo Dar Es Saalam unapata dawa yako ndani ya masaa 6 tu
              baada ya kulipia…na… kama upo mkoani unapata ndani ya masaa 24
              kwasababu tunazituma kwa basi{" "}
            </p>
            <p>
              <strong>
                Swali: Je Dawa hii ni ya Hospitali au Kienyeji (Mitishamba)?...
              </strong>
            </p>
            <p className="text-red-600">
              Jibu: Dawa ni ya Mitishamba na imepata vibali vyote kutoka Mamlaka
              ya Tiba Asili na Tiba Mbadala{" "}
            </p>
            <p>
              <strong>
                Swali: Je naruhusiwa kushiriki tendo hata nikiwa kwenye dozi au
                Mpaka nimalize dozi?...
              </strong>
            </p>
            <p className="text-red-600">
              Jibu: Ndio Unaruhusiwa kushiriki tendo hata ukiwa kwenye Dozi{" "}
            </p>
            <p>
              <strong>Swali: Je ofisi zenu zipo wapi?....</strong>
            </p>
            <p className="text-red-600">
              Jibu: Ofisi zetu zipo Kinondoni Mwananyamala soko Jipya la Mbweni{" "}
            </p>
          </div>

          {/* Countdown Timer and CTA */}
          <CountdownCTA
            timeLeft={timeLeft}
            ctaText="Bofya Hapa SASAHIVI Kupata Ngosha Size Yako"
            ctaLink="https://api.whatsapp.com/send/?phone=255679509126&text=Habari+Khalfan%2C+Nahitaji+Kupata+Ngosha+Size+SASAHIVI+&type=phone_number&app_absent=0"
          />

          <div className="text-xl/9 text-center mt-12 mb-10">
            <p>
              Bado Huamini kama Dawa Hii Itakusaidia Kupata Size ya MKONGA
              Unayoitaka?...
            </p>
            <p>
              ...basi wasikilize hawa WANAUME Wenzio wanavyosema Hapa chini
              baada ya kuteswa na VIBAMIA Kwa miaka Mingi...
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex justify-center">
              <Image
                src="/img/8.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/9.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/10.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/11.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/12.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/13.jpeg"
                alt="Ngosha Size Results"
                width={300}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Countdown Timer and CTA */}
          <CountdownCTA
            timeLeft={timeLeft}
            ctaText="Bofya Hapa SASAHIVI Kupata Ngosha Size Yako"
            ctaLink="https://api.whatsapp.com/send/?phone=255679509126&text=Habari+Khalfan%2C+Nahitaji+Kupata+Ngosha+Size+SASAHIVI+&type=phone_number&app_absent=0"
          />

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
          <p>© {new Date().getFullYear()} Ngosha Herbs. All rights reserved.</p>
          <p className="mt-2">
            Matokeo yanaweza kutofautiana kati ya mtu na mtu.
          </p>
        </footer>
      </div>
    </div>
  );
}
