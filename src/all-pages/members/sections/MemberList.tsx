import Container from "@/shared-components/Container";
import MemberCard from "./components/MemberCard";

// data
import membersData from "../data/members.json"

const MemberList = () => {
    return (
        <section>
            <Container className="py-[30px] lg:py-24">
                <div className=" flex items-start justify-center flex-wrap gap-[10px] lg:gap-[30px] w-full">
                    {membersData?.map(item =>
                        <MemberCard key={item.id} data={item} />
                    )}
                </div>
            </Container>
        </section>
    )
};

export default MemberList;
