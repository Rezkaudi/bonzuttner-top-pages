"use client"

import React from 'react';
import { Spinner } from "@nextui-org/react";

type Size = "sm" | "md" | "lg";

const Loading: React.FC<{ size?: Size }> = ({ size }) => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Spinner size={size || "md"} label="Loading ..." color="primary" labelColor="primary" />
        </div>
    )
}

export default Loading;