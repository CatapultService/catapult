"use client";
import React, { useEffect, useRef } from "react";

export default function Performance() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
      "Enterprise Data Cloud ",
      "Catapult  Capability Center",
      `Client Software Landscape`,
    ];
    const textPositions = [
      { x: 35, y: 0 },
      { x: 5, y: -25 },
      { x: -105, y: -25 },
      { x: -270, y: -25 },
      { x: -320, y: 0 },
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
      text.setAttribute("x", (point.x + textPositions[i].x).toString()); // Adjust x position as needed
      text.setAttribute("y", (point.y + textPositions[i].y).toString()); // Adjust y position as needed
      text.setAttribute("font-size", "24"); // Set font size
      text.setAttribute("font-width", "bold");
      text.setAttribute("fill", "black"); // Set text color
      text.textContent = texts[i];
      dotsContainer.appendChild(text);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const animatedDiv = document.querySelector(".animated-div");
      if (animatedDiv) {
        animatedDiv.classList.add("show");
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className=" bg-white px-10 md:px-20 text-[#202020] flex flex-col ">
      <div className="mx-auto max-w-6xl mt-10 mb-28">
        <div className="flex flex-col items-center mt-16 mb-6">
          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl mb-6 font-bold text-[#090E4A] ">
            OUR APPROACH
          </p>
          <p className=" text-base sm:text-lg md:text-xl leading-relaxed mx-auto text-center">
            Catapult combines the tech application eco system of clients with
            it&apos;s proprietary data cloud, Ai co-pilots and catapult
            capability-centres, to drive business outcomes.
          </p>
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
          className="flex justify-center items-center pb-10 pt-28 relative"
        >
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 993 317"
            aria-hidden="true"
            className="w-full h-52 block overflow-visible"
          >
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

          <div className="flex flex-col items-center absolute bottom-12 animated-div">
            <p className="text-center text-xl font-bold">
              A comprehensive approach
              <br />
              <span className="text-sm font-normal">enables</span>
            </p>
            <p className="text-5xl font-bold text-[#090E4A]">20 - 30% </p>
            <p className="text-sm font-normal">Margin Uplift</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}