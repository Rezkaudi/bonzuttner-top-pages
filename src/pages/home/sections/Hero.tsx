import Image from "next/image";

const Hero = () => {
    return (
        <section
            className=" relative w-full h-[calc(100vh-90px)]"
        >
            <Image
                src="/images/bonzuttner-team.png"
                alt="bonzuttner-team"
                className=" object-cover"
                fill />

        </section>
    )
};

export default Hero;
