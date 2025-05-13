import Image from "next/image";

const CompanyImages = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <div className="flex items-center justify-center w-full">
                <div className="relative xl:w-1/3 w-2/3 h-[320px]">
                    <Image src="/images/company1.png" className=" object-cover" fill alt="company" />
                </div>
                <div className="relative w-1/3 h-[320px]">
                    <Image src="/images/company2.png" className=" object-cover" fill alt="company" />
                </div>
                <div className="relative w-1/3 h-[320px] xl:block hidden">
                    <Image src="/images/company3.png" className=" object-cover" fill alt="company" />
                </div>
            </div>
        </section>
    )
};

export default CompanyImages;
