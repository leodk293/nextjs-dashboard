"use strict";
exports.__esModule = true;
var acme_logo_1 = require("@/app/ui/acme-logo");
var outline_1 = require("@heroicons/react/24/outline");
var link_1 = require("next/link");
var home_module_css_1 = require("@/app/ui/home.module.css");
var fonts_1 = require("@/app/ui/fonts");
var image_1 = require("next/image");
function Page() {
    return (React.createElement("main", { className: "flex min-h-screen flex-col p-6" },
        React.createElement("div", { className: "flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52" },
            React.createElement(acme_logo_1["default"], null)),
        React.createElement("div", { className: "mt-4 flex grow flex-col gap-4 md:flex-row" },
            React.createElement("div", { className: "flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20" },
                React.createElement("div", { className: home_module_css_1["default"].shape }),
                React.createElement("p", { className: fonts_1.lusitana.className + " text-xl text-gray-800 md:text-3xl md:leading-normal" },
                    React.createElement("strong", null, "Welcome to Acme."),
                    " This is the example for the",
                    " ",
                    React.createElement("a", { href: "https://nextjs.org/learn/", className: "text-blue-500" }, "Next.js Learn Course"),
                    ", brought to you by Vercel."),
                React.createElement(link_1["default"], { href: "/login", className: "flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base" },
                    React.createElement("span", null, "Log in"),
                    " ",
                    React.createElement(outline_1.ArrowRightIcon, { className: "w-5 md:w-6" }))),
            React.createElement("div", { className: "flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12" },
                React.createElement(image_1["default"], { src: "/hero-desktop.png", width: 1000, height: 760, className: "hidden md:block", alt: "Screenshots of the dashboard project showing desktop version" }),
                React.createElement(image_1["default"], { src: "/hero-mobile.png", width: 560, height: 620, className: "block md:hidden", alt: "Screenshots of the dashboard project showing mobile version" })))));
}
exports["default"] = Page;
