import { a as bind_props, b as escape_html, c as ensure_array_like, d as rest_props, f as sanitize_props, h as stringify, i as attributes, l as head, m as spread_props, nt as fallback, o as derived, p as slot, r as attr_class, s as element, v as attr, y as clsx } from "../../chunks/index-server.js";
//#region node_modules/lucide-svelte/dist/defaultAttributes.js
/**
* @license lucide-svelte v1.0.1 - ISC
*
* ISC License
* 
* Copyright (c) 2026 Lucide Icons and Contributors
* 
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
* 
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
* 
* ---
* 
* The following Lucide icons are derived from the Feather project:
* 
* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
* 
* The MIT License (MIT) (for the icons listed above)
* 
* Copyright (c) 2013-present Cole Bemis
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* 
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/lucide-svelte/dist/utils/hasA11yProp.js
/**
* @license lucide-svelte v1.0.1 - ISC
*
* ISC License
* 
* Copyright (c) 2026 Lucide Icons and Contributors
* 
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
* 
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
* 
* ---
* 
* The following Lucide icons are derived from the Feather project:
* 
* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
* 
* The MIT License (MIT) (for the icons listed above)
* 
* Copyright (c) 2013-present Cole Bemis
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* 
*/
/**
* Check if a component has an accessibility prop
*
* @param {object} props
* @returns {boolean} Whether the component has an accessibility prop
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-svelte/dist/utils/mergeClasses.js
/**
* @license lucide-svelte v1.0.1 - ISC
*
* ISC License
* 
* Copyright (c) 2026 Lucide Icons and Contributors
* 
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
* 
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
* 
* ---
* 
* The following Lucide icons are derived from the Feather project:
* 
* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
* 
* The MIT License (MIT) (for the icons listed above)
* 
* Copyright (c) 2013-present Cole Bemis
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* 
*/
/**
* Merges classes into a single string
*
* @param {array} classes
* @returns {string} A string of classes
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-svelte/dist/Icon.svelte
function Icon($$renderer, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, [
		"name",
		"color",
		"size",
		"strokeWidth",
		"absoluteStrokeWidth",
		"iconNode"
	]);
	$$renderer.component(($$renderer) => {
		let name = fallback($$props["name"], void 0);
		let color = fallback($$props["color"], "currentColor");
		let size = fallback($$props["size"], 24);
		let strokeWidth = fallback($$props["strokeWidth"], 2);
		let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
		let iconNode = fallback($$props["iconNode"], () => [], true);
		$$renderer.push(`<svg${attributes({
			...defaultAttributes,
			...!hasA11yProp($$restProps) ? { "aria-hidden": "true" } : void 0,
			...$$restProps,
			width: size,
			height: size,
			stroke: color,
			"stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
			class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
		}, void 0, void 0, void 0, 3)}><!--[-->`);
		const each_array = ensure_array_like(iconNode);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let [tag, attrs] = each_array[$$index];
			element($$renderer, tag, () => {
				$$renderer.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
			});
		}
		$$renderer.push(`<!--]--><!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--></svg>`);
		bind_props($$props, {
			name,
			color,
			size,
			strokeWidth,
			absoluteStrokeWidth,
			iconNode
		});
	});
}
//#endregion
//#region node_modules/lucide-svelte/dist/icons/arrow-right-left.svelte
function Arrow_right_left($$renderer, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	/**
	* @license lucide-svelte v1.0.1 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	Icon($$renderer, spread_props([
		{ name: "arrow-right-left" },
		$$sanitized_props,
		{
			/**
			* @component @name ArrowRightLeft
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMyA0IDQtNCA0IiAvPgogIDxwYXRoIGQ9Ik0yMCA3SDQiIC8+CiAgPHBhdGggZD0ibTggMjEtNC00IDQtNCIgLz4KICA8cGF0aCBkPSJNNCAxN2gxNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-right-left
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [
				["path", { "d": "m16 3 4 4-4 4" }],
				["path", { "d": "M20 7H4" }],
				["path", { "d": "m8 21-4-4 4-4" }],
				["path", { "d": "M4 17h16" }]
			],
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		}
	]));
}
//#endregion
//#region node_modules/lucide-svelte/dist/icons/book-open.svelte
function Book_open($$renderer, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	/**
	* @license lucide-svelte v1.0.1 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	Icon($$renderer, spread_props([
		{ name: "book-open" },
		$$sanitized_props,
		{
			/**
			* @component @name BookOpen
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgN3YxNCIgLz4KICA8cGF0aCBkPSJNMyAxOGExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMWg1YTQgNCAwIDAgMSA0IDQgNCA0IDAgMCAxIDQtNGg1YTEgMSAwIDAgMSAxIDF2MTNhMSAxIDAgMCAxLTEgMWgtNmEzIDMgMCAwIDAtMyAzIDMgMyAwIDAgMC0zLTN6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-open
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "M12 7v14" }], ["path", { "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }]],
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		}
	]));
}
/**
* @license lucide-svelte v1.0.1 - ISC
*
* ISC License
*
* Copyright (c) 2026 Lucide Icons and Contributors
*
* Permission to use, copy, modify, and/or distribute this software for any
* purpose with or without fee is hereby granted, provided that the above
* copyright notice and this permission notice appear in all copies.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* ---
*
* The following Lucide icons are derived from the Feather project:
*
* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
*
* The MIT License (MIT) (for the icons listed above)
*
* Copyright (c) 2013-present Cole Bemis
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
//#endregion
//#region node_modules/lucide-svelte/dist/icons/sun.svelte
function Sun($$renderer, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	/**
	* @license lucide-svelte v1.0.1 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	Icon($$renderer, spread_props([
		{ name: "sun" },
		$$sanitized_props,
		{
			/**
			* @component @name Sun
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [
				["circle", {
					"cx": "12",
					"cy": "12",
					"r": "4"
				}],
				["path", { "d": "M12 2v2" }],
				["path", { "d": "M12 20v2" }],
				["path", { "d": "m4.93 4.93 1.41 1.41" }],
				["path", { "d": "m17.66 17.66 1.41 1.41" }],
				["path", { "d": "M2 12h2" }],
				["path", { "d": "M20 12h2" }],
				["path", { "d": "m6.34 17.66-1.41 1.41" }],
				["path", { "d": "m19.07 4.93-1.41 1.41" }]
			],
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		}
	]));
}
//#endregion
//#region node_modules/lucide-svelte/dist/icons/trophy.svelte
function Trophy($$renderer, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	/**
	* @license lucide-svelte v1.0.1 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	Icon($$renderer, spread_props([
		{ name: "trophy" },
		$$sanitized_props,
		{
			/**
			* @component @name Trophy
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTQuNjZ2MS42MjZhMiAyIDAgMCAxLS45NzYgMS42OTZBNSA1IDAgMCAwIDcgMjEuOTc4IiAvPgogIDxwYXRoIGQ9Ik0xNCAxNC42NnYxLjYyNmEyIDIgMCAwIDAgLjk3NiAxLjY5NkE1IDUgMCAwIDEgMTcgMjEuOTc4IiAvPgogIDxwYXRoIGQ9Ik0xOCA5aDEuNWExIDEgMCAwIDAgMC01SDE4IiAvPgogIDxwYXRoIGQ9Ik00IDIyaDE2IiAvPgogIDxwYXRoIGQ9Ik02IDlhNiA2IDAgMCAwIDEyIDBWM2ExIDEgMCAwIDAtMS0xSDdhMSAxIDAgMCAwLTEgMXoiIC8+CiAgPHBhdGggZD0iTTYgOUg0LjVhMSAxIDAgMCAxIDAtNUg2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/trophy
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [
				["path", { "d": "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" }],
				["path", { "d": "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" }],
				["path", { "d": "M18 9h1.5a1 1 0 0 0 0-5H18" }],
				["path", { "d": "M4 22h16" }],
				["path", { "d": "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" }],
				["path", { "d": "M6 9H4.5a1 1 0 0 1 0-5H6" }]
			],
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		}
	]));
}
//#endregion
//#region node_modules/lucide-svelte/dist/icons/volume-2.svelte
function Volume_2($$renderer, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	/**
	* @license lucide-svelte v1.0.1 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	Icon($$renderer, spread_props([
		{ name: "volume-2" },
		$$sanitized_props,
		{
			/**
			* @component @name Volume2
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgNC43MDJhLjcwNS43MDUgMCAwIDAtMS4yMDMtLjQ5OEw2LjQxMyA3LjU4N0ExLjQgMS40IDAgMCAxIDUuNDE2IDhIM2ExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWgyLjQxNmExLjQgMS40IDAgMCAxIC45OTcuNDEzbDMuMzgzIDMuMzg0QS43MDUuNzA1IDAgMCAwIDExIDE5LjI5OHoiIC8+CiAgPHBhdGggZD0iTTE2IDlhNSA1IDAgMCAxIDAgNiIgLz4KICA8cGF0aCBkPSJNMTkuMzY0IDE4LjM2NGE5IDkgMCAwIDAgMC0xMi43MjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/volume-2
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [
				["path", { "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }],
				["path", { "d": "M16 9a5 5 0 0 1 0 6" }],
				["path", { "d": "M19.364 18.364a9 9 0 0 0 0-12.728" }]
			],
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		}
	]));
}
//#endregion
//#region node_modules/lucide-svelte/dist/icons/x.svelte
function X($$renderer, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	/**
	* @license lucide-svelte v1.0.1 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	Icon($$renderer, spread_props([
		{ name: "x" },
		$$sanitized_props,
		{
			/**
			* @component @name X
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]],
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		}
	]));
}
//#endregion
//#region src/lib/audio.ts
var ctx = null;
var soundEnabled = true;
function getContext() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const AudioCtx = window.AudioContext || window.webkitAudioContext;
		if (AudioCtx) ctx = new AudioCtx();
	}
	if (ctx && ctx.state === "suspended") ctx.resume();
	return ctx;
}
function playStreakBonusSound() {
	if (!soundEnabled) return;
	const context = getContext();
	if (!context) return;
	const now = context.currentTime;
	[
		440,
		554.37,
		659.25,
		880
	].forEach((note, index) => {
		const osc = context.createOscillator();
		const gain = context.createGain();
		osc.type = "sine";
		osc.frequency.setValueAtTime(note, now + index * .07);
		gain.gain.setValueAtTime(.3, now + index * .07);
		gain.gain.exponentialRampToValueAtTime(.001, now + index * .07 + .35);
		osc.connect(gain);
		gain.connect(context.destination);
		osc.start(now + index * .07);
		osc.stop(now + index * .07 + .35);
	});
}
//#endregion
//#region src/lib/components/Navbar.svelte
function Navbar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { score = 0, streak = 0, openLeaderboard, openDictionary } = $$props;
		$$renderer.push(`<header class="navbar-header svelte-rfuq4y"><div class="brand svelte-rfuq4y">PhilNITS</div> <div class="stats-center svelte-rfuq4y"><span class="score-text svelte-rfuq4y">SCORE ${escape_html(score)}</span> `);
		if (streak > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="streak-text animate-streak-pulse svelte-rfuq4y">×${escape_html(streak)}</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="actions-group svelte-rfuq4y"><button class="icon-btn svelte-rfuq4y" aria-label="Toggle Theme">`);
		$$renderer.push("<!--[-1-->");
		Sun($$renderer, { size: 22 });
		$$renderer.push(`<!--]--></button> <button class="icon-btn svelte-rfuq4y" aria-label="Toggle Sound">`);
		$$renderer.push("<!--[0-->");
		Volume_2($$renderer, { size: 22 });
		$$renderer.push(`<!--]--></button> <button class="icon-btn svelte-rfuq4y" aria-label="Open Dictionary">`);
		Book_open($$renderer, { size: 22 });
		$$renderer.push(`<!----></button> <button class="icon-btn svelte-rfuq4y" aria-label="Open Leaderboard">`);
		Trophy($$renderer, { size: 22 });
		$$renderer.push(`<!----></button></div></header>`);
	});
}
//#endregion
//#region src/lib/data/acronyms.ts
var ACRONYMS = [
	{
		id: 1,
		acronym: "4Cs",
		meaning: "Consumer, Cost, Convenience, and Communication",
		category: "Management"
	},
	{
		id: 2,
		acronym: "AI",
		meaning: "Artificial Intelligence",
		category: "Software"
	},
	{
		id: 3,
		acronym: "AIDMA",
		meaning: "Attention, Interest, Desire, Memory, and Action",
		category: "Management"
	},
	{
		id: 4,
		acronym: "ANSI",
		meaning: "American National Standards Institute",
		category: "General"
	},
	{
		id: 5,
		acronym: "AR",
		meaning: "Augmented Reality",
		category: "Software"
	},
	{
		id: 6,
		acronym: "ASCII",
		meaning: "American Standard Code for Information Interchange",
		category: "Software"
	},
	{
		id: 7,
		acronym: "ASP",
		meaning: "Application Service Provider / Active Server Pages",
		category: "Software"
	},
	{
		id: 8,
		acronym: "Bcc",
		meaning: "Blind Carbon Copy",
		category: "Software"
	},
	{
		id: 9,
		acronym: "BCP",
		meaning: "Business Continuity Plan",
		category: "Management"
	},
	{
		id: 10,
		acronym: "BIOS",
		meaning: "Basic Input/Output System",
		category: "Hardware"
	},
	{
		id: 11,
		acronym: "BLE",
		meaning: "Bluetooth Low Energy",
		category: "Networking"
	},
	{
		id: 12,
		acronym: "BPO",
		meaning: "Business Process Outsourcing",
		category: "Management"
	},
	{
		id: 13,
		acronym: "BPR",
		meaning: "Business Process Reengineering",
		category: "Management"
	},
	{
		id: 14,
		acronym: "BSC",
		meaning: "Balanced Score Card",
		category: "Management"
	},
	{
		id: 15,
		acronym: "CAD",
		meaning: "Computer-Aided Design",
		category: "Software"
	},
	{
		id: 16,
		acronym: "CEN",
		meaning: "European Committee for Standardization",
		category: "General"
	},
	{
		id: 17,
		acronym: "CEO",
		meaning: "Chief Executive Officer",
		category: "Management"
	},
	{
		id: 18,
		acronym: "CFO",
		meaning: "Chief Financial Officer",
		category: "Management"
	},
	{
		id: 19,
		acronym: "CIO",
		meaning: "Chief Information Officer",
		category: "Management"
	},
	{
		id: 20,
		acronym: "CMM",
		meaning: "Capability Maturity Model",
		category: "Management"
	},
	{
		id: 21,
		acronym: "CMOS",
		meaning: "Complementary Metal-Oxide Semiconductor",
		category: "Hardware"
	},
	{
		id: 22,
		acronym: "CMS",
		meaning: "Content Management System",
		category: "Software"
	},
	{
		id: 23,
		acronym: "COO",
		meaning: "Chief Operating Officer",
		category: "Management"
	},
	{
		id: 24,
		acronym: "COP28",
		meaning: "Conference of the Parties of the UNFCCC",
		category: "General"
	},
	{
		id: 25,
		acronym: "CPRM",
		meaning: "Content Protection for Recorded Media",
		category: "Security"
	},
	{
		id: 26,
		acronym: "CRM",
		meaning: "Customer Relationship Management",
		category: "Management"
	},
	{
		id: 27,
		acronym: "CSR",
		meaning: "Corporate Social Responsibility",
		category: "Management"
	},
	{
		id: 28,
		acronym: "DHCP",
		meaning: "Dynamic Host Configuration Protocol",
		category: "Networking"
	},
	{
		id: 29,
		acronym: "DNS",
		meaning: "Domain Name System",
		category: "Networking"
	},
	{
		id: 30,
		acronym: "DRM",
		meaning: "Digital Rights Management",
		category: "Security"
	},
	{
		id: 31,
		acronym: "EAN",
		meaning: "European Article Number",
		category: "Hardware"
	},
	{
		id: 32,
		acronym: "EBCDIC",
		meaning: "Extended Binary Coded Decimal Interchange Code",
		category: "Software"
	},
	{
		id: 33,
		acronym: "EDI",
		meaning: "Electronic Data Interchange",
		category: "Software"
	},
	{
		id: 34,
		acronym: "ERP",
		meaning: "Enterprise Resource Planning",
		category: "Management"
	},
	{
		id: 35,
		acronym: "ESSID",
		meaning: "Extended Service Set Identifier",
		category: "Networking"
	},
	{
		id: 36,
		acronym: "EUC",
		meaning: "Extended Unix Code",
		category: "Software"
	},
	{
		id: 37,
		acronym: "EVM",
		meaning: "Earned Value Management",
		category: "Management"
	},
	{
		id: 38,
		acronym: "FAQ",
		meaning: "Frequently Asked Questions",
		category: "General"
	},
	{
		id: 39,
		acronym: "Fintech",
		meaning: "Financial Technology",
		category: "Management"
	},
	{
		id: 40,
		acronym: "FTP",
		meaning: "File Transfer Protocol",
		category: "Networking"
	},
	{
		id: 41,
		acronym: "GPS",
		meaning: "Global Positioning System",
		category: "Hardware"
	},
	{
		id: 42,
		acronym: "GUI",
		meaning: "Graphical User Interface",
		category: "Software"
	},
	{
		id: 43,
		acronym: "HDD",
		meaning: "Hard Disk Drive",
		category: "Hardware"
	},
	{
		id: 44,
		acronym: "HDMI",
		meaning: "High-Definition Multimedia Interface",
		category: "Hardware"
	},
	{
		id: 45,
		acronym: "HTTP",
		meaning: "Hypertext Transfer Protocol",
		category: "Networking"
	},
	{
		id: 46,
		acronym: "ICANN",
		meaning: "Internet Corporation for Assigned Names and Numbers",
		category: "Networking"
	},
	{
		id: 47,
		acronym: "IEC",
		meaning: "International Electrotechnical Commission",
		category: "General"
	},
	{
		id: 48,
		acronym: "IEEE",
		meaning: "Institute of Electrical and Electronics Engineers",
		category: "General"
	},
	{
		id: 49,
		acronym: "IMAP",
		meaning: "Internet Message Access Protocol",
		category: "Networking"
	},
	{
		id: 50,
		acronym: "IoT",
		meaning: "Internet of Things",
		category: "Hardware"
	},
	{
		id: 51,
		acronym: "IPO",
		meaning: "Initial Public Offering",
		category: "Management"
	},
	{
		id: 52,
		acronym: "ISBN",
		meaning: "International Standard Book Number",
		category: "General"
	},
	{
		id: 53,
		acronym: "ISMS",
		meaning: "Information Security Management System (ISO 27000)",
		category: "Security"
	},
	{
		id: 54,
		acronym: "ISO",
		meaning: "International Organization for Standardization",
		category: "General"
	},
	{
		id: 55,
		acronym: "ISP",
		meaning: "Internet Service Provider",
		category: "Networking"
	},
	{
		id: 56,
		acronym: "ITIL",
		meaning: "Information Technology Infrastructure Library",
		category: "Management"
	},
	{
		id: 57,
		acronym: "ITSM",
		meaning: "Information Technology Service Management (ISO 20000)",
		category: "Management"
	},
	{
		id: 58,
		acronym: "ITU",
		meaning: "International Telecommunication Union",
		category: "Networking"
	},
	{
		id: 59,
		acronym: "JIS",
		meaning: "Japanese Industrial Standards",
		category: "General"
	},
	{
		id: 60,
		acronym: "JIT",
		meaning: "Just In Time (Inventory)",
		category: "Management"
	},
	{
		id: 61,
		acronym: "LPWA",
		meaning: "Low Power Wide Area (Network)",
		category: "Networking"
	},
	{
		id: 62,
		acronym: "M&A",
		meaning: "Mergers & Acquisition",
		category: "Management"
	},
	{
		id: 63,
		acronym: "MAC",
		meaning: "Media Access Control (MAC Address)",
		category: "Networking"
	},
	{
		id: 64,
		acronym: "MBO",
		meaning: "Management Buy-Out",
		category: "Management"
	},
	{
		id: 65,
		acronym: "MDM",
		meaning: "Mobile Device Management",
		category: "Management"
	},
	{
		id: 66,
		acronym: "MIDI",
		meaning: "Musical Instrument Digital Interface",
		category: "Hardware"
	},
	{
		id: 67,
		acronym: "MRP",
		meaning: "Material Requirements Planning",
		category: "Management"
	},
	{
		id: 68,
		acronym: "MTBF",
		meaning: "Mean Time Between Failures",
		category: "Hardware"
	},
	{
		id: 69,
		acronym: "MTTR",
		meaning: "Mean Time To Repair",
		category: "Hardware"
	},
	{
		id: 70,
		acronym: "OA",
		meaning: "Office Automation",
		category: "Software"
	},
	{
		id: 71,
		acronym: "OCR",
		meaning: "Optical Character Reader/Recognition",
		category: "Hardware"
	},
	{
		id: 72,
		acronym: "OEM",
		meaning: "Original Equipment Manufacturer",
		category: "Management"
	},
	{
		id: 73,
		acronym: "OMR",
		meaning: "Optical Mark Reader/Recognition",
		category: "Hardware"
	},
	{
		id: 74,
		acronym: "OSS",
		meaning: "Open Source Software",
		category: "Software"
	},
	{
		id: 75,
		acronym: "PaaS",
		meaning: "Platform as a Service",
		category: "Software"
	},
	{
		id: 76,
		acronym: "PDCA",
		meaning: "Plan, Do, Check, Act",
		category: "Management"
	},
	{
		id: 77,
		acronym: "PERT",
		meaning: "Program Evaluation and Review Technique",
		category: "Management"
	},
	{
		id: 78,
		acronym: "POP",
		meaning: "Post Office Protocol",
		category: "Networking"
	},
	{
		id: 79,
		acronym: "POS",
		meaning: "Point-Of-Sales",
		category: "Management"
	},
	{
		id: 80,
		acronym: "PPM",
		meaning: "Product Portfolio Management",
		category: "Management"
	},
	{
		id: 81,
		acronym: "QMS",
		meaning: "Quality Management System (ISO 9000)",
		category: "Management"
	},
	{
		id: 82,
		acronym: "QR Code",
		meaning: "Quick Response Code",
		category: "Software"
	},
	{
		id: 83,
		acronym: "RAD",
		meaning: "Rapid Application Development",
		category: "Software"
	},
	{
		id: 84,
		acronym: "RAID",
		meaning: "Redundant Array of Independent/Inexpensive Disks",
		category: "Hardware"
	},
	{
		id: 85,
		acronym: "RFI",
		meaning: "Request For Information",
		category: "Management"
	},
	{
		id: 86,
		acronym: "RFID",
		meaning: "Radio Frequency Identification",
		category: "Hardware"
	},
	{
		id: 87,
		acronym: "RFP",
		meaning: "Request For Proposal",
		category: "Management"
	},
	{
		id: 88,
		acronym: "RPA",
		meaning: "Robotic Process Automation",
		category: "Software"
	},
	{
		id: 89,
		acronym: "RSS",
		meaning: "Really Simple Syndication",
		category: "Software"
	},
	{
		id: 90,
		acronym: "SaaS",
		meaning: "Software as a Service",
		category: "Software"
	},
	{
		id: 91,
		acronym: "SCM",
		meaning: "Supply Chain Management",
		category: "Management"
	},
	{
		id: 92,
		acronym: "SDGs",
		meaning: "Sustainable Development Goals",
		category: "Management"
	},
	{
		id: 93,
		acronym: "SEO",
		meaning: "Search Engine Optimization",
		category: "Software"
	},
	{
		id: 94,
		acronym: "SFA",
		meaning: "Sales Force Automation",
		category: "Management"
	},
	{
		id: 95,
		acronym: "SLA",
		meaning: "Service Level Agreement",
		category: "Management"
	},
	{
		id: 96,
		acronym: "SLM",
		meaning: "Service Level Management",
		category: "Management"
	},
	{
		id: 97,
		acronym: "S/MIME",
		meaning: "Secure/Multipurpose Internet Mail Extensions",
		category: "Security"
	},
	{
		id: 98,
		acronym: "SMTP",
		meaning: "Simple Mail Transfer Protocol",
		category: "Networking"
	},
	{
		id: 99,
		acronym: "SNMP",
		meaning: "Simple Network Management Protocol",
		category: "Networking"
	},
	{
		id: 100,
		acronym: "SNS",
		meaning: "Social Networking Service",
		category: "Software"
	},
	{
		id: 101,
		acronym: "SSD",
		meaning: "Solid-State Drive",
		category: "Hardware"
	},
	{
		id: 102,
		acronym: "SSL",
		meaning: "Secure Sockets Layer",
		category: "Security"
	},
	{
		id: 103,
		acronym: "SWOT",
		meaning: "Strengths, Weaknesses, Opportunities & Threats",
		category: "Management"
	},
	{
		id: 104,
		acronym: "TCO",
		meaning: "Total Cost of Ownership",
		category: "Management"
	},
	{
		id: 105,
		acronym: "TCP",
		meaning: "Transmission Control Protocol",
		category: "Networking"
	},
	{
		id: 106,
		acronym: "TIFF",
		meaning: "Tagged Image File Format",
		category: "Software"
	},
	{
		id: 107,
		acronym: "TLD",
		meaning: "Top-Level Domain",
		category: "Networking"
	},
	{
		id: 108,
		acronym: "TLS",
		meaning: "Transport Layer Security",
		category: "Security"
	},
	{
		id: 109,
		acronym: "TQC",
		meaning: "Total Quality Control",
		category: "Management"
	},
	{
		id: 110,
		acronym: "TQM",
		meaning: "Total Quality Management",
		category: "Management"
	},
	{
		id: 111,
		acronym: "UML",
		meaning: "Unified Modeling Language",
		category: "Software"
	},
	{
		id: 112,
		acronym: "UNESCO",
		meaning: "United Nations Educational, Scientific and Cultural Org.",
		category: "General"
	},
	{
		id: 113,
		acronym: "UPS",
		meaning: "Uninterruptible Power Supply",
		category: "Hardware"
	},
	{
		id: 114,
		acronym: "VR",
		meaning: "Virtual Reality",
		category: "Software"
	},
	{
		id: 115,
		acronym: "W3C",
		meaning: "World Wide Web Consortium",
		category: "Networking"
	},
	{
		id: 116,
		acronym: "WBS",
		meaning: "Work Breakdown Structure",
		category: "Management"
	},
	{
		id: 117,
		acronym: "WHO",
		meaning: "World Health Organization",
		category: "General"
	},
	{
		id: 118,
		acronym: "WPA",
		meaning: "Wi-Fi Protected Access",
		category: "Security"
	}
];
//#endregion
//#region src/lib/components/GameCard.svelte
function GameCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { item, streak = 0, direction = "acronym-to-meaning", onanswer, onnext, ondirectionchange } = $$props;
		let inputValues = [];
		let singleInputValue = "";
		let isSubmitted = false;
		let cleanAcronym = derived(() => item.acronym.trim());
		let cleanMeaning = derived(() => item.meaning.trim());
		derived(() => cleanMeaning().split(/\s+/));
		$$renderer.push(`<div${attr_class(`card-container `, "svelte-n3ft5o")}><div class="card-header svelte-n3ft5o"><span class="category-tag svelte-n3ft5o">${escape_html(item.category)}</span> <div class="header-actions svelte-n3ft5o"><button class="dir-toggle-btn svelte-n3ft5o" title="Switch direction">`);
		Arrow_right_left($$renderer, { size: 12 });
		$$renderer.push(`<!----> ${escape_html(direction === "acronym-to-meaning" ? "ACRONYM ➔ MEANING" : "MEANING ➔ ACRONYM")}</button> <button class="mode-toggle-btn svelte-n3ft5o">${escape_html("TYPE MODE")}</button></div></div> <div class="prompt-section svelte-n3ft5o">`);
		if (direction === "acronym-to-meaning") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="prompt-label svelte-n3ft5o">ACRONYM</div> <div class="acronym-hero-text svelte-n3ft5o">${escape_html(item.acronym)}</div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="prompt-label svelte-n3ft5o">MEANING</div> <div class="meaning-text svelte-n3ft5o">${escape_html(item.meaning)}</div>`);
		}
		$$renderer.push(`<!--]--></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="input-section svelte-n3ft5o">`);
		$$renderer.push("<!--[0-->");
		if (direction === "meaning-to-acronym") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="letter-boxes svelte-n3ft5o"><!--[-->`);
			const each_array = ensure_array_like(Array(cleanAcronym().length));
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				each_array[i];
				$$renderer.push(`<input${attr("id", `letter-input-${stringify(i)}`)} type="text" maxlength="2"${attr_class(`letter-box `, "svelte-n3ft5o")}${attr("value", inputValues[i] || "")}${attr("disabled", isSubmitted, true)} autocomplete="off" autocorrect="off" autocapitalize="characters"/>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="full-text-input-wrap svelte-n3ft5o"><input id="meaning-text-input" type="text"${attr_class(`meaning-input `, "svelte-n3ft5o")}${attr("placeholder", `Type what ${stringify(cleanAcronym())} stands for...`)}${attr("value", singleInputValue)}${attr("disabled", isSubmitted, true)} autocomplete="off" autocorrect="off"/> `);
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button class="submit-btn svelte-n3ft5o"${attr("disabled", !singleInputValue.trim(), true)}>SUBMIT</button>`);
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]-->`);
		$$renderer.push(`<!--]--></div> <div class="card-footer svelte-n3ft5o">`);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<button class="hint-btn svelte-n3ft5o"${attr("disabled", false, true)}>${escape_html("hint")}</button>`);
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
//#region src/lib/components/LeaderboardSheet.svelte
function LeaderboardSheet($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { isOpen = false, currentScore = 0, maxStreak = 0, accuracy = 100, close } = $$props;
		let leaderboard = [];
		let playerName = "";
		if (isOpen) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="overlay svelte-692y3m" role="button" tabindex="0"><div class="sheet-container animate-pop-in svelte-692y3m"><div class="sheet-header svelte-692y3m"><h2 class="title svelte-692y3m">LEADERBOARD</h2> <button class="close-btn svelte-692y3m" aria-label="Close">`);
			X($$renderer, { size: 20 });
			$$renderer.push(`<!----></button></div> `);
			if (currentScore > 0 && true) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="submit-card svelte-692y3m"><div class="submit-row svelte-692y3m"><input class="submit-input svelte-692y3m" type="text" placeholder="Your Handle" maxlength="18"${attr("value", playerName)}/> <button class="submit-btn svelte-692y3m"${attr("disabled", !playerName.trim(), true)}>SUBMIT</button></div></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <div class="list-wrapper svelte-692y3m">`);
			{
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--[-->`);
				const each_array = ensure_array_like(leaderboard);
				for (let i = 0, $$length = each_array.length; i < $$length; i++) {
					let rank = each_array[i];
					$$renderer.push(`<div${attr_class(`list-row ${i === 0 ? "rank-gold" : i === 1 ? "rank-silver" : i === 2 ? "rank-bronze" : ""}`, "svelte-692y3m")}><div class="rank-pos svelte-692y3m">#${escape_html(i + 1)}</div> <div class="rank-info svelte-692y3m"><span class="player-name svelte-692y3m">${escape_html(rank.name)}</span> <span class="stats-text svelte-692y3m">${escape_html(rank.max_streak)} streak · ${escape_html(rank.accuracy)}% acc</span></div> <div class="score-val svelte-692y3m">${escape_html(rank.score)}</div></div>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/AcronymListSheet.svelte
function AcronymListSheet($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { isOpen = false, masteredIds = /* @__PURE__ */ new Set(), close } = $$props;
		let searchQuery = "";
		let selectedCategory = "All";
		const categories = [
			"All",
			"Networking",
			"Security",
			"Hardware",
			"Management",
			"Software",
			"General"
		];
		let filteredList = derived(() => ACRONYMS.filter((item) => {
			const q = searchQuery.toLowerCase().trim();
			return !q || item.acronym.toLowerCase().includes(q) || item.meaning.toLowerCase().includes(q) || item.id.toString().includes(q);
		}));
		if (isOpen) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="overlay svelte-bjjrro" role="button" tabindex="0"><div class="sheet-container animate-pop-in svelte-bjjrro"><div class="sheet-header svelte-bjjrro"><h2 class="title svelte-bjjrro">DIRECTORY</h2> <button class="close-btn svelte-bjjrro" aria-label="Close">`);
			X($$renderer, { size: 20 });
			$$renderer.push(`<!----></button></div> <input class="search-input svelte-bjjrro" type="text" placeholder="Search acronym or meaning..."${attr("value", searchQuery)}/> <div class="category-scroll svelte-bjjrro"><!--[-->`);
			const each_array = ensure_array_like(categories);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let cat = each_array[$$index];
				$$renderer.push(`<button${attr_class(`cat-chip ${selectedCategory === cat ? "active" : ""}`, "svelte-bjjrro")}>${escape_html(cat)}</button>`);
			}
			$$renderer.push(`<!--]--></div> <div class="list-wrapper svelte-bjjrro"><!--[-->`);
			const each_array_1 = ensure_array_like(filteredList());
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let item = each_array_1[$$index_1];
				$$renderer.push(`<div class="list-row svelte-bjjrro"><div class="acronym-col svelte-bjjrro"><span class="acronym-code svelte-bjjrro">${escape_html(item.acronym)}</span> <span class="mastered-icon svelte-bjjrro">${escape_html(masteredIds.has(item.id) ? "✓" : "")}</span></div> <div class="meaning-col svelte-bjjrro">${escape_html(item.meaning)}</div></div>`);
			}
			$$renderer.push(`<!--]--></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let currentItemIndex = 0;
		let score = 0;
		let streak = 0;
		let maxStreak = 0;
		let totalAnswered = 0;
		let correctAnswered = 0;
		let masteredIds = /* @__PURE__ */ new Set();
		let direction = "acronym-to-meaning";
		let showLeaderboard = false;
		let showDictionary = false;
		let currentItem = derived(() => ACRONYMS[currentItemIndex]);
		let accuracy = derived(() => totalAnswered > 0 ? correctAnswered / totalAnswered * 100 : 100);
		let multiplier = derived(() => streak >= 10 ? 3 : streak >= 5 ? 2 : streak >= 3 ? 1.5 : 1);
		function saveMastered() {
			try {
				localStorage.setItem("philnits_mastered", JSON.stringify([...masteredIds]));
			} catch (e) {}
		}
		function handleDirectionChange(newDir) {
			direction = newDir;
			try {
				localStorage.setItem("philnits_direction", newDir);
			} catch (e) {}
		}
		function pickNextQuestion() {
			const unmastered = ACRONYMS.filter((a) => !masteredIds.has(a.id));
			const pool = unmastered.length > 0 ? unmastered : ACRONYMS;
			let nextIdx = Math.floor(Math.random() * pool.length);
			let targetItem = pool[nextIdx];
			if (targetItem.id === currentItem()?.id && ACRONYMS.length > 1) targetItem = pool[(nextIdx + 1) % pool.length];
			currentItemIndex = ACRONYMS.findIndex((a) => a.id === targetItem.id);
		}
		function handleAnswer(detail) {
			const { correct, points } = detail;
			totalAnswered += 1;
			if (correct) {
				correctAnswered += 1;
				streak += 1;
				if (streak > maxStreak) maxStreak = streak;
				const earned = Math.round(points * multiplier());
				score += earned;
				masteredIds.add(currentItem().id);
				saveMastered();
				if (streak === 5 || streak === 10 || streak === 15) playStreakBonusSound();
			} else streak = 0;
		}
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>PhilNITS Acronym Blitz</title>`);
			});
		});
		$$renderer.push(`<main class="app-main svelte-1uha8ag">`);
		Navbar($$renderer, {
			score,
			streak,
			openLeaderboard: () => showLeaderboard = true,
			openDictionary: () => showDictionary = true
		});
		$$renderer.push(`<!----> <section class="game-area svelte-1uha8ag">`);
		if (currentItem()) {
			$$renderer.push("<!--[0-->");
			GameCard($$renderer, {
				item: currentItem(),
				streak,
				direction,
				ondirectionchange: handleDirectionChange,
				onanswer: handleAnswer,
				onnext: pickNextQuestion
			});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="session-bar svelte-1uha8ag"><span>Mastered: ${escape_html(masteredIds.size)}/${escape_html(ACRONYMS.length)}</span> <span>Acc: ${escape_html(Math.round(accuracy()))}%</span> <button class="reset-btn svelte-1uha8ag">reset</button></div></section> `);
		LeaderboardSheet($$renderer, {
			isOpen: showLeaderboard,
			currentScore: score,
			maxStreak,
			accuracy: accuracy(),
			close: () => showLeaderboard = false
		});
		$$renderer.push(`<!----> `);
		AcronymListSheet($$renderer, {
			isOpen: showDictionary,
			masteredIds,
			close: () => showDictionary = false
		});
		$$renderer.push(`<!----></main>`);
	});
}
//#endregion
export { _page as default };
