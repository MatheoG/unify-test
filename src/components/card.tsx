import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";

type CardProps = {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
};

export function Card({ title, children, isOpen }: CardProps) {
    const [isOpenState, setIsOpenState] = React.useState(isOpen ?? true);
    return (
        <div className={`border rounded-xl px-3 py-2 border-gray-200 shadow-sm`}>
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-gray-700">{title}</h2>
                <div className="flex items-center space-x-2">
                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer hover:bg-gray-100 rounded-full p-2" onClick={() => setIsOpenState(!isOpenState)}>
                        <ChevronUpIcon className={`h-5 w-5 transition-transform duration-200 ${isOpenState ? "transform rotate-180" : ""}`} />
                    </button>
                </div>
            </div>
            {isOpenState && (
                <div className="my-2">
                    {children}
                </div>
            )}
        </div>
    );
}
