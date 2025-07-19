import React from "react";

type CardProps = {
    title: string;
    children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
    return (
        <div className="border rounded-xl px-3 py-2 border-gray-200 shadow-sm">
            <div><h2 className="font-bold text-gray-700">{title}</h2></div> 
            <div className="p-2">{children}</div>
        </div>
    );
}
