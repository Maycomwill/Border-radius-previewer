import React, { useState } from "react";
import { Input } from "./Input";
import * as Tooltip from "@radix-ui/react-tooltip";

export function Body() {
  const [radius, setRadius] = useState("");
  const [topLeftRadius, setTopLeftRadius] = useState("0");
  const [bottomLeftRadius, setBottompLeftRadius] = useState("0");
  const [topRightRadius, setTopRightRadius] = useState("0");
  const [bottomRightRadius, setBottomRightRadius] = useState("0");

  function handleCopiedToClipboard() {
    navigator.clipboard.writeText(
      `border-radius: ${topLeftRadius}% ${topRightRadius}% ${bottomRightRadius}% ${bottomLeftRadius}%;`
    );
  }

  function handleBorderSet(e: any) {
    e.preventDefault();
    setTopLeftRadius(e.target.value);
    setBottompLeftRadius(e.target.value);
    setTopRightRadius(e.target.value);
    setBottomRightRadius(e.target.value);
  }

  return (
    <div className="w-full ">
      <div className="w-full flex flex-col items-center justify-center gap-12 px-4">
        <div className="w-full px-3 flex gap-3 justify-center items-center">
          <div className="flex flex-col justify-between items-end w-[25%] h-[450px]">
            <div className="">
              <Input
                autoComplete="false"
                placeholder="Ex: 2"
                value={topLeftRadius}
                onChange={handleBorderSet}
                type={"text"}
              />
            </div>
            <div className="">
              <Input
                autoComplete="false"
                placeholder="Ex: 2"
                value={bottomLeftRadius}
                onChange={(e) => setBottompLeftRadius(e.target.value)}
                type={"text"}
              />
            </div>
          </div>
          <div
            className="w-[450px] h-[450px] bg-gray-200 shadow-md"
            style={{
              borderRadius: `${topLeftRadius}% ${topRightRadius}% ${bottomRightRadius}% ${bottomLeftRadius}%`,
            }}
          >
            <div className="w-full h-full flex justify-center items-center">
              <Tooltip.Provider delayDuration={500} skipDelayDuration={500}>
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <span
                      id="code"
                      placeholder="Code"
                      className="w-full text-center font-bold text-gray-900 px-2 cursor-pointer transition-colors duration-200"
                      onClick={handleCopiedToClipboard}
                    >
                      border-radius: {topLeftRadius}% {topRightRadius}%{" "}
                      {bottomRightRadius}% {bottomLeftRadius}%;
                    </span>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content side="top" align="center">
                      <span className="text-xsm text-gray-100 bg-gray-900 px-2 py-1 rounded-md">
                        Clique para copiar
                      </span>
                      <Tooltip.Arrow fill="#212121" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start w-[25%] h-[450px]">
            <div className="">
              <Input
                autoComplete="false"
                placeholder="Ex: 2"
                value={topRightRadius}
                onChange={(e) => setTopRightRadius(e.target.value)}
                type={"text"}
              />
            </div>
            <div className="">
              <Input
                autoComplete="false"
                placeholder="Ex: 2"
                value={bottomRightRadius}
                onChange={(e) => setBottomRightRadius(e.target.value)}
                type={"text"}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-md">{radius}</h1>
        </div>
      </div>
    </div>
  );
}
