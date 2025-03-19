import React from "react";

const Line = ({ variant }: { variant?: string }) => {
    return (
        <div className="flex items-center justify-between gap-2">
            {variant === "two" && <span className="w-8 h-[1px] bg-[#00A1E9]"></span>}
            <span className="w-full h-[1px] bg-[#666666]"></span>
        </div>
    )
};

export default Line;
