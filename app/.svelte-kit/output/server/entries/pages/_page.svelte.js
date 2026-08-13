import { a as attributes, b as clsx, c as element, f as rest_props, g as stringify, h as spread_props, i as attr_style, l as ensure_array_like, m as slot, o as bind_props, p as sanitize_props, r as attr_class, rt as fallback, s as derived, u as head, x as escape_html, y as attr } from "../../chunks/index-server.js";
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
//#endregion
//#region node_modules/lucide-svelte/dist/icons/check.svelte
function Check($$renderer, $$props) {
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
		{ name: "check" },
		$$sanitized_props,
		{
			/**
			* @component @name Check
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "M20 6 9 17l-5-5" }]],
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
		let displayScore = score;
		$$renderer.push(`<header class="navbar-header svelte-rfuq4y"><div class="nav-section nav-left svelte-rfuq4y"><span class="brand svelte-rfuq4y">philnits acronym quiz</span> <div class="mobile-actions svelte-rfuq4y"><button class="icon-btn svelte-rfuq4y" aria-label="Toggle Theme">`);
		$$renderer.push("<!--[-1-->");
		Sun($$renderer, { size: 18 });
		$$renderer.push(`<!--]--></button> <button class="icon-btn svelte-rfuq4y" aria-label="Toggle Sound">`);
		$$renderer.push("<!--[0-->");
		Volume_2($$renderer, { size: 18 });
		$$renderer.push(`<!--]--></button></div></div> <div class="stats-center svelte-rfuq4y"><span class="score-text svelte-rfuq4y">${escape_html(displayScore)}</span> `);
		if (streak > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="streak-text animate-streak-pulse svelte-rfuq4y">×${escape_html(streak)}</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="nav-section nav-right svelte-rfuq4y"><div class="desktop-actions svelte-rfuq4y"><button class="icon-btn svelte-rfuq4y" aria-label="Toggle Theme">`);
		$$renderer.push("<!--[-1-->");
		Sun($$renderer, { size: 18 });
		$$renderer.push(`<!--]--></button> <button class="icon-btn svelte-rfuq4y" aria-label="Toggle Sound">`);
		$$renderer.push("<!--[0-->");
		Volume_2($$renderer, { size: 18 });
		$$renderer.push(`<!--]--></button></div> <button class="icon-btn svelte-rfuq4y" aria-label="Open Dictionary">`);
		Book_open($$renderer, { size: 18 });
		$$renderer.push(`<!----></button> <button class="icon-btn svelte-rfuq4y" aria-label="Open Leaderboard">`);
		Trophy($$renderer, { size: 18 });
		$$renderer.push(`<!----></button></div></header>`);
	});
}
//#endregion
//#region src/lib/grader.ts
function getCoreMeaning(fullMeaning) {
	return fullMeaning.replace(/\s*\([^)]*\)/g, "").trim();
}
//#endregion
//#region src/lib/components/GameCard.svelte
function GameCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { item, streak = 0, onanswer, onnext } = $$props;
		let inputValue = "";
		let isSubmitted = false;
		derived(() => item.acronym.trim());
		let cleanMeaning = derived(() => item.meaning.trim());
		let coreMeaning = derived(() => getCoreMeaning(cleanMeaning()));
		derived(() => coreMeaning().split(/\s+/).filter((w) => w.length > 0));
		$$renderer.push(`<div${attr_class(`card-container `, "svelte-n3ft5o")}><div class="card-header svelte-n3ft5o"><span class="category-tag svelte-n3ft5o">${escape_html(item.category)}</span></div> <div class="prompt-section svelte-n3ft5o"><div class="prompt-label svelte-n3ft5o">ACRONYM</div> <div class="acronym-hero-text svelte-n3ft5o">${escape_html(item.acronym)}</div></div> <div class="info-zone svelte-n3ft5o">`);
		if (item.hint) {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<div class="info-log log-desc svelte-n3ft5o">${escape_html(item.hint)}</div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="action-row svelte-n3ft5o"><input id="meaning-text-input" type="text"${attr_class(`meaning-input ${stringify("")}`, "svelte-n3ft5o")} placeholder="Enter meaning..."${attr("value", inputValue)}${attr("disabled", isSubmitted, true)} autocomplete="off" autocorrect="off"/> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<button class="action-btn submit-btn svelte-n3ft5o"${attr("disabled", !inputValue.trim(), true)}>SUBMIT</button>`);
		$$renderer.push(`<!--]--></div> <div class="card-footer svelte-n3ft5o"><button class="hint-btn svelte-n3ft5o"${attr("disabled", false, true)}${attr_style("", { visibility: "visible" })}>${escape_html("hint")}</button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
//#region src/lib/components/LeaderboardSheet.svelte
function LeaderboardSheet($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { isOpen = false, close } = $$props;
		let leaderboard = [];
		if (isOpen) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="overlay svelte-692y3m" role="button" tabindex="0"><div class="sheet-container svelte-692y3m"><div class="sheet-header svelte-692y3m"><h2 class="title svelte-692y3m">LEADERBOARD</h2> <button class="close-btn svelte-692y3m" aria-label="Close">`);
			X($$renderer, { size: 20 });
			$$renderer.push(`<!----></button></div> <div class="list-wrapper svelte-692y3m">`);
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
//#region src/lib/data/acronyms.ts
var ACRONYMS = [
	{
		id: 1,
		acronym: "4Cs",
		meaning: "Consumer, Cost, Convenience, and Communication",
		category: "Management",
		hint: "marketing vibe check focusing on the buyer instead of the seller"
	},
	{
		id: 2,
		acronym: "AI",
		meaning: "Artificial Intelligence",
		category: "Software",
		hint: "when computers pretend they got a real brain"
	},
	{
		id: 3,
		acronym: "AIDMA",
		meaning: "Attention, Interest, Desire, Memory, and Action",
		category: "Management",
		hint: "the psychological funnel of getting someone hyped to buy stuff"
	},
	{
		id: 4,
		acronym: "ANSI",
		meaning: "American National Standards Institute",
		category: "General",
		hint: "the crew in the U.S. deciding what standard fits where"
	},
	{
		id: 5,
		acronym: "AR",
		meaning: "Augmented Reality",
		category: "Software",
		hint: "slapping digital stuff on top of the real world like Pokemon GO"
	},
	{
		id: 6,
		acronym: "ASCII",
		meaning: "American Standard Code for Information Interchange",
		category: "Software",
		hint: "the OG table translating letters and symbols into numbers for PCs"
	},
	{
		id: 7,
		acronym: "ASP",
		meaning: "Application Service Provider / Active Server Pages",
		category: "Software",
		hint: "old school Microsoft way to make web pages dynamic or renting apps online"
	},
	{
		id: 8,
		acronym: "Bcc",
		meaning: "Blind Carbon Copy",
		category: "Software",
		hint: "sneaking someone into an email thread without anyone else knowing"
	},
	{
		id: 9,
		acronym: "BCP",
		meaning: "Business Continuity Plan",
		category: "Management",
		hint: "the backup plan when literally everything catches on fire at work"
	},
	{
		id: 10,
		acronym: "BIOS",
		meaning: "Basic Input/Output System",
		category: "Hardware",
		hint: "the very first thing your motherboard wakes up with before booting your OS"
	},
	{
		id: 11,
		acronym: "BLE",
		meaning: "Bluetooth Low Energy",
		category: "Networking",
		hint: "Bluetooth on a diet so your earbuds and fitness bands dont die in five mins"
	},
	{
		id: 12,
		acronym: "BPO",
		meaning: "Business Process Outsourcing",
		category: "Management",
		hint: "paying another company to do the boring grind work for you"
	},
	{
		id: 13,
		acronym: "BPR",
		meaning: "Business Process Reengineering",
		category: "Management",
		hint: "blowing up existing company workflows from scratch because they suck"
	},
	{
		id: 14,
		acronym: "BSC",
		meaning: "Balanced Score Card",
		category: "Management",
		hint: "report card for businesses checking money, users, and internal vibes"
	},
	{
		id: 15,
		acronym: "CAD",
		meaning: "Computer-Aided Design",
		category: "Software",
		hint: "software engineers use to draw blueprints instead of pencil and paper"
	},
	{
		id: 16,
		acronym: "CEN",
		meaning: "European Committee for Standardization",
		category: "General",
		hint: "Euro squad setting technical rules so everything works across Europe"
	},
	{
		id: 17,
		acronym: "CEO",
		meaning: "Chief Executive Officer",
		category: "Management",
		hint: "the big boss calling the major corporate shots"
	},
	{
		id: 18,
		acronym: "CFO",
		meaning: "Chief Financial Officer",
		category: "Management",
		hint: "the money boss guarding the company wallet and budgets"
	},
	{
		id: 19,
		acronym: "CIO",
		meaning: "Chief Information Officer",
		category: "Management",
		hint: "the tech boss running all the IT systems and company gear"
	},
	{
		id: 20,
		acronym: "CMM",
		meaning: "Capability Maturity Model",
		category: "Management",
		hint: "measuring how chaotic or clean a company's software dev process is"
	},
	{
		id: 21,
		acronym: "CMOS",
		meaning: "Complementary Metal-Oxide Semiconductor",
		category: "Hardware",
		hint: "tiny chip with a battery keeping your motherboard clock ticking when powered off"
	},
	{
		id: 22,
		acronym: "CMS",
		meaning: "Content Management System",
		category: "Software",
		hint: "platform to run blogs and websites without touching a line of code like WordPress"
	},
	{
		id: 23,
		acronym: "COO",
		meaning: "Chief Operating Officer",
		category: "Management",
		hint: "the boss making sure the day to day company grind actually happens"
	},
	{
		id: 24,
		acronym: "COP28",
		meaning: "Conference of the Parties of the UNFCCC",
		category: "General",
		hint: "world leaders meeting up to talk about saving the planet from boiling"
	},
	{
		id: 25,
		acronym: "CPRM",
		meaning: "Content Protection for Recorded Media",
		category: "Security",
		hint: "digital padlock stopping you from ripping recorded media onto storage cards"
	},
	{
		id: 26,
		acronym: "CRM",
		meaning: "Customer Relationship Management",
		category: "Management",
		hint: "tool to track every client interaction so sales reps dont drop the ball"
	},
	{
		id: 27,
		acronym: "CSR",
		meaning: "Corporate Social Responsibility",
		category: "Management",
		hint: "when a corporation tries to do good things for society and not just chase profit"
	},
	{
		id: 28,
		acronym: "DHCP",
		meaning: "Dynamic Host Configuration Protocol",
		category: "Networking",
		hint: "the router feature that automatically gives your phone an IP address"
	},
	{
		id: 29,
		acronym: "DNS",
		meaning: "Domain Name System",
		category: "Networking",
		hint: "internet phonebook turning website names into IP addresses"
	},
	{
		id: 30,
		acronym: "DRM",
		meaning: "Digital Rights Management",
		category: "Security",
		hint: "copyright locks keeping you from copying video games and media files"
	},
	{
		id: 31,
		acronym: "EAN",
		meaning: "European Article Number",
		category: "Hardware",
		hint: "the universal barcode slapped on literally everything you buy in a supermarket"
	},
	{
		id: 32,
		acronym: "EBCDIC",
		meaning: "Extended Binary Coded Decimal Interchange Code",
		category: "Software",
		hint: "ancient character system IBM used on big clunky mainframes"
	},
	{
		id: 33,
		acronym: "EDI",
		meaning: "Electronic Data Interchange",
		category: "Software",
		hint: "swapping orders and invoices between companies digitally without paperwork"
	},
	{
		id: 34,
		acronym: "ERP",
		meaning: "Enterprise Resource Planning",
		category: "Management",
		hint: "mega all-in-one software running a giant company's payroll, supply, and ops"
	},
	{
		id: 35,
		acronym: "ESSID",
		meaning: "Extended Service Set Identifier",
		category: "Networking",
		hint: "the Wi-Fi name you tap on when you are hunting for free internet"
	},
	{
		id: 36,
		acronym: "EUC",
		meaning: "Extended Unix Code",
		category: "Software",
		hint: "character encoding so Unix terminals can handle Japanese and Asian text"
	},
	{
		id: 37,
		acronym: "EVM",
		meaning: "Earned Value Management",
		category: "Management",
		hint: "project math checking if you are burning cash too fast or falling behind schedule"
	},
	{
		id: 38,
		acronym: "FAQ",
		meaning: "Frequently Asked Questions",
		category: "General",
		hint: "cheat sheet of common questions people always ask"
	},
	{
		id: 39,
		acronym: "Fintech",
		meaning: "Financial Technology",
		category: "Management",
		hint: "marrying code with money like Cash App or crypto wallets"
	},
	{
		id: 40,
		acronym: "FTP",
		meaning: "File Transfer Protocol",
		category: "Networking",
		hint: "old reliable way to sling files between servers over the network"
	},
	{
		id: 41,
		acronym: "GPS",
		meaning: "Global Positioning System",
		category: "Hardware",
		hint: "satellites in space telling Google Maps where you are lost at"
	},
	{
		id: 42,
		acronym: "GUI",
		meaning: "Graphical User Interface",
		category: "Software",
		hint: "clicking pretty buttons and windows instead of typing in a scary terminal"
	},
	{
		id: 43,
		acronym: "HDD",
		meaning: "Hard Disk Drive",
		category: "Hardware",
		hint: "classic magnetic spinning disk that rattles when it reads your files"
	},
	{
		id: 44,
		acronym: "HDMI",
		meaning: "High-Definition Multimedia Interface",
		category: "Hardware",
		hint: "the cable plugging your PC or console into your monitor with audio and video"
	},
	{
		id: 45,
		acronym: "HTTP",
		meaning: "Hypertext Transfer Protocol",
		category: "Networking",
		hint: "the backbone protocol fetching pages whenever you browse the web"
	},
	{
		id: 46,
		acronym: "ICANN",
		meaning: "Internet Corporation for Assigned Names and Numbers",
		category: "Networking",
		hint: "non-profit referee running the whole internet domain name game"
	},
	{
		id: 47,
		acronym: "IEC",
		meaning: "International Electrotechnical Commission",
		category: "General",
		hint: "global organization standardizing electrical gadgets and plugs"
	},
	{
		id: 48,
		acronym: "IEEE",
		meaning: "Institute of Electrical and Electronics Engineers",
		category: "General",
		hint: "the engineer guild that cooks up standards like Wi-Fi and Ethernet"
	},
	{
		id: 49,
		acronym: "IMAP",
		meaning: "Internet Message Access Protocol",
		category: "Networking",
		hint: "email protocol keeping your inbox in sync across your phone and laptop"
	},
	{
		id: 50,
		acronym: "IoT",
		meaning: "Internet of Things",
		category: "Hardware",
		hint: "putting Wi-Fi and sensors on everyday appliances like toasters and lightbulbs"
	},
	{
		id: 51,
		acronym: "IPO",
		meaning: "Initial Public Offering",
		category: "Management",
		hint: "when a private startup goes public on the stock market so anyone can buy shares"
	},
	{
		id: 52,
		acronym: "ISBN",
		meaning: "International Standard Book Number",
		category: "General",
		hint: "unique barcode number printed on the back of every book in the world"
	},
	{
		id: 53,
		acronym: "ISMS",
		meaning: "Information Security Management System (ISO 27000)",
		category: "Security",
		hint: "company rules and setup to stop sensitive company secrets from leaking"
	},
	{
		id: 54,
		acronym: "ISO",
		meaning: "International Organization for Standardization",
		category: "General",
		hint: "global crew that hands out quality certificates so products do not suck"
	},
	{
		id: 55,
		acronym: "ISP",
		meaning: "Internet Service Provider",
		category: "Networking",
		hint: "the telecom company you pay every month so you can browse the internet"
	},
	{
		id: 56,
		acronym: "ITIL",
		meaning: "Information Technology Infrastructure Library",
		category: "Management",
		hint: "textbook recipe of best practices for running corporate IT smoothly"
	},
	{
		id: 57,
		acronym: "ITSM",
		meaning: "Information Technology Service Management (ISO 20000)",
		category: "Management",
		hint: "organizing how tech support and IT services get delivered to workers"
	},
	{
		id: 58,
		acronym: "ITU",
		meaning: "International Telecommunication Union",
		category: "Networking",
		hint: "UN agency divvying up global radio waves and telecom rules"
	},
	{
		id: 59,
		acronym: "JIS",
		meaning: "Japanese Industrial Standards",
		category: "General",
		hint: "Japan's official stamp of approval on industrial manufacturing specs"
	},
	{
		id: 60,
		acronym: "JIT",
		meaning: "Just In Time (Inventory)",
		category: "Management",
		hint: "ordering parts at the exact last second so you never hoard cluttered stock"
	},
	{
		id: 61,
		acronym: "LPWA",
		meaning: "Low Power Wide Area (Network)",
		category: "Networking",
		hint: "low-power long-distance wireless network built for smart meters and sensors"
	},
	{
		id: 62,
		acronym: "M&A",
		meaning: "Mergers & Acquisition",
		category: "Management",
		hint: "when rich companies buy or fuse with other companies"
	},
	{
		id: 63,
		acronym: "MAC",
		meaning: "Media Access Control (MAC Address)",
		category: "Networking",
		hint: "permanent hardware address burned right into your network chip"
	},
	{
		id: 64,
		acronym: "MBO",
		meaning: "Management Buy-Out",
		category: "Management",
		hint: "when the in-house executive team buys the whole company from the owners"
	},
	{
		id: 65,
		acronym: "MDM",
		meaning: "Mobile Device Management",
		category: "Management",
		hint: "software corporate IT uses to lock down and wipe company phones remotely"
	},
	{
		id: 66,
		acronym: "MIDI",
		meaning: "Musical Instrument Digital Interface",
		category: "Hardware",
		hint: "digital language letting synths and electronic pianos talk to your PC"
	},
	{
		id: 67,
		acronym: "MRP",
		meaning: "Material Requirements Planning",
		category: "Management",
		hint: "math figuring out how many raw parts a factory needs to build stuff"
	},
	{
		id: 68,
		acronym: "MTBF",
		meaning: "Mean Time Between Failures",
		category: "Hardware",
		hint: "how long your gear is expected to run before it randomly breaks down"
	},
	{
		id: 69,
		acronym: "MTTR",
		meaning: "Mean Time To Repair",
		category: "Hardware",
		hint: "average time it takes a technician to fix broken equipment"
	},
	{
		id: 70,
		acronym: "OA",
		meaning: "Office Automation",
		category: "Software",
		hint: "using computers to automate mundane office paperwork and typing"
	},
	{
		id: 71,
		acronym: "OCR",
		meaning: "Optical Character Reader/Recognition",
		category: "Hardware",
		hint: "scanning an image and turning the text inside it into real editable letters"
	},
	{
		id: 72,
		acronym: "OEM",
		meaning: "Original Equipment Manufacturer",
		category: "Management",
		hint: "factory that actually builds the hardware another brand slaps their logo on"
	},
	{
		id: 73,
		acronym: "OMR",
		meaning: "Optical Mark Reader/Recognition",
		category: "Hardware",
		hint: "scanner grading those bubble test sheets you filled with a pencil"
	},
	{
		id: 74,
		acronym: "OSS",
		meaning: "Open Source Software",
		category: "Software",
		hint: "software where anyone can peek at the code, tweak it, and share it for free"
	},
	{
		id: 75,
		acronym: "PaaS",
		meaning: "Platform as a Service",
		category: "Software",
		hint: "cloud setup giving devs servers and databases without managing hardware"
	},
	{
		id: 76,
		acronym: "PDCA",
		meaning: "Plan, Do, Check, Act",
		category: "Management",
		hint: "endless 4-step loop for testing and improving workflows"
	},
	{
		id: 77,
		acronym: "PERT",
		meaning: "Program Evaluation and Review Technique",
		category: "Management",
		hint: "chart tool to figure out the fastest realistic timeline to finish a giant project"
	},
	{
		id: 78,
		acronym: "POP",
		meaning: "Post Office Protocol",
		category: "Networking",
		hint: "old email protocol that downloads messages locally and wipes them off the server"
	},
	{
		id: 79,
		acronym: "POS",
		meaning: "Point-Of-Sales",
		category: "Management",
		hint: "register terminal where you tap your card at a store checkout counter"
	},
	{
		id: 80,
		acronym: "PPM",
		meaning: "Product Portfolio Management",
		category: "Management",
		hint: "birds-eye view tracking all ongoing projects and budget allocations"
	},
	{
		id: 81,
		acronym: "QMS",
		meaning: "Quality Management System (ISO 9000)",
		category: "Management",
		hint: "formal system making sure products actually meet quality standards"
	},
	{
		id: 82,
		acronym: "QR Code",
		meaning: "Quick Response Code",
		category: "Software",
		hint: "pixel square you point your phone camera at to instantly open a link"
	},
	{
		id: 83,
		acronym: "RAD",
		meaning: "Rapid Application Development",
		category: "Software",
		hint: "coding quick prototypes fast instead of planning for months"
	},
	{
		id: 84,
		acronym: "RAID",
		meaning: "Redundant Array of Independent/Inexpensive Disks",
		category: "Hardware",
		hint: "grouping multiple drives together for crazy speed or backup safety"
	},
	{
		id: 85,
		acronym: "RFI",
		meaning: "Request For Information",
		category: "Management",
		hint: "asking vendors what tech they have before deciding what to buy"
	},
	{
		id: 86,
		acronym: "RFID",
		meaning: "Radio Frequency Identification",
		category: "Hardware",
		hint: "contactless chip tech in hotel keycards and transit passes"
	},
	{
		id: 87,
		acronym: "RFP",
		meaning: "Request For Proposal",
		category: "Management",
		hint: "formal document saying we need this project done, send us your pitch and price"
	},
	{
		id: 88,
		acronym: "RPA",
		meaning: "Robotic Process Automation",
		category: "Software",
		hint: "software bots clicking through repetitive desktop chores so humans dont have to"
	},
	{
		id: 89,
		acronym: "RSS",
		meaning: "Really Simple Syndication",
		category: "Software",
		hint: "web feed letting you subscribe to blog and news updates in one reader"
	},
	{
		id: 90,
		acronym: "SaaS",
		meaning: "Software as a Service",
		category: "Software",
		hint: "apps you run in your browser on a monthly subscription like Figma or Spotify"
	},
	{
		id: 91,
		acronym: "SCM",
		meaning: "Supply Chain Management",
		category: "Management",
		hint: "tracking the whole journey of goods from factory parts to customer doorstep"
	},
	{
		id: 92,
		acronym: "SDGs",
		meaning: "Sustainable Development Goals",
		category: "Management",
		hint: "seventeen global goals from the UN to tackle poverty and save the planet"
	},
	{
		id: 93,
		acronym: "SEO",
		meaning: "Search Engine Optimization",
		category: "Software",
		hint: "tricks to make Google put your site at the top of search results"
	},
	{
		id: 94,
		acronym: "SFA",
		meaning: "Sales Force Automation",
		category: "Management",
		hint: "software helping sales teams log calls, track leads, and close deals"
	},
	{
		id: 95,
		acronym: "SLA",
		meaning: "Service Level Agreement",
		category: "Management",
		hint: "contract promise of how much uptime and fast support a client gets"
	},
	{
		id: 96,
		acronym: "SLM",
		meaning: "Service Level Management",
		category: "Management",
		hint: "keeping an eye on service level promises so they never get broken"
	},
	{
		id: 97,
		acronym: "S/MIME",
		meaning: "Secure/Multipurpose Internet Mail Extensions",
		category: "Security",
		hint: "encrypting and digitally signing emails so nobody snoops or tampers with them"
	},
	{
		id: 98,
		acronym: "SMTP",
		meaning: "Simple Mail Transfer Protocol",
		category: "Networking",
		hint: "mailman protocol responsible for pushing outgoing emails across the internet"
	},
	{
		id: 99,
		acronym: "SNMP",
		meaning: "Simple Network Management Protocol",
		category: "Networking",
		hint: "protocol network admins use to monitor routers, switches, and traffic"
	},
	{
		id: 100,
		acronym: "SNS",
		meaning: "Social Networking Service",
		category: "Software",
		hint: "apps like X, Instagram, and TikTok where you post and scroll feeds"
	},
	{
		id: 101,
		acronym: "SSD",
		meaning: "Solid-State Drive",
		category: "Hardware",
		hint: "super fast storage drive with flash memory and zero moving parts"
	},
	{
		id: 102,
		acronym: "SSL",
		meaning: "Secure Sockets Layer",
		category: "Security",
		hint: "the vintage encryption protocol that first gave web browsers the lock icon"
	},
	{
		id: 103,
		acronym: "SWOT",
		meaning: "Strengths, Weaknesses, Opportunities & Threats",
		category: "Management",
		hint: "brainstorming grid checking what you are good at vs what could wreck you"
	},
	{
		id: 104,
		acronym: "TCO",
		meaning: "Total Cost of Ownership",
		category: "Management",
		hint: "realistic price tag of owning tech including maintenance, power, and fixes"
	},
	{
		id: 105,
		acronym: "TCP",
		meaning: "Transmission Control Protocol",
		category: "Networking",
		hint: "protocol making sure data packets arrive in exact order with zero lost bits"
	},
	{
		id: 106,
		acronym: "TIFF",
		meaning: "Tagged Image File Format",
		category: "Software",
		hint: "heavyweight uncompressed image format used for high-res graphics and scans"
	},
	{
		id: 107,
		acronym: "TLD",
		meaning: "Top-Level Domain",
		category: "Networking",
		hint: "the very end of a website domain like dot com or dot dev"
	},
	{
		id: 108,
		acronym: "TLS",
		meaning: "Transport Layer Security",
		category: "Security",
		hint: "modern encryption standard protecting HTTPS connections everywhere"
	},
	{
		id: 109,
		acronym: "TQC",
		meaning: "Total Quality Control",
		category: "Management",
		hint: "company-wide effort to keep defects at zero across every team"
	},
	{
		id: 110,
		acronym: "TQM",
		meaning: "Total Quality Management",
		category: "Management",
		hint: "long-term business mindset obsessed with making customers happy and refining quality"
	},
	{
		id: 111,
		acronym: "UML",
		meaning: "Unified Modeling Language",
		category: "Software",
		hint: "visual diagrams software engineers draw to sketch out how code architecture works"
	},
	{
		id: 112,
		acronym: "UNESCO",
		meaning: "United Nations Educational, Scientific and Cultural Org.",
		category: "General",
		hint: "UN squad preserving world heritage sites, science, and cultural history"
	},
	{
		id: 113,
		acronym: "UPS",
		meaning: "Uninterruptible Power Supply",
		category: "Hardware",
		hint: "backup battery brick that keeps your PC alive during a blackout"
	},
	{
		id: 114,
		acronym: "VR",
		meaning: "Virtual Reality",
		category: "Software",
		hint: "strapping a headset to your face to dive into a 3D digital world"
	},
	{
		id: 115,
		acronym: "W3C",
		meaning: "World Wide Web Consortium",
		category: "Networking",
		hint: "international group setting the core standards for HTML and CSS"
	},
	{
		id: 116,
		acronym: "WBS",
		meaning: "Work Breakdown Structure",
		category: "Management",
		hint: "chopping up a massive project into bite-sized actionable task chunks"
	},
	{
		id: 117,
		acronym: "WHO",
		meaning: "World Health Organization",
		category: "General",
		hint: "UN health agency tracking global diseases and outbreaks"
	},
	{
		id: 118,
		acronym: "WPA",
		meaning: "Wi-Fi Protected Access",
		category: "Security",
		hint: "security protocol stopping neighbors from leeching your home Wi-Fi"
	}
];
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
			$$renderer.push(`<div class="overlay svelte-bjjrro" role="button" tabindex="0"><div class="sheet-container svelte-bjjrro"><div class="sheet-header svelte-bjjrro"><h2 class="title svelte-bjjrro">DIRECTORY</h2> <button class="close-btn svelte-bjjrro" aria-label="Close">`);
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
				$$renderer.push(`<div class="list-row svelte-bjjrro"><div class="acronym-col svelte-bjjrro"><span class="acronym-code svelte-bjjrro">${escape_html(item.acronym)}</span> `);
				if (masteredIds.has(item.id)) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<span class="mastered-icon svelte-bjjrro">`);
					Check($$renderer, {
						size: 14,
						strokeWidth: 2.5
					});
					$$renderer.push(`<!----></span>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div> <div class="meaning-col svelte-bjjrro">${escape_html(item.meaning)}</div></div>`);
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
		function pickNextQuestion() {
			const unmastered = ACRONYMS.filter((a) => !masteredIds.has(a.id));
			const pool = unmastered.length > 0 ? unmastered : ACRONYMS;
			let nextIdx = Math.floor(Math.random() * pool.length);
			let targetItem = pool[nextIdx];
			if (targetItem.id === currentItem()?.id && ACRONYMS.length > 1) targetItem = pool[(nextIdx + 1) % pool.length];
			currentItemIndex = ACRONYMS.findIndex((a) => a.id === targetItem.id);
		}
		function handleAnswer(detail) {
			const { status, correct, points } = detail;
			totalAnswered += 1;
			if (correct || status === "correct") {
				correctAnswered += 1;
				streak += 1;
				if (streak > maxStreak) maxStreak = streak;
				const earned = Math.round(points * multiplier());
				score += earned;
				masteredIds.add(currentItem().id);
				saveMastered();
				if (streak === 5 || streak === 10 || streak === 15) playStreakBonusSound();
			} else if (status === "close" || status === "almost") {
				score += points;
				streak = 0;
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
