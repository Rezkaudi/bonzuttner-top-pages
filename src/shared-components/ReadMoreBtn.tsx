import React from "react";
import { Button } from "@nextui-org/react";

interface ReadMoreBtnProps {
    className?: string
}

const ReadMoreBtn: React.FC<ReadMoreBtnProps> = ({ className = "" }) => {
    return (
        <Button className={`mt-10 bg-[#00A1E9] text-white font-medium text-sm p-3 rounded-lg ${className}`}>
            READ MORE
        </Button>
    )
};

export default ReadMoreBtn;
