"use client"

import React from 'react';
import { Spinner } from "@nextui-org/react";

type Size = "sm" | "md" | "lg";

const Loading: React.FC<{ size?: Size, className?: string }> = ({ size, className }) => {
    return (
        <div className={`w-full h-screen flex items-center justify-center ${className}`}>
            <Spinner size={size || "md"} label="Loading ..." color="primary" labelColor="primary" />
        </div>
    )
}

export default Loading;