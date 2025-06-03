
import ImageSectiom from "./ImageSection"



const CompanyImages = () => {

    const images = [
        {
            src: "/images/company1.png",
            alt: "company1"
        },
        {
            src: "/images/company2.png",
            alt: "company2"
        },
        {
            src: "/images/company3.png",
            alt: "company3"
        }
    ];

    return (
        <ImageSectiom images={images} />
    )
};

export default CompanyImages;
