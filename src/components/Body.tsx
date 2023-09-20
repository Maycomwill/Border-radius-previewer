import { useState } from "react";
import { Input } from "./Input";
import * as Tooltip from "@radix-ui/react-tooltip";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import colors from "tailwindcss/colors";
import clsx from "clsx";

interface BodyProps {
  className: string;
}
export function Body({ className }: BodyProps) {
  const [topLeftRadius, setTopLeftRadius] = useState("0");
  const [bottomLeftRadius, setBottomLeftRadius] = useState("0");
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
    setBottomLeftRadius(e.target.value);
    setTopRightRadius(e.target.value);
    setBottomRightRadius(e.target.value);
  }

  return (
    <div className="w-full flex flex-1 items-start mt-10 md:mt-0 md:items-center md:justify-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 overflow-hidden">
        <div className="w-full flex gap-3 justify-center items-center">
          <div className="flex flex-col justify-between items-end w-[25%] h-[150px] md:w-[25%] md:h-[450px]">
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
                onChange={(e) => setBottomLeftRadius(e.target.value)}
                type={"text"}
              />
            </div>
          </div>
          <div
            className="w-[150px] h-[150px] md:w-[450px] md:h-[450px] bg-gray-200 shadow-md"
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
                      className="w-full text-center font-bold text-gray-900 px-2 cursor-pointer transition-colors duration-200"
                      onClick={handleCopiedToClipboard}
                    >
                      border-radius:{"\n"} {topLeftRadius}% {topRightRadius}%{" "}
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
          <div className="flex flex-col justify-between items-start w-[25%] h-[150px] md:w-[25%] md:h-[450px]">
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
        <div className="md:w-[50%] w-full pt-10 h-full text-gray-100">
          <div className="bg-slate-800 rounded-lg px-4 py-2 w-full flex flex-col justify-center items-center">
            <div className="flex w-full items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="w-3 h-3 bg-[#ED6A5E] hover:bg-[#f07b70] rounded-full"
                />
                <button
                  type="button"
                  className="w-3 h-3 bg-[#F4BF4F] hover:bg-[#f4d591] rounded-full"
                />
                <button
                  type="button"
                  className="w-3 h-3 bg-[#61C554] hover:bg-[#76e668] rounded-full"
                />
              </div>
              <div>
                <button onClick={handleCopiedToClipboard}>
                  <Tooltip.Provider delayDuration={500} skipDelayDuration={500}>
                    <Tooltip.Root>
                      <Tooltip.Trigger>
                        <IconContext.Provider
                          value={{
                            color: "#acf100",
                          }}
                        >
                          <div>
                            <BsFillClipboardCheckFill size={20} />
                          </div>
                        </IconContext.Provider>
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
                </button>
              </div>
            </div>
            <div className="w-full">
              <code className="h-full">
                <span className="text-yellow-500">.container</span>{" "}
                <span className="text-teal-400">&#123;</span>
                <br></br>
                <span className="pl-4">
                  <span className="text-teal-400">border-radius:</span>{" "}
                  <span className="text-yellow-500">
                    {topLeftRadius}% {topRightRadius}% {bottomRightRadius}%{" "}
                    {bottomLeftRadius}%<span className="text-teal-400">;</span>
                  </span>
                </span>
                <br></br>
                <span className="text-teal-400">&#125;</span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
