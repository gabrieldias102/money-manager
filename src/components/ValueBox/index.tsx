import React from "react";

interface ValueBoxProps {
  text: string;
  value: number;
}

export default function ValueBox({ text, value }: ValueBoxProps) {
  return (
    <div className="p-4 shadow-2xl rounded-xl w-1/3 bg-card-foreground">
      <h2 className="font-bold text-primary-foreground text-lg pb-4">{text}</h2>
      <p className="font-bold text-primary-foreground text-3xl pr-8">
        R$: {value}
      </p>
    </div>
  );
}
