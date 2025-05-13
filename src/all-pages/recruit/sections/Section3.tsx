import Container from "@/shared-components/Container";

const Section3 = () => {
    return (
        <section className="bg-[#F5F5F5] h-[380px] lg:h-[470px]">
            <Container className="py-[50px] lg:py-[80px] w-full">
                <div className="space-y-12 mx-auto text-center">
                    <h2 className="font-medium text-lg lg:text-3xl">募集要項</h2>
                    <p className="font-medium  text-sm lg:text-2xl">現在採用は行っておりません。</p>
                </div>
            </Container>
        </section>
    )
};

export default Section3;
