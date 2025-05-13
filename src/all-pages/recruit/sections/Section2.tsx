import Container from "@/shared-components/Container";

const Section2 = () => {
        const paragraph = "旅に出ると、見たことのない景色、聞いたことのない言葉、触れたことのない文化があふれている。\n 知らない世界に足を踏み入れる瞬間、ワクワクしませんか？ \n BonZuttnerは、そんな好奇心と行動力を持つ人を求めています。私たちが目指すのは、難民問題を「社会資産」に変えること。国籍や文化の違いを超え、新しい価値を生み出すこと。英語が話せなくても大丈夫。大切なのは、「知らない世界を知りたい」という純粋な想い。異文化に触れるのが好きな人、海外旅行での出会いを楽しめる人。そんなあなたの感性が、BonZuttnerの未来を創ります。難民だから、外国人だから、文化が違うから。そんな線引きをするのではなく、誰とでもフラットに接し、一緒に未来を創る仲間として向き合える人に出会いたい。 \n さあ、世界をもっと楽しもう。BonZuttnerで、一歩を踏み出そう。"

        return (
                <section className="bg-white">
                        <Container className="py-[50px] lg:py-[100px]">
                                <div className="max-w-3xl mx-auto space-y-8 lg:space-y-10">
                                        <h2 className="font-medium text-xl lg:text-4xl  lg:text-left text-center">世界は広い。だからこそ、もっと飛び込め！！</h2>
                                        <div className="space-y-5 text-xs lg:text-base">
                                                {paragraph.split('\n').map((item, index) =>
                                                        <p key={index} className="font-normal text-base">{item}</p>
                                                )}
                                        </div>
                                </div>
                        </Container>
                </section>

        )

}
export default Section2;

