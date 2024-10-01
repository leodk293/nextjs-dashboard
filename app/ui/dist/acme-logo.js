"use strict";
exports.__esModule = true;
var outline_1 = require("@heroicons/react/24/outline");
var fonts_1 = require("./fonts");
function AcmeLogo() {
    return (React.createElement("div", { className: fonts_1.lusitana.className + " flex flex-row items-center leading-none text-white" },
        React.createElement(outline_1.GlobeAltIcon, { className: "h-12 w-12 rotate-[15deg]" }),
        React.createElement("p", { className: "text-[44px]" }, "Acme")));
}
exports["default"] = AcmeLogo;
