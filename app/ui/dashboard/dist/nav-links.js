'use client';
"use strict";
exports.__esModule = true;
var outline_1 = require("@heroicons/react/24/outline");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
var links = [
    { name: "Home", href: "/dashboard", icon: outline_1.HomeIcon },
    {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: outline_1.DocumentDuplicateIcon
    },
    { name: "Customers", href: "/dashboard/customers", icon: outline_1.UserGroupIcon },
];
function NavLinks() {
    var pathname = navigation_1.usePathname();
    return (React.createElement(React.Fragment, null, links.map(function (link) {
        var LinkIcon = link.icon;
        return (React.createElement(link_1["default"], { key: link.name, href: link.href, className: "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" },
            React.createElement(LinkIcon, { className: "w-6" }),
            React.createElement("p", { className: "hidden md:block" }, link.name)));
    })));
}
exports["default"] = NavLinks;
