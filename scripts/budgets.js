// import React, { useState } from "https://cdn.skypack.dev/react";

document.addEventListener("DOMContentLoaded", () => {
  const minimize = document.querySelector("#minimize");
  const anchors = document.querySelectorAll("#overview, #transactions, #budgets, #pots, #recurring-bills");
  minimize.addEventListener("click", () => {
    minimize.style.pointerEvents = "none";
    setTimeout(() => {
      minimize.style.pointerEvents = "auto";
    }, 300);

    // anchor
    anchors.forEach((anchor) => {
      anchor.classList.toggle("xl:w-fit");
    });

    // minimize button
    const minimizeSvg = minimize.querySelector("svg");
    minimizeSvg.classList.toggle("rotate-180");

    // logo letters toggle
    const letters = document.querySelectorAll("#logo-letter");
    letters[0].classList.toggle("fill-[#201F24]");
    letters[0].classList.toggle("scale-200");
    letters[0].classList.toggle("translate-y-[-10px]");
    if (letters[0].hasAttribute("stroke")) {
      letters[0].removeAttribute("stroke");
      letters[0].removeAttribute("stroke-width");
    } else {
      letters[0].setAttribute("stroke", "white");
      letters[0].setAttribute("stroke-width", "0.5px");
    }
    letters.forEach((letter, index) => {
      if (index !== 0) {
        setTimeout(() => {
          letter.classList.toggle("hidden");
        }, index * 50);
      }
    });

    // nav toggle
    const nav = document.querySelector("nav");
    nav.classList.toggle("xl:w-[min(20.83%,300px)]");
    nav.classList.toggle("xl:w-[85px]");
    nav.classList.add("xl:pr-[4px]");
    nav.classList.remove("xl:pr-[24px]");

    if (!nav.classList.contains("xl:w-[85px]")) {
      setTimeout(() => {
        nav.classList.remove("xl:pr-[4px]");
        nav.classList.add("xl:pr-[24px]");
      }, 20);
    }

    // p elements toggle
    const navP = nav.querySelectorAll("p");
    if (nav.classList.contains("xl:w-[85px]")) {
      navP.forEach((p) => p.classList.add("xl:hidden"));
    } else {
      setTimeout(() => {
        navP.forEach((p, index) => {
          setTimeout(() => {
            p.classList.remove("xl:hidden");
          }, index * 50);
        });
      }, 100);
    }
  });
});

// function qfluxgen() {
//   const [val, setval] = useState("");

//   const genflux = () => {
//     const flux = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
// dauwigduawgidiugawduguiaowgdogiawgdgoagwdgawbcdgaygwvgyubgyabyg
// dauwigduawgidiugawduguiaowgdogiawgdgoagwdgawbcdgaygwvgyubgyabyg
// dauwigduawgidiugawduguiaowgdogiawgdgoagwdgawbcdgaygwvgyubgyabyg
//     const flux2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// dauwigduawgidiugawduguiaowgdogiawgdgoagwdgawbcdgaygwvgyubgyabyg
//     const randflux = flux[Math.floor(Math.random() * flux.length)];
//     const value = Math.random() * 42 * Math.sin(Math.PI / 2);
//     setval(`${randflux}-${value.toFixed(3)}-quantum`);
//   };

//   return (
//     <div>
//       <button onClick={genflux}>generattttttttte baby</button>
//       {val && <p>{val}</p>}
//     </div>
//   );
// }

// export default qfluxgen;

const budgetsDiv = document.querySelector("#budgets");
const svgE = budgetsDiv.querySelector("svg");

const rect = svgE.getBoundingClientRect();
const distance = rect.left;

console.log(distance);
console.log(rect);
