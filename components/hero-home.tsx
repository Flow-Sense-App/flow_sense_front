"use client";
import { useState, useEffect } from "react";
import PageIllustration from "@/components/page-illustration";


export default function HeroHome() {
  const [language, setLanguage] = useState("es");
  const [translations, setTranslations] = useState<{
    title?: string;
    subtitle?: string;
    explore?: string;
    learnMore?: string;
    loadingFlowSense?: string;
    analyzingData?: string;
    identifyingRiskPatterns?: string;
    detectingCriticalZones?: string;
    generatingRecommendations?: string;
    implementingSolutions?: string;
    monitoringResults?: string;
    reportGenerated?: string;
    deployingPlatform?: string;
    continuousTracking?: string;
  }>({});

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      localStorage.setItem("language", "es");
    }
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${language}/common.json`);
        if (!response.ok) {
          throw new Error(`Error fetching translations: ${response.statusText}`);
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Failed to load translations", error);
      }
    };

    loadTranslations();
  }, [language]);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {translations.title}
              <span style={{ color: "#E67E22" }}>Sense</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {translations.subtitle}
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="http://93.127.213.95:5003"
                  >
                    <span className="relative inline-flex items-center">
                      {translations.explore}
                      <span className="ml-1 tracking-normal text-orange-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  flowsense.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  {translations.loadingFlowSense}
                </span>{" "}
                <br />
                <span className="animate-[code-2_10s_infinite]">
                  {translations.analyzingData}
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  {translations.identifyingRiskPatterns}
                </span>{" "}
                <br />
                <span className="animate-[code-4_10s_infinite]">
                  {translations.detectingCriticalZones}
                </span>
                <br />
                <span className="animate-[code-5_10s_infinite]">
                  {translations.generatingRecommendations}
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  {translations.implementingSolutions}
                </span>
                <br />
                <span className="animate-[code-7_10s_infinite]">
                  {translations.monitoringResults}
                </span>
                <br />
                <br />
                <span className="animate-[code-8_10s_infinite] text-gray-200">
                  {translations.reportGenerated}
                </span>
                <br />
                <span className="animate-[code-9_10s_infinite]">
                  {translations.deployingPlatform}
                </span>
                <br />
                <span className="animate-[code-10_10s_infinite]">
                  {translations.continuousTracking}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}