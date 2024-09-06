"use client";
import React, { useEffect, useRef } from "react";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Performance({ page }: { page: string }) {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("curtain-slide");
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current; // Copy ref value to a variable inside the effect

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      // Cleanup logic using currentSection instead of sectionRef.current
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    const svg = svgRef.current as SVGSVGElement | null;
    if (!svg) return; // Add this null check

    const path = svg.querySelector("#mainPath") as SVGPathElement;
    if (!path) return; // Add this null check

    const totalLength = path.getTotalLength();
    const numberOfDots = 5;
    const dotRadius = "15";

    const dotsContainer = svg.querySelector("#dotsContainer");
    if (!dotsContainer) return; // Add this null check
    dotsContainer.innerHTML = "";

    const texts = [
      "Decision Support",
      "Advanced insights",
      "Enterprise  Data-Cloud ",
      "Catapult Capability Center",
      "Client Software Landscape",
    ];
    const textPositions = [
      { x: 35, y: -25 },
      { x: 20, y: -45 },
      { x: -60, y: -60 },
      { x: -150, y: -50 },
      { x: -150, y: -50 },
    ];

    for (let i = 0; i < numberOfDots; i++) {
      const point = path.getPointAtLength(
        (totalLength / (numberOfDots - 1)) * i
      );

      // Create the first dot
      const dot1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      dot1.setAttribute("cx", point.x.toString());
      dot1.setAttribute("cy", point.y.toString());
      dot1.setAttribute("r", dotRadius);
      dot1.setAttribute("fill", "#090E4A");
      dot1.setAttribute("class", "animate-ping-dot");
      dotsContainer.appendChild(dot1);

      // Create the second overlapping dot
      const dot2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      dot2.setAttribute("cx", point.x.toString());
      dot2.setAttribute("cy", point.y.toString());
      dot2.setAttribute("r", "10");
      dot2.setAttribute("fill", "#090E4A");
      // dot2.setAttribute("class", "animate-ping-dot");
      dotsContainer.appendChild(dot2);

      // Add text near each dot
      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", (point.x + textPositions[i].x).toString());
      text.setAttribute("y", (point.y + textPositions[i].y).toString());
      text.setAttribute("font-size", "24");
      text.setAttribute("font-weight", "bold");
      text.setAttribute("fill", "black");

      const words = texts[i].split(" ");
      const firstLine = words.slice(0, 1).join("");
      const secondLine = words.slice(1, 2).join("");
      const thirdLine = words.slice(2).join("");

      const tspan1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "tspan"
      );
      tspan1.setAttribute("x", (point.x + textPositions[i].x).toString());
      tspan1.setAttribute("dy", "0");
      tspan1.textContent = firstLine;

      const tspan2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "tspan"
      );
      tspan2.setAttribute("x", (point.x + textPositions[i].x).toString());
      tspan2.setAttribute("dy", "1.2em");
      tspan2.textContent = secondLine;

      const tspan3 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "tspan"
      );
      tspan3.setAttribute("x", (point.x + textPositions[i].x).toString());
      tspan3.setAttribute("dy", "1.2em");
      tspan3.textContent = thirdLine;

      text.appendChild(tspan1);
      text.appendChild(tspan2);
      text.appendChild(tspan3);

      dotsContainer.appendChild(text);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const animatedDiv = document.querySelector(".animated-div");
      if (animatedDiv) {
        animatedDiv.classList.add("show");
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className=" bg-white px-10 md:px-20 text-[#202020] flex flex-col ">
        <div className="max-w-8xl mt-10">
          <div className="flex flex-col  mt-6 mb-6">
            <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] ">
              Our Approach
            </p>
            <p className=" text-base leading-relaxed text-left">
              Catapult combines the tech application eco system of clients with
              it&apos;s proprietary data cloud, Ai co-pilots and catapult
              capability-centres, to drive business outcomes.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes curtainSlide {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        .curtain-slide {
          animation: curtainSlide 4s ease-out forwards;
        }

        .animated-div {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .animated-div.show {
          opacity: 1;
        }
      `}</style>
      <div
        ref={sectionRef}
        className="hidden sm:flex flex-col justify-center items-center pb-10 pt-28 relative"
      >
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 993 317"
          aria-hidden="true"
          className=" h-32 md:h-40 lg:h-52 block overflow-visible"
        >
          <text
            x="-50"
            y="190"
            fill="black"
            font-size="20"
            transform="rotate(-48 80,90)"
          >
            0 to 3 months
          </text>
          <text
            x="280"
            y="100"
            fill="black"
            font-size="20"
            transform="rotate(-15 180, 50)"
          >
            4 to 6 months
          </text>
          <text
            x="580"
            y="0"
            fill="black"
            font-size="20"
            transform="rotate(15 435, 0)"
          >
            7 to 8 months
          </text>

          <defs>
            <linearGradient
              className="cerosgradient"
              data-cerosgradient="true"
              id="CerosGradient_idf27732cd1"
              gradientUnits="userSpaceOnUse"
              x1="50%"
              y1="100%"
              x2="50%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#d1d1d1"></stop>
              <stop offset="100%" stopColor="#d1d1d1"></stop>
            </linearGradient>
            <linearGradient></linearGradient>
          </defs>
          <path
            id="mainPath"
            fill="none"
            stroke="#E6E6E6"
            strokeWidth="10"
            d="M986.775942,311.999494 C899.343094,127.563727 711.332266,0 493.5,0 C275.784033,0 87.8576696,127.427552 0.364182954,311.704136"
            transform="translate(3 3)"
          ></path>
          <g id="dotsContainer"></g>
        </svg>

        <div className="flex flex-col items-center justify-center absolute sm:bottom-10 md:bottom-8 lg:bottom-12 animated-div">
          <p className="text-center sm:text-sm md:text-base lg:text-xl font-bold w-full">
            A comprehensive approach
            <br />
            <span className="text-xs lg:text-sm font-normal w-full text-center">
              Enables
            </span>
          </p>
          <p className="md:text-3xl lg:text-5xl font-bold text-[#090E4A] w-full text-center">
            20-30%
          </p>
          <p className="text-xs lg:text-sm font-normal w-full text-center">
            Margin uplift
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-col sm:hidden mx-10 my-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-start relative border-l-2 border-[#E6E6E6]">
            {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E6E6E6]"></div> */}
            <div className="flex items-center translate-x-[-9px] pt-6">
              <div className="w-4 h-4 bg-[#090E4A] rounded-full animate-ping-dot "></div>
              <div className="w-3 h-3 bg-[#090E4A] rounded-full translate-x-[-14px]"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  Client Software Landscape
                </h3>
              </div>
            </div>
            <div className="flex items-center mt-6 translate-x-[-9px]">
              <div className="w-4 h-4 bg-[#090E4A] rounded-full animate-ping-dot "></div>
              <div className="w-3 h-3 bg-[#090E4A] rounded-full translate-x-[-14px]"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  Catapult Capability Center
                </h3>
              </div>
            </div>
            <div className="flex items-center mt-6 translate-x-[-9px]">
              <div className="w-4 h-4 bg-[#090E4A] rounded-full animate-ping-dot "></div>
              <div className="w-3 h-3 bg-[#090E4A] rounded-full translate-x-[-14px]"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Enterprise Data-Cloud</h3>
              </div>
            </div>
            <div className="flex items-center mt-6 translate-x-[-9px]">
              <div className="w-4 h-4 bg-[#090E4A] rounded-full animate-ping-dot "></div>
              <div className="w-3 h-3 bg-[#090E4A] rounded-full translate-x-[-14px]"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Advanced insights</h3>
              </div>
            </div>
            <div className="flex items-center mt-6 pb-6 translate-x-[-9px]">
              <div className="w-4 h-4 bg-[#090E4A] rounded-full animate-ping-dot "></div>
              <div className="w-3 h-3 bg-[#090E4A] rounded-full translate-x-[-14px]"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Decision Support</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {page === "homePage" ? (
          <div className="flex justify-center items-center mb-10">
            <Link href="/catapult-advantage" className="">
              <p className=" flex items-center text-lg font-bold hover:text-[#2251FF] hover:underline">
                Learn More
                <span>
                  <ChevronRight className="w-6  text-[#2251FF]" />
                </span>
              </p>
            </Link>
          </div>
        ) : null}
    </>
  );
}
