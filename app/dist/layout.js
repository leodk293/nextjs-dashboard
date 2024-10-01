"use strict";
exports.__esModule = true;
require("@/app/ui/global.css");
var fonts_1 = require("@/app/ui/fonts");
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: fonts_1.inter.className + " antialiased" }, children)));
}
exports["default"] = RootLayout;
