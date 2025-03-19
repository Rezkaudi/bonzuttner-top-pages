'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import Container from '@/shared-components/Container';
import Image from 'next/image';

const index = () => {
  return (
    <section className="relative w-full">
      <section className="relative w-full h-[calc(80vh-90px)]">
        <div className="relative w-3/4 h-80">
          <div className="absolute lg:left-28 lg:top-14 z-10">
            <h1 className="text-4xl font-medium leading-10">Creative</h1>
            <p className="text-base font-normal leading-10 my-2">
              クリエイティブ
            </p>
            <span className="bg-[#00A1E980] p-2 rounded-sm text-white text-sm font-medium mr-3">
              #WEB制作
            </span>
            <span className="bg-[#00A1E980] p-2 rounded-sm text-white text-sm font-medium mr-3">
              #アプリ開発
            </span>
            <span className="bg-[#00A1E980] p-2 rounded-sm text-white text-sm font-medium mr-3">
              #UI/UX
            </span>
            <span className="bg-[#00A1E980] p-2 rounded-sm text-white text-sm font-medium mr-3">
              #グラフィック
            </span>
          </div>
          <Image
            src="/images/creative/creative-left.svg"
            alt="creative-left"
            className=" object-cover"
            fill
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[630px] h-80">
          <Image
            src="/images/creative/creative-right.png"
            alt="creative-right"
            // className=" object-cover"
            fill
          />
        </div>
      </section>
      <section className="relative lg:pl-28 py-20">
        <div className="absolute top-16 right-10 lg:w-[450px] lg:h-[97px]">
          <Image src="/images/creative/creative.png" alt="creative" fill />
        </div>
        <h1 className="text-3xl font-medium leading-10">
          お客様のパートナーとして、
          <br />
          <span className="font-medium text-[#00A1E980]">Humor</span>で
          <span className="font-bold text-yellow-300">Humorous</span>
          な体験をお届けします。
        </h1>
        <p className="text-base font-normal mt-10">
          当社はソーシャルビジネス企業であることから、社会問題の解決を優先的に考えております。お客様が抱えている現在のビジネス課題
          <br />
          を多角的な視点から解決に導き、本質を見抜いたコンサルタント力をCREATIVEな領域で貴社の未来価値を高めます。
          <br />
          お客様との喜びを共に共有・体験するために、「作って終わり」ではなく、この先に待ち受ける困難も共に乗り越えられていける関係
          <br />
          性を目指していきます。
        </p>
      </section>
      <section className="relative w-full h-[850px] lg:px-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4 text-center z-10 w-full">
          <h1 className="text-[34px] text-white font-medium mb-6 leading-10">
            ボンズットナーが解決できること
          </h1>
          <p className="text-base font-normal text-white leading-6">
            ボンズットナーの目指すCREATIVEは
            <br /> 「テキストが入ります。」。
            <br />
            <br />
            ボンズットナーは難民問題の解決に寄与していることから、
            <br />
            シリア人を筆頭にあらゆる国・地域の人財がユーザーの課題解決に導くことを心がけております。
          </p>
          <div className="flex flex-1 justify-between gap-10 mt-6 flex-wrap lg:px-28">
            <div className="bg-white p-7 rounded-xl text-left lg:w-[29%]">
              <h2 className="text-2xl font-medium text-[#00A1E9B2] mb-6">{`01  WEBサイト制作・運用`}</h2>
              <p className="text-base font-normal leading-6">
                ターゲットユーザーを意識した構成やコンテンツ、システムを設計させていただき、更新しやすいサイトづくりを心がけております。
              </p>
            </div>
            <div className="bg-white p-7 rounded-xl text-left lg:w-[29%]">
              <h2 className="text-2xl font-medium text-[#00A1E9B2] mb-6">{`02  アプリ開発`}</h2>
              <p className="text-base font-normal leading-6">
                ターゲットユーザーを意識した構成やコンテンツ、システムを設計させていただき、更新しやすいサイトづくりを心がけております。
              </p>
            </div>
            <div className="bg-white p-7 rounded-xl text-left lg:w-[29%]">
              <h2 className="text-2xl font-medium text-[#00A1E9B2] mb-6">{`03  システム開発`}</h2>
              <p className="text-base font-normal leading-6">
                ターゲットユーザーを意識した構成やコンテンツ、システムを設計させていただき、更新しやすいサイトづくりを心がけております。
              </p>
            </div>
            <div className="bg-white p-7 rounded-xl text-left lg:w-[29%]">
              <h2 className="text-2xl font-medium text-[#00A1E9B2] mb-6">{`04  翻訳・多言語対応`}</h2>
              <p className="text-base font-normal leading-6">
                ターゲットユーザーを意識した構成やコンテンツ、システムを設計させていただき、更新しやすいサイトづくりを心がけております。
              </p>
            </div>
            <div className="bg-white p-7 rounded-xl text-left lg:w-[29%]">
              <h2 className="text-2xl font-medium text-[#00A1E9B2]">{`05  WEB CREATE`}</h2>
              <p className="text-base font-normal leading-6">
                ターゲットユーザーを意識した構成やコンテンツ、システムを設計させていただき、更新しやすいサイトづくりを心がけております。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-left lg:w-[29%]">
              <h2 className="text-2xl font-medium text-[#00A1E9B2] mb-6">{`06  WEB CREATE`}</h2>
              <p className="text-base font-normal leading-6">
                ターゲットユーザーを意識した構成やコンテンツ、システムを設計させていただき、更新しやすいサイトづくりを心がけております。
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/creative/creative-bg.png"
            alt="creative-bg"
            fill
          />
        </div>
      </section>

      <section className="relative w-full lg:px-28 bg-[#00A1E9] pb-10">
        <h1 className="text-[40px] text-white pt-20">FLOW</h1>
        <div className="flex flex-1 justify-between gap-2.5 mt-6 flex-wrap">
          <div className="text-left lg:w-[22%]">
            <h3 className="bg-white text-[20px] font-medium mb-4 text-center py-3">{`STEP01`}</h3>
            <p className="text-[20px] font-medium text-center mb-3 text-white leading-7">
              ヒアリング・お見積
            </p>
            <p className="text-base text-white font-normal pr-2 leading-6">
              目的と実現方法を明文化します。
              <br />
              事業戦略を整理し、Webで解決し得る課題を明確化します。
            </p>
          </div>
          <div className="text-left lg:w-[22%]">
            <h3 className="bg-white text-[20px] font-medium mb-4 text-center py-3">{`STEP02`}</h3>
            <p className="text-[20px] font-medium text-center mb-3 text-white leading-7">
              戦略設計
            </p>
            <p className="text-base text-white font-normal pr-2 leading-6">
              コンテンツ、デザインの方向性、サイト構成、機能、ワイヤーフレームなど、戦略を実行する骨組みを設計します。
            </p>
          </div>
          <div className="text-left lg:w-[22%]">
            <h3 className="bg-white text-[20px] font-medium mb-4 text-center py-3">{`STEP03`}</h3>
            <p className="text-[20px] font-medium text-center mb-3 text-white leading-7">
              デザイン・制作
            </p>
            <p className="text-base text-white font-normal pr-2 leading-6">
              見た目を完成させ、戦略や設計で定めた方向性に基づき、デザインの作成を行います。
              <br />
              デザイン完成後、実装を行います。制作工程が完了次第、サイトを一般公開します。
            </p>
          </div>
          <div className="text-left lg:w-[22%]">
            <h3 className="bg-white text-[20px] font-medium mb-4 text-center py-3">{`STEP04`}</h3>
            <p className="text-[20px] font-medium text-center mb-3 text-white leading-7">
              運用
            </p>
            <p className="text-base text-white font-normal pr-2 leading-6">
              公開後の障害対応は、効果検証や改善施策、追加更新作業、運用担当者へのレクチャーやアドバイス、コンテンツ制作など、効果的な運用などを行わせていただきます。
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#F5F5F5] py-10">
        <Container className="w-full flex items-center justify-center">
          <div className="bg-white w-full max-w-4xl px-14 py-10 lg:h-[450px]">
            <div className="flex sm:items-center items-start justify-start flex-col sm:flex-row gap-y-3">
              <h1 className="text-[32px]">WORKS</h1>
              <hr className="w-[10%] border-[#00A1E9] ml-4"></hr>
              <hr className="w-[80%] border-[#666666] ml-2"></hr>
            </div>
            <div className="flex justify-end">
              <Image
                src="/images/creative/arrow-left.svg"
                alt="arrow-left"
                className="mr-2"
                width={30}
                height={35}
              />
              <Image
                src="/images/creative/arrow-right.svg"
                alt="arrow.right"
                width={30}
                height={35}
              />
            </div>
            <div className="relative w-full flex flex-1 justify-between">
              <p className="text-[20px] font-medium leading-7 pt-20">
                学校法人 東京電機大学 <br />
                システムデザイン工学部デザイン工学科様
              </p>
              <div className="absolute top-0 right-10 lg:w-[350px] lg:h-[260px] md:w-[200px] md:h-[150px]">
                <Image
                  src="/images/creative/work.png"
                  alt="arrow.right"
                  className="relative md-relative"
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
          <div className="w-full max-w-4xl flex flex-1 sm:items-center items-start justify-between rounded-3xl flex-col sm:flex-row mb-20">
            <div className="w-2/5">
              <div className="flex">
                <hr className="w-[20%] border-[#00A1E9] mr-4"></hr>
                <hr className="w-[75%] border-[#666666]"></hr>
              </div>
              <div className="flex mt-4 justify-end">
                <span className="w-full text-center text-[20px] font-medium leading-7">
                  Artificial Intelligence
                </span>
                <Image
                  src="/images/creative/arrow-right.svg"
                  alt="arrow.right"
                  width={23}
                  height={23}
                />
              </div>
            </div>
            <div className="w-2/5">
              <div className="flex">
                <hr className="w-[20%] border-[#00A1E9] mr-4"></hr>
                <hr className="w-[75%] border-[#666666]"></hr>
              </div>
              <div className="flex mt-4 justify-end">
                <span className="w-full text-center text-[20px] font-medium leading-7">
                  Internet of Things
                </span>
                <Image
                  src="/images/creative/arrow-right.svg"
                  alt="arrow.right"
                  width={23}
                  height={23}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#F5F5F5] w-full max-w-4xl p-14 flex sm:items-center items-start justify-between rounded-3xl flex-col sm:flex-row gap-y-3">
            <div className="space-y-1">
              <h2 className="font-normal text-4xl">CONTACT</h2>
              <p className="font-normal text-base">
                お気軽にお問い合わせください
              </p>
            </div>
            <Button className="bg-[#00A1E9] text-white">
              フォームでのお問い合わせ &#8250;
            </Button>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default index;
