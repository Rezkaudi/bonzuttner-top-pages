'use client';

import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import Container from '@/shared-components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface Slide {
  title: string;
  client: string;
  department: string;
  image: string;
}

interface Step {
  step: string;
  title: string;
  content: string;
}

interface CreativeService {
  title: string;
  description: string;
}

const Index = () => {
  const t = useTranslations('creative');

  const slides: Slide[] = [
    {
      title: t('works.slide1.title'),
      client: t('works.slide1.client'),
      department: t('works.slide1.department'),
      image: "/images/creative/work.png",
    },
    {
      title: t('works.slide2.title'),
      client: t('works.slide2.client'),
      department: t('works.slide2.department'),
      image: "/images/creative/work2.png",
    },
  ];

  const steps: Step[] = [
    {
      step: t('flow.steps.step1.step'),
      title: t('flow.steps.step1.title'),
      content: t('flow.steps.step1.content'),
    },
    {
      step: t('flow.steps.step2.step'),
      title: t('flow.steps.step2.title'),
      content: t('flow.steps.step2.content'),
    },
    {
      step: t('flow.steps.step3.step'),
      title: t('flow.steps.step3.title'),
      content: t('flow.steps.step3.content'),
    },
    {
      step: t('flow.steps.step4.step'),
      title: t('flow.steps.step4.title'),
      content: t('flow.steps.step4.content'),
    },
  ];

  const creativeServices: CreativeService[] = [
    {
      title: t('services.service1.title'),
      description: t('services.service1.description'),
    },
    {
      title: t('services.service2.title'),
      description: t('services.service2.description'),
    },
    {
      title: t('services.service3.title'),
      description: t('services.service3.description'),
    },
    {
      title: t('services.service4.title'),
      description: t('services.service4.description'),
    },
    {
      title: t('services.service5.title'),
      description: t('services.service5.description'),
    },
    {
      title: t('services.service6.title'),
      description: t('services.service6.description'),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { title, client, department, image } = slides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full lg:h-[calc(80vh-90px)] flex">
        <div className="relative w-full lg:w-3/4 h-[200px] lg:h-80">
          <div className="absolute left-4 top-6 lg:left-28 lg:top-20 z-10">
            <h1 className="text-3xl lg:text-4xl font-medium leading-snug">
              {t('hero.title')}
            </h1>
            <p className="text-sm lg:text-base font-normal leading-6 my-2">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {t('hero.tags').split(', ').map((tag, index) => (
                <span key={index} className="bg-[#00A1E980] px-3 py-1 rounded-sm text-white text-xs lg:text-sm font-medium">
                  #{tag.trim()}
                </span>
              ))}
            </div>


          </div>
          <Image
            src="/images/creative/creative-left.svg"
            alt={t('hero.images.leftAlt')}
            fill
            className="object-cover"
          />
        </div>
        <div className="hidden lg:block absolute bottom-32 right-0 w-[400px] lg:w-[630px] h-80">
          <Image
            src="/images/creative/creative-right.png"
            alt={t('hero.images.rightAlt')}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 overflow-hidden">
        <div className="relative w-full sm:w-auto mb-8 sm:mb-0 bg-black">
          <div className="absolute right-4 lg:top-4 w-[250px] h-[60px] sm:w-[350px] sm:h-[80px] lg:w-[450px] lg:h-[97px]">
            <Image
              src="/images/creative/creative.png"
              alt={t('about.imageAlt')}
              fill
              className="object-contain hidden lg:block"
            />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug max-w-5xl text-center lg:text-left">
          {t.rich('about.title', {
            br: () => <br />,
            highlight: (chunks) => <span className="text-[#00A1E980]">{chunks}</span>,
            bold: (chunks) => <span className="font-bold text-yellow-300">{chunks}</span>
          })}
        </h1>
        <p className="text-sm sm:text-base font-normal mt-8 leading-6 max-w-5xl">
          {t('about.description')}
        </p>
      </section>

      {/* Services Section */}
      <section className="relative w-full min-h-screen text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/creative/creative-bg.png"
            alt={t('services.bgAlt')}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative px-4 sm:px-8 lg:px-28 py-20 text-center mx-auto">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[34px] font-medium leading-10 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-sm sm:text-base font-normal leading-6 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14 text-left">
            {creativeServices.map((service, index) => (
              <div key={index} className="bg-white text-black p-6 rounded-xl shadow-md">
                <h2 className="text-xl sm:text-2xl font-medium text-[#00A1E9B2] mb-4">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base leading-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="relative w-full bg-[#00A1E9] py-16 px-4 sm:px-8 lg:px-10">
        <h1 className="text-[32px] sm:text-[36px] lg:text-[40px] text-white font-semibold text-left lg:text-center px-5">
          {t('flow.title')}
        </h1>
        <div className="flex flex-wrap justify-center gap-2 lg:gap-6 mt-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-transparent text-left w-[48%] lg:w-[22%] px-4">
              <h3 className="bg-white text-[16px] sm:text-[20px] font-semibold text-center py-2 sm:py-3 mb-4 rounded">
                {step.step}
              </h3>
              <p className="text-[16px] sm:text-[20px] font-medium text-center text-white mb-3 leading-7">
                {step.title}
              </p>
              <p className="text-[12px] sm:text-base text-white font-normal leading-6 whitespace-pre-line">
                {step.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Works Section */}
      <section className="relative w-full bg-[#F5F5F5] py-10">
        <Container className="w-full flex items-center justify-center">
          <div className="bg-white w-full max-w-4xl px-6 sm:px-10 py-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <h1 className="text-[28px] sm:text-[32px]">{title}</h1>
              <div className="flex flex-1 w-full sm:w-auto items-center mt-1 sm:mt-0">
                <hr className="w-[10%] sm:w-10 border-[#00A1E9] ml-4" />
                <hr className="w-f flex-grow border-[#666666] ml-2" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={handlePrev}>
                <Image
                  src="/images/creative/arrow-left.svg"
                  alt={t('works.prevAlt')}
                  className="mr-2"
                  width={30}
                  height={35}
                />
              </button>
              <button onClick={handleNext}>
                <Image
                  src="/images/creative/arrow-right.svg"
                  alt={t('works.nextAlt')}
                  width={30}
                  height={35}
                />
              </button>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between mt-6 gap-6">
              <p className="text-[18px] sm:text-[20px] font-medium leading-7">
                {client} <br />
                {department}
              </p>
              <div className="relative self-center md:self-start md:top-0 right-0 w-full sm:w-[300px] h-[200px] sm:h-[250px]">
                <Image
                  src={image}
                  alt={t('works.imageAlt')}
                  className="rounded-lg object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="pt-14 pb-24" id="contact">
        <Container className="w-full flex items-center justify-center">
          <h1 className="text-[32px] font-medium leading-10 mb-6">
            {t('otherContents.title')}
          </h1>
          <div className="w-full max-w-4xl gap-5 flex flex-1 sm:items-center items-start justify-between rounded-3xl flex-col sm:flex-row mb-20">
            <div className="sm:w-2/5 w-full">
              <div className="flex">
                <hr className="w-[10%] border-[#00A1E9] mr-4"></hr>
                <hr className="w-[85%] border-[#666666]"></hr>
              </div>
              <Link href="/product-development" className="flex mt-4 justify-between sm:justify-end">
                <span className="w-full text-left text-[20px] font-medium leading-7 ml-[15%]">
                  {t('otherContents.link1')}
                </span>
                <Image
                  src="/images/creative/arrow-right.svg"
                  alt={t('otherContents.arrowAlt')}
                  width={23}
                  height={23}
                />
              </Link>
            </div>
            <div className="sm:w-2/5 w-full">
              <div className="flex">
                <hr className="w-[10%] border-[#00A1E9] mr-4"></hr>
                <hr className="w-[85%] border-[#666666]"></hr>
              </div>
              <Link href="/hands-on-support" className="flex mt-4 justify-between sm:justify-end">
                <span className="w-full text-left text-[20px] font-medium leading-7 ml-[15%]">
                  {t('otherContents.link2')}
                </span>
                <Image
                  src="/images/creative/arrow-right.svg"
                  alt={t('otherContents.arrowAlt')}
                  width={23}
                  height={23}
                />
              </Link>
            </div>
          </div>
          <div className="bg-[#F5F5F5] w-full max-w-4xl lg:px-32 py-14 flex items-center justify-between rounded-3xl flex-col lg:flex-row gap-y-3">
            <div className="space-y-3 lg:space-y-1">
              <h2 className="font-normal text-xl lg:text-4xl text-center lg:text-left">
                {t('contact.title')}
              </h2>
              <p className="font-normal text-xs lg:text-base">
                {t('contact.subtitle')}
              </p>
            </div>
            <Button
              as={Link}
              href="/contact"
              className="bg-[#00A1E9] text-white px-10 lg:py-4 mt-5 h-[60px] rounded-[30px]"
            >
              <span className="font-normal text-xs lg:text-base">
                {t('contact.buttonText')}
              </span>
              <Image
                src="/images/arrow-left.svg"
                alt={t('contact.arrowAlt')}
                width={10}
                height={20}
              />
            </Button>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Index;