'use client';

import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import Container from '@/shared-components/Container';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {






  const slides = [
    {
      title: "WORKS",
      client: "学校法人 東京電機大学",
      department: "システムデザイン工学部デザイン工学科様",
      image: "/images/creative/work.png",
    },
    {
      title: "WORKS",
      client: "三郷市少年野球連盟様",
      department: "野球サイト",
      image: "/images/creative/work2.png",
    },
  ];




  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { title, client, department, image } = slides[currentSlide];

  const steps = [
    {
      step: "STEP01",
      title: "ヒアリング・お見積",
      content: `目的と実現方法を明文化します。事業戦略を整理し、Webで解決し得る課題を明確化します。`,
    },
    {
      step: "STEP02",
      title: "戦略設計",
      content: `コンテンツ、デザインの方向性、サイト構成、機能、ワイヤーフレームなど、戦略を実行する骨組みを設計します。`,
    },
    {
      step: "STEP03",
      title: "デザイン・制作",
      content: `見た目を完成させ、戦略や設計で定めた方向性に基づき、デザインの作成を行います。 デザイン完成後、実装を行います。制作工程が完了次第、サイトを一般公開します。`,
    },
    {
      step: "STEP04",
      title: "運用",
      content: `公開後の障害対応は、効果検証や改善施策、追加更新作業、運用担当者へのレクチャーやアドバイス、コンテンツ制作など、効果的な運用などを行わせていただきます。`,
    },
  ]


  const creative = [
    {
      title: '01  WEBサイト制作・運用',
      description: "直感的なデザインと最適なUI/UX設計で、ブランド価値を最大化。SEO対策や多言語対応も考慮し、運用サポートまで一貫対応させていただきます。"
    },
    {
      title: '02  アプリ開発',
      description: "iOS・Android向けアプリの企画・開発から運用まで対応。使いやすさとビジネス課題解決を両立する設計が強みです。"
    },
    {
      title: '03  システム開発',
      description: "業務効率化やDX推進に貢献するカスタムシステム開発。クラウド対応やセキュリティ面も考慮した最適な提案を提供させていただきます。"
    },
    {
      title: '04  翻訳・多言語対応',
      description: "文化的背景を考慮したローカライズ対応。BonZuttnerだからできる機械翻訳＋人のチェックを組み合わせ、自然な表現と正確性を両立しております。"
    },
    {
      title: '05  WEB CREATE',
      description: "企業の個性を引き出し、ターゲットに刺さるブランドアイデンティティやデザインルールを構築。ロゴ、ビジュアル、トーン＆マナー設計までトータルで支援させていただきます。"
    },
    {
      title: '06  WEB CREATE',
      description: "記事、動画、SNSコンテンツ等、企画・制作し、ターゲットの心を動かすストーリーを発信。マーケティング戦略と組み合わせて最大限の効果を発揮させていただきます。"
    },
  ]
  return (
    <section className="relative w-full">

      <section className="relative w-full lg:h-[calc(80vh-90px)] flex">
        {/* Left Content Block with Image & Text */}
        <div className="relative w-full lg:w-3/4 h-[200px] lg:h-80">
          <div className="absolute left-4 top-6 lg:left-28 lg:top-20 z-10">
            <h1 className="text-3xl lg:text-4xl font-medium leading-snug">Creative</h1>
            <p className="text-sm lg:text-base font-normal leading-6 my-2">クリエイティブ</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-[#00A1E980] px-3 py-1 rounded-sm text-white text-xs lg:text-sm font-medium">#WEB制作</span>
              <span className="bg-[#00A1E980] px-3 py-1 rounded-sm text-white text-xs lg:text-sm font-medium">#アプリ開発</span>
              <span className="bg-[#00A1E980] px-3 py-1 rounded-sm text-white text-xs lg:text-sm font-medium">#UI/UX</span>
              <span className="bg-[#00A1E980] px-3 py-1 rounded-sm text-white text-xs lg:text-sm font-medium">#グラフィック</span>
            </div>
          </div>

          {/* Left Decorative Image */}
          <Image
            src="/images/creative/creative-left.svg"
            alt="creative-left"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Decorative Image - Hidden on Mobile */}
        <div className="hidden lg:block absolute bottom-32 right-0 w-[400px] lg:w-[630px] h-80">
          <Image
            src="/images/creative/creative-right.png"
            alt="creative-right"
            fill
            className="object-cover"
          />
        </div>
      </section>


      <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 overflow-hidden">
        {/* Decorative Image - Positioned absolutely on larger screens, inline on small */}
        <div className="relative w-full sm:w-auto mb-8 sm:mb-0 bg-black">
          <div className="absolute right-4 lg:top-4 w-[250px] h-[60px] sm:w-[350px] sm:h-[80px] lg:w-[450px] lg:h-[97px] ">
            <Image
              src="/images/creative/creative.png"
              alt="creative"
              fill
              className="object-contain hidden lg:block"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug max-w-5xl text-center lg:text-left">
          お客様のパートナーとして、
          <br />
          <span className="text-[#00A1E980]">Humor</span>で
          <span className="font-bold text-yellow-300">Humorous</span>
          な体験をお届けします。
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base font-normal mt-8 leading-6 max-w-5xl">
          当社はソーシャルビジネス企業であることから、社会問題の解決を優先的に考えております。
          お客様が抱えている現在のビジネス課題を多角的な視点から解決に導き、本質を見抜いた
          コンサルタント力をCREATIVEな領域で貴社の未来価値を高めます。
          <br className="hidden sm:block" />
          お客様との喜びを共に共有・体験するために、「作って終わり」ではなく、
          この先に待ち受ける困難も共に乗り越えられていける関係性を目指していきます。
        </p>
      </section>


      <section className="relative w-full min-h-screen text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/creative/creative-bg.png"
            alt="creative-bg"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative px-4 sm:px-8 lg:px-28 py-20 text-center  mx-auto">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[34px] font-medium leading-10 mb-6">
            ボンズットナーが解決できること
          </h1>
          <p className="text-sm sm:text-base font-normal leading-6 max-w-3xl mx-auto">
            ボンズットナーの目指すCREATIVEは<br />
            「Future-Driven Creativity」
            <br />
            <br />
            未来の可能性を広げる創造性とビジネスを融合することで、
            <br />
            ユーザーの課題解決に導くことを心がけております。
          </p>

          {/* Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14 text-left">
            {creative.map((item, i) => (
              <div key={i} className="bg-white text-black p-6 rounded-xl shadow-md">
                <h2 className="text-xl sm:text-2xl font-medium text-[#00A1E9B2] mb-4">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative w-full bg-[#00A1E9] py-16 px-4 sm:px-8 lg:px-10">
        <h1 className="text-[32px] sm:text-[36px] lg:text-[40px] text-white font-semibold text-left lg:text-center px-5">
          FLOW
        </h1>

        <div className="flex flex-wrap justify-center gap-2  lg:gap-6 mt-10">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-transparent text-left w-[48%] lg:w-[22%] px-4"
            >
              <h3 className="bg-white text-[16px] sm:text-[20px] font-semibold text-center py-2 sm:py-3 mb-4 rounded">
                {item.step}
              </h3>
              <p className="text-[16px] sm:text-[20px] font-medium text-center text-white mb-3 leading-7">
                {item.title}
              </p>
              <p className="text-[12px] sm:text-base text-white font-normal leading-6 whitespace-pre-line">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="relative w-full bg-[#F5F5F5] py-10">
        <Container className="w-full flex items-center justify-center">
          <div className="bg-white w-full max-w-4xl px-6 sm:px-10 py-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <h1 className="text-[28px] sm:text-[32px]">{title}</h1>
              <div className="flex flex-1 w-full sm:w-auto items-center mt-1 sm:mt-0">
                <hr className="w-[10%] sm:w-10 border-[#00A1E9] ml-4" />
                <hr className="w-f flex-grow border-[#666666] ml-2" />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end mt-4">
              <button onClick={handlePrev}>
                <Image
                  src="/images/creative/arrow-left.svg"
                  alt="arrow-left"
                  className="mr-2"
                  width={30}
                  height={35}
                />
              </button>
              <button onClick={handleNext}>
                <Image
                  src="/images/creative/arrow-right.svg"
                  alt="arrow-right"
                  width={30}
                  height={35}
                />
              </button>
            </div>

            {/* Slide Content */}
            <div className="relative flex flex-col md:flex-row justify-between mt-6 gap-6">
              <p className="text-[18px] sm:text-[20px] font-medium leading-7">
                {client} <br />
                {department}
              </p>

              <div className="relative self-center md:self-start md:top-0 right-0 w-full sm:w-[300px] h-[200px] sm:h-[250px]">
                <Image
                  src={image}
                  alt="Work Image"
                  className="rounded-lg object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-14 pb-24" id="contact">
        <Container className="w-full flex items-center justify-center">
          <h1 className="text-[32px] font-medium leading-10 mb-6">
            OTHER CONTENTS
          </h1>
          <div className="w-full max-w-4xl gap-5 flex flex-1 sm:items-center items-start justify-between rounded-3xl flex-col sm:flex-row mb-20">
            <div className="sm:w-2/5 w-full">
              <div className="flex">
                <hr className="w-[10%] border-[#00A1E9] mr-4"></hr>
                <hr className="w-[85%] border-[#666666]"></hr>
              </div>
              <Link href={"/"} className="flex mt-4 justify-between sm:justify-end">
                <span className="w-full text-left text-[20px] font-medium leading-7 ml-[15%]">
                  Product Development
                </span>
                <Image
                  src="/images/creative/arrow-right.svg"
                  alt="arrow.right"
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
              <Link href={"/"} className="flex mt-4 justify-between sm:justify-end">
                <span className="w-full text-left text-[20px] font-medium leading-7 ml-[15%]">
                  Hands-on Support
                </span>
                <Image
                  src="/images/creative/arrow-right.svg"
                  alt="arrow.right"
                  width={23}
                  height={23}
                />
              </Link>
            </div>
          </div>

          <div className="bg-[#F5F5F5] w-full max-w-4xl lg:px-32 py-14 flex items-center justify-between rounded-3xl flex-col lg:flex-row gap-y-3">
            <div className=" space-y-3 lg:space-y-1">
              <h2 className="font-normal text-xl lg:text-4xl text-center lg:text-left">CONTACT</h2>
              <p className="font-normal text-xs lg:text-base">お気軽にお問い合わせください</p>
            </div>
            <Button as={Link} href="/contact" className="bg-[#00A1E9] text-white px-10 lg:py-4 mt-5 h-[60px] rounded-[30px]">
              <span className="font-normal text-xs lg:text-base"> フォームでのお問い合わせ</span>
              <Image src={'/images/arrow-left.svg'} alt="" width={10} height={20} />
            </Button>
          </div>

        </Container>
      </section>

    </section>
  );
};

export default Index;
