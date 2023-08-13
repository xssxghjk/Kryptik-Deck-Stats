import React from "react";

export type ChartContainerProps = {
  title: string;
  children: React.ReactNode;
};

export const ChartContainer = ({ title, children }: ChartContainerProps) => (
  <div>
    <h2 className={"text-center"}>{title}</h2>
    {children}
  </div>
);
