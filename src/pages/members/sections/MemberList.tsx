import Container from "@/shared-components/Container";
import membersData from "../data/members.json"
import MemberCard from "./components/MemberCard";


const MemberList = () => {
    return (
        <section>
            <Container className="py-24">
                <div className=" flex items-start justify-center flex-wrap gap-[30px] w-full">
                    {membersData.map(item =>
                        <MemberCard key={item.id} data={item} />
                    )}
                </div>
            </Container>
        </section>
    )
};

export default MemberList;
