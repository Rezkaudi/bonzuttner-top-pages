import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-[650px] bg-[url('/images/427360.png')] overflow-hidden" >
            <div className="relative w-[340px] lg:w-[950px] h-[300px] lg:h-[570px] ml-auto">
                <Image src={"/images/group.png"} alt="groub" fill className=" z-10 object-contain" />
                <div className="w-full h-full absolute right-[40px] top-[40px] -z-0 bg-[#F1F1F1]"></div>
            </div>

            <p className="font-normal text-[20px] lg:text-2xl absolute top-[246px] lg:top-[155px] -rotate-6 left-[24px] lg:left-[200px] text-[#252D3E] z-20">The Makers of Tomorrow: <br /> Transforming Challenges into Social Assets.</p>
            <p className="font-normal text-[24px] lg:text-4xl bg-white p-2 absolute top-[350px] lg:top-[255px] left-[24px] lg:left-[200px] text-[#252D3E] z-20">未来をつくる、</p>
            <p className="font-normal text-[24px] lg:text-4xl bg-white p-2 absolute top-[405px] lg:top-[335px] left-[24px] lg:left-[200px] text-[#252D3E] z-20">新しい社会の担い手たち</p>
            <p className="font-normal text-[14px] lg:text-2xl bg-white absolute top-[470px] lg:top-[421px] left-[24px] lg:left-[200px] text-[#252D3E] z-20">BonZuttnerは、避難民の持つ多様性や経験が社会をより豊かにし、</p>
            <p className="font-normal text-[14px] lg:text-2xl bg-white  absolute top-[550px] lg:top-[466px] left-[24px] lg:left-[200px] text-[#252D3E] z-20">人々の「可能性を育む」ビジネスを通して、グローバルな社会課題に取り組みます。</p>


        </section>
    )
};

export default Hero;
