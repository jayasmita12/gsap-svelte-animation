import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import gsap$3 from "gsap";
const Dragable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-full h-screen flex flex-col space-y-4 justify-center items-center"}"><h1 class="${"text-xl"}">DRAGABLE</h1>
    <p class="${"text-xl font-bold text-green-600"}">Put the item into the bag</p>
    <div class="${"bg-black w-[60%] relative h-[50%]"}" id="${"groups"}"><div class="${"text-green-500 p-4"}"><img src="${"shop.png"}" class="${"w-28 h-28"}" id="${"bag"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"mc.png"}" class="${"w-28 h-28 img absolute right-[20%] top-[10%]"}" id="${"orange"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"bottle.png"}" class="${"w-28 h-2w-28 img absolute right-[10%] left-[50%]"}" id="${"bottle"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"hamburger.png"}" class="${"w-28 h-2w-28 img absolute right-[10%] bottom-[10%]"}" id="${"hamburger"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"joy-con.png"}" class="${"w-28 h-2w-28 img absolute left-[30%] top-[10%]"}" id="${"joy-con"}" alt="${""}"></div>
        <div class="${"text-green-500 icon"}"><img src="${"fries.png"}" class="${"w-28 h-2w-28 img absolute left-[10%] bottom-[10%]"}" id="${"fries"}" alt="${""}"></div></div></div>`;
});
const Flip2_svelte_svelte_type_style_lang = "";
const Flip3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-lg space-y-5 mx-auto py-10"}"><h1 class="${"text-xl text-center"}">FLIP</h1>

    <button class="${"px-5 py-1 bg-teal-600 rounded-md"}">Fit</button>
    <div class="${"border-2 border-red-900 text-center p-5 space-y-3 containers"}"><div class="${"px-7 py-2 bg-neutral-400 child1"}">Child1</div>
        <div class="${"px-7 py-2 bg-neutral-400 child2"}">Child2</div></div>
    <div class="${"bg-blue-400 px-8 py-5 mb-10 text-center target"}">Target</div></div>`;
});
const MotionPath = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full py-32"}"><center><h1 class="${"text-xl"}">MOTION PATH</h1>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"0.1"}" stroke="${"currentColor"}" class="${"w-[50%] h-[50%] self-center "}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"0.1"}" stroke="${"currentColor"}" class="${"w-[50%] h-[50%] self-center stroke-violet-800 "}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" id="${"path"}" d="${"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"}"></path><g id="${"rect"}"><rect width="${"1.7"}" height="${"0.2"}" fill="${""}" class="${"stroke-pink-500 shadow-2xl fill-pink-500"}"></rect></g></svg></svg></center></div>`;
});
const Observer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-full border-2 h-screen flex justify-center bg-black overflow-hidden"}" id="${"box"}"><svg viewBox="${"0 0 284 284"}"><path d="${"M141.48 268.08c-68.91 0-125.62-56.7-125.62-125.62 0-68.91 56.7-125.62 125.62-125.62 68.91 0 125.62 56.7 125.62 125.62v.01c-.08 68.88-56.74 125.54-125.62 125.61Z"}" fill="${"none"}" stroke="${"#fff"}" opacity="${"1"}" stroke-width="${"10"}"></path><g id="${"arrow"}" class="${"arrow"}" fill-rule="${"nonzero"}"><path d="${"M141.48 268.08c-68.91 0-125.62-56.7-125.62-125.62 0-68.91 56.7-125.62 125.62-125.62 68.91 0 125.62 56.7 125.62 125.62v.01c-.08 68.88-56.74 125.54-125.62 125.61Z"}" fill="${"#0b0e1e"}" opacity="${"0"}"></path><path d="${"M142.18 122.89V40.83l-14.61 82.06h14.61Z"}" fill="${"#60ad30"}"></path><path d="${"M142.18 122.89V40.83l14.6 82.06h-14.6Z"}" fill="${"#8abe23"}"></path><path d="${"M140.75 169.9h-.01a28.3 28.3 0 0 1-28.17-28.17 28.3 28.3 0 0 1 28.17-28.17 28.3 28.3 0 0 1 28.17 28.17v.01a28.3 28.3 0 0 1-28.16 28.16Z"}" fill="${"#60ad30"}"></path><path d="${"M140.75 156.78c-8.23 0-15-6.77-15-15s6.77-15 15-15 15 6.77 15 15a15.12 15.12 0 0 1-15 15Z"}" fill="${"#8abe23"}"></path></g></svg> 
</div>`;
});
/*!
 * strings: 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function getText(e) {
  var type = e.nodeType, result = "";
  if (type === 1 || type === 9 || type === 11) {
    if (typeof e.textContent === "string") {
      return e.textContent;
    } else {
      for (e = e.firstChild; e; e = e.nextSibling) {
        result += getText(e);
      }
    }
  } else if (type === 3 || type === 4) {
    return e.nodeValue;
  }
  return result;
}
/*!
 * SplitText: 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _doc$3, _win$3, _coreInitted$3, _stripExp = /(?:\r|\n|\t\t)/g, _multipleSpacesExp = /(?:\s\s+)/g, _initCore$1 = function _initCore() {
  _doc$3 = document;
  _win$3 = window;
  _coreInitted$3 = 1;
}, _getComputedStyle$1 = function _getComputedStyle(element) {
  return _win$3.getComputedStyle(element);
}, _isArray = Array.isArray, _slice = [].slice, _toArray$2 = function _toArray(value, leaveStrings) {
  var type;
  return _isArray(value) ? value : (type = typeof value) === "string" && !leaveStrings && value ? _slice.call(_doc$3.querySelectorAll(value), 0) : value && type === "object" && "length" in value ? _slice.call(value, 0) : value ? [value] : [];
}, _isAbsolute = function _isAbsolute2(vars) {
  return vars.position === "absolute" || vars.absolute === true;
}, _findSpecialChars = function _findSpecialChars2(text, chars) {
  var i = chars.length, s;
  while (--i > -1) {
    s = chars[i];
    if (text.substr(0, s.length) === s) {
      return s.length;
    }
  }
}, _divStart = " style='position:relative;display:inline-block;'", _cssClassFunc = function _cssClassFunc2(cssClass, tag) {
  if (cssClass === void 0) {
    cssClass = "";
  }
  var iterate = ~cssClass.indexOf("++"), num = 1;
  if (iterate) {
    cssClass = cssClass.split("++").join("");
  }
  return function() {
    return "<" + tag + _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
  };
}, _swapText = function _swapText2(element, oldText, newText) {
  var type = element.nodeType;
  if (type === 1 || type === 9 || type === 11) {
    for (element = element.firstChild; element; element = element.nextSibling) {
      _swapText2(element, oldText, newText);
    }
  } else if (type === 3 || type === 4) {
    element.nodeValue = element.nodeValue.split(oldText).join(newText);
  }
}, _pushReversed = function _pushReversed2(a, merge) {
  var i = merge.length;
  while (--i > -1) {
    a.push(merge[i]);
  }
}, _isBeforeWordDelimiter = function _isBeforeWordDelimiter2(e, root, wordDelimiter) {
  var next;
  while (e && e !== root) {
    next = e._next || e.nextSibling;
    if (next) {
      return next.textContent.charAt(0) === wordDelimiter;
    }
    e = e.parentNode || e._parent;
  }
}, _deWordify = function _deWordify2(e) {
  var children = _toArray$2(e.childNodes), l = children.length, i, child;
  for (i = 0; i < l; i++) {
    child = children[i];
    if (child._isSplit) {
      _deWordify2(child);
    } else {
      if (i && child.previousSibling && child.previousSibling.nodeType === 3) {
        child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
        e.removeChild(child);
      } else if (child.nodeType !== 3) {
        e.insertBefore(child.firstChild, child);
        e.removeChild(child);
      }
    }
  }
}, _getStyleAsNumber = function _getStyleAsNumber2(name, computedStyle) {
  return parseFloat(computedStyle[name]) || 0;
}, _setPositionsAfterSplit = function _setPositionsAfterSplit2(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
  var cs = _getComputedStyle$1(element), paddingLeft = _getStyleAsNumber("paddingLeft", cs), lineOffsetY = -999, borderTopAndBottom = _getStyleAsNumber("borderBottomWidth", cs) + _getStyleAsNumber("borderTopWidth", cs), borderLeftAndRight = _getStyleAsNumber("borderLeftWidth", cs) + _getStyleAsNumber("borderRightWidth", cs), padTopAndBottom = _getStyleAsNumber("paddingTop", cs) + _getStyleAsNumber("paddingBottom", cs), padLeftAndRight = _getStyleAsNumber("paddingLeft", cs) + _getStyleAsNumber("paddingRight", cs), lineThreshold = _getStyleAsNumber("fontSize", cs) * (vars.lineThreshold || 0.2), textAlign = cs.textAlign, charArray = [], wordArray = [], lineArray = [], wordDelimiter = vars.wordDelimiter || " ", tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", lines = allLines && ~types.indexOf("lines") ? [] : null, words = ~types.indexOf("words"), chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), linesClass = vars.linesClass, iterateLine = ~(linesClass || "").indexOf("++"), spaceNodesToRemove = [], isFlex = cs.display === "flex", prevInlineDisplay = element.style.display, i, j, l, node, nodes, isChild, curLine, addWordSpaces, style, lineNode, lineWidth, offset;
  iterateLine && (linesClass = linesClass.split("++").join(""));
  isFlex && (element.style.display = "block");
  j = element.getElementsByTagName("*");
  l = j.length;
  nodes = [];
  for (i = 0; i < l; i++) {
    nodes[i] = j[i];
  }
  if (lines || absolute) {
    for (i = 0; i < l; i++) {
      node = nodes[i];
      isChild = node.parentNode === element;
      if (isChild || absolute || chars && !words) {
        offset = node.offsetTop;
        if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i === 0)) {
          curLine = [];
          lines.push(curLine);
          lineOffsetY = offset;
        }
        if (absolute) {
          node._x = node.offsetLeft;
          node._y = offset;
          node._w = node.offsetWidth;
          node._h = node.offsetHeight;
        }
        if (lines) {
          if (node._isSplit && isChild || !chars && isChild || words && isChild || !words && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
            curLine.push(node);
            node._x -= paddingLeft;
            if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
              node._wordEnd = true;
            }
          }
          if (node.nodeName === "BR" && (node.nextSibling && node.nextSibling.nodeName === "BR" || i === 0)) {
            lines.push([]);
          }
        }
      }
    }
  }
  for (i = 0; i < l; i++) {
    node = nodes[i];
    isChild = node.parentNode === element;
    if (node.nodeName === "BR") {
      if (lines || absolute) {
        node.parentNode && node.parentNode.removeChild(node);
        nodes.splice(i--, 1);
        l--;
      } else if (!words) {
        element.appendChild(node);
      }
      continue;
    }
    if (absolute) {
      style = node.style;
      if (!words && !isChild) {
        node._x += node.parentNode._x;
        node._y += node.parentNode._y;
      }
      style.left = node._x + "px";
      style.top = node._y + "px";
      style.position = "absolute";
      style.display = "block";
      style.width = node._w + 1 + "px";
      style.height = node._h + "px";
    }
    if (!words && chars) {
      if (node._isSplit) {
        node._next = j = node.nextSibling;
        node.parentNode.appendChild(node);
        while (j && j.nodeType === 3 && j.textContent === " ") {
          node._next = j.nextSibling;
          node.parentNode.appendChild(j);
          j = j.nextSibling;
        }
      } else if (node.parentNode._isSplit) {
        node._parent = node.parentNode;
        if (!node.previousSibling && node.firstChild) {
          node.firstChild._isFirst = true;
        }
        if (node.nextSibling && node.nextSibling.textContent === " " && !node.nextSibling.nextSibling) {
          spaceNodesToRemove.push(node.nextSibling);
        }
        node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
        node.parentNode.removeChild(node);
        nodes.splice(i--, 1);
        l--;
      } else if (!isChild) {
        offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);
        node.parentNode._parent && node.parentNode._parent.appendChild(node);
        offset && node.parentNode.appendChild(_doc$3.createTextNode(" "));
        if (tag === "span") {
          node.style.display = "inline";
        }
        charArray.push(node);
      }
    } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
      wordArray.push(node);
    } else if (chars && !node._isSplit) {
      if (tag === "span") {
        node.style.display = "inline";
      }
      charArray.push(node);
    }
  }
  i = spaceNodesToRemove.length;
  while (--i > -1) {
    spaceNodesToRemove[i].parentNode.removeChild(spaceNodesToRemove[i]);
  }
  if (lines) {
    if (absolute) {
      lineNode = _doc$3.createElement(tag);
      element.appendChild(lineNode);
      lineWidth = lineNode.offsetWidth + "px";
      offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
      element.removeChild(lineNode);
    }
    style = element.style.cssText;
    element.style.cssText = "display:none;";
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    addWordSpaces = wordDelimiter === " " && (!absolute || !words && !chars);
    for (i = 0; i < lines.length; i++) {
      curLine = lines[i];
      lineNode = _doc$3.createElement(tag);
      lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
      if (linesClass) {
        lineNode.className = linesClass + (iterateLine ? i + 1 : "");
      }
      lineArray.push(lineNode);
      l = curLine.length;
      for (j = 0; j < l; j++) {
        if (curLine[j].nodeName !== "BR") {
          node = curLine[j];
          lineNode.appendChild(node);
          addWordSpaces && node._wordEnd && lineNode.appendChild(_doc$3.createTextNode(" "));
          if (absolute) {
            if (j === 0) {
              lineNode.style.top = node._y + "px";
              lineNode.style.left = paddingLeft + offset + "px";
            }
            node.style.top = "0px";
            if (offset) {
              node.style.left = node._x - offset + "px";
            }
          }
        }
      }
      if (l === 0) {
        lineNode.innerHTML = "&nbsp;";
      } else if (!words && !chars) {
        _deWordify(lineNode);
        _swapText(lineNode, String.fromCharCode(160), " ");
      }
      if (absolute) {
        lineNode.style.width = lineWidth;
        lineNode.style.height = node._h + "px";
      }
      element.appendChild(lineNode);
    }
    element.style.cssText = style;
  }
  if (absolute) {
    if (origHeight > element.clientHeight) {
      element.style.height = origHeight - padTopAndBottom + "px";
      if (element.clientHeight < origHeight) {
        element.style.height = origHeight + borderTopAndBottom + "px";
      }
    }
    if (origWidth > element.clientWidth) {
      element.style.width = origWidth - padLeftAndRight + "px";
      if (element.clientWidth < origWidth) {
        element.style.width = origWidth + borderLeftAndRight + "px";
      }
    }
  }
  isFlex && (prevInlineDisplay ? element.style.display = prevInlineDisplay : element.style.removeProperty("display"));
  _pushReversed(allChars, charArray);
  words && _pushReversed(allWords, wordArray);
  _pushReversed(allLines, lineArray);
}, _splitRawText = function _splitRawText2(element, vars, wordStart, charStart) {
  var tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), wordDelimiter = vars.wordDelimiter || " ", space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ", wordEnd = "</" + tag + ">", wordIsOpen = 1, specialChars = vars.specialChars ? typeof vars.specialChars === "function" ? vars.specialChars : _findSpecialChars : null, text, splitText, i, j, l, character, hasTagStart, testResult, container = _doc$3.createElement("div"), parent = element.parentNode;
  parent.insertBefore(container, element);
  container.textContent = element.nodeValue;
  parent.removeChild(element);
  element = container;
  text = getText(element);
  hasTagStart = text.indexOf("<") !== -1;
  if (vars.reduceWhiteSpace !== false) {
    text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
  }
  if (hasTagStart) {
    text = text.split("<").join("{{LT}}");
  }
  l = text.length;
  splitText = (text.charAt(0) === " " ? space : "") + wordStart();
  for (i = 0; i < l; i++) {
    character = text.charAt(i);
    if (specialChars && (testResult = specialChars(text.substr(i), vars.specialChars))) {
      character = text.substr(i, testResult || 1);
      splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
      i += testResult - 1;
    } else if (character === wordDelimiter && text.charAt(i - 1) !== wordDelimiter && i) {
      splitText += wordIsOpen ? wordEnd : "";
      wordIsOpen = 0;
      while (text.charAt(i + 1) === wordDelimiter) {
        splitText += space;
        i++;
      }
      if (i === l - 1) {
        splitText += space;
      } else if (text.charAt(i + 1) !== ")") {
        splitText += space + wordStart();
        wordIsOpen = 1;
      }
    } else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
      splitText += chars ? charStart() + "{{LT}}</" + tag + ">" : "{{LT}}";
      i += 5;
    } else if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i + 1) >= 65024 && text.charCodeAt(i + 1) <= 65039) {
      j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
      splitText += chars && character !== " " ? charStart() + text.substr(i, j) + "</" + tag + ">" : text.substr(i, j);
      i += j - 1;
    } else {
      splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
    }
  }
  element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
  hasTagStart && _swapText(parent, "{{LT}}", "<");
}, _split = function _split2(element, vars, wordStart, charStart) {
  var children = _toArray$2(element.childNodes), l = children.length, absolute = _isAbsolute(vars), i, child;
  if (element.nodeType !== 3 || l > 1) {
    vars.absolute = false;
    for (i = 0; i < l; i++) {
      child = children[i];
      child._next = child._isFirst = child._parent = child._wordEnd = null;
      if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
        if (absolute && child.nodeType !== 3 && _getComputedStyle$1(child).display === "inline") {
          child.style.display = "inline-block";
          child.style.position = "relative";
        }
        child._isSplit = true;
        _split2(child, vars, wordStart, charStart);
      }
    }
    vars.absolute = absolute;
    element._isSplit = true;
    return;
  }
  _splitRawText(element, vars, wordStart, charStart);
};
var SplitText = /* @__PURE__ */ function() {
  function SplitText2(element, vars) {
    _coreInitted$3 || _initCore$1();
    this.elements = _toArray$2(element);
    this.chars = [];
    this.words = [];
    this.lines = [];
    this._originals = [];
    this.vars = vars || {};
    this.split(vars);
  }
  var _proto = SplitText2.prototype;
  _proto.split = function split(vars) {
    this.isSplit && this.revert();
    this.vars = vars = vars || this.vars;
    this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
    var i = this.elements.length, tag = vars.tag ? vars.tag : vars.span ? "span" : "div", wordStart = _cssClassFunc(vars.wordsClass, tag), charStart = _cssClassFunc(vars.charsClass, tag), origHeight, origWidth, e;
    while (--i > -1) {
      e = this.elements[i];
      this._originals[i] = e.innerHTML;
      origHeight = e.clientHeight;
      origWidth = e.clientWidth;
      _split(e, vars, wordStart, charStart);
      _setPositionsAfterSplit(e, vars, this.chars, this.words, this.lines, origWidth, origHeight);
    }
    this.chars.reverse();
    this.words.reverse();
    this.lines.reverse();
    this.isSplit = true;
    return this;
  };
  _proto.revert = function revert() {
    var originals = this._originals;
    if (!originals) {
      throw "revert() call wasn't scoped properly.";
    }
    this.elements.forEach(function(e, i) {
      return e.innerHTML = originals[i];
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
    this.isSplit = false;
    return this;
  };
  SplitText2.create = function create(element, vars) {
    return new SplitText2(element, vars);
  };
  return SplitText2;
}();
SplitText.version = "3.10.4";
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap$2, _coreInitted$2, _win$2, _doc$2, _docEl$2, _body$2, _isTouch, _pointerType, ScrollTrigger$2, _root$1, _normalizer$1, _eventTypes, _getGSAP$2 = function _getGSAP() {
  return gsap$2 || typeof window !== "undefined" && (gsap$2 = window.gsap) && gsap$2.registerPlugin && gsap$2;
}, _startup$1 = 1, _observers = [], _scrollers = [], _proxies = [], _getTime$1 = Date.now, _bridge = function _bridge2(name, value) {
  return value;
}, _integrate = function _integrate2() {
  var core = ScrollTrigger$2.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;
  _bridge = function _bridge3(name, value) {
    return data[name](value);
  };
}, _getProxyProp = function _getProxyProp2(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
}, _isViewport$1 = function _isViewport(el) {
  return !!~_root$1.indexOf(el);
}, _addListener$1 = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
}, _removeListener$1 = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
}, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll$1 = function _onScroll() {
  return _normalizer$1 && _normalizer$1.isPressed || _scrollers.cache++;
}, _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
  var cachingFunc = function cachingFunc2(value) {
    if (value || value === 0) {
      _startup$1 && (_win$2.history.scrollRestoration = "manual");
      var isNormalizing = _normalizer$1 && _normalizer$1.isPressed;
      value = cachingFunc2.v = Math.round(value) || (_normalizer$1 && _normalizer$1.iOS ? 1 : 0);
      f(value);
      cachingFunc2.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value);
    } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
      cachingFunc2.cacheID = _scrollers.cache;
      cachingFunc2.v = f();
    }
    return cachingFunc2.v + cachingFunc2.offset;
  };
  cachingFunc.offset = 0;
  return f && cachingFunc;
}, _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win$2.scrollTo(value, _vertical.sc()) : _win$2.pageXOffset || _doc$2[_scrollLeft] || _docEl$2[_scrollLeft] || _body$2[_scrollLeft] || 0;
  })
}, _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win$2.scrollTo(_horizontal.sc(), value) : _win$2.pageYOffset || _doc$2[_scrollTop] || _docEl$2[_scrollTop] || _body$2[_scrollTop] || 0;
  })
}, _getTarget = function _getTarget2(t) {
  return gsap$2.utils.toArray(t)[0] || (typeof t === "string" && gsap$2.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
}, _getScrollFunc = function _getScrollFunc2(element, _ref) {
  var s = _ref.s, sc = _ref.sc;
  var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
  !~i && (i = _scrollers.push(element) - 1);
  return _scrollers[i + offset] || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport$1(element) ? sc : _scrollCacheFunc(function(value) {
    return arguments.length ? element[s] = value : element[s];
  })));
}, _getVelocityProp$1 = function _getVelocityProp(value, minTimeRefresh, useDelta) {
  var v1 = value, v2 = value, t1 = _getTime$1(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
    var t = _getTime$1();
    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value2;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value2;
    } else {
      v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
    }
  }, reset = function reset2() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  }, getVelocity = function getVelocity2(latestValue) {
    var tOld = t2, vOld = v2, t = _getTime$1();
    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
  };
  return {
    update,
    reset,
    getVelocity
  };
}, _getEvent = function _getEvent2(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
}, _getAbsoluteMax = function _getAbsoluteMax2(a) {
  var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
}, _setScrollTrigger = function _setScrollTrigger2() {
  ScrollTrigger$2 = gsap$2.core.globals().ScrollTrigger;
  ScrollTrigger$2 && ScrollTrigger$2.core && _integrate();
}, _initCore2 = function _initCore3(core) {
  gsap$2 = core || _getGSAP$2();
  if (gsap$2 && typeof document !== "undefined" && document.body) {
    _win$2 = window;
    _doc$2 = document;
    _docEl$2 = _doc$2.documentElement;
    _body$2 = _doc$2.body;
    _root$1 = [_win$2, _doc$2, _docEl$2, _body$2];
    gsap$2.utils.clamp;
    _pointerType = "onpointerenter" in _body$2 ? "pointer" : "mouse";
    _isTouch = Observer.isTouch = _win$2.matchMedia && _win$2.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win$2 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl$2 ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl$2) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function() {
      return _startup$1 = 0;
    }, 500);
    _setScrollTrigger();
    _coreInitted$2 = 1;
  }
  return _coreInitted$2;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /* @__PURE__ */ function() {
  function Observer2(vars) {
    this.init(vars);
  }
  var _proto = Observer2.prototype;
  _proto.init = function init(vars) {
    _coreInitted$2 || _initCore2(gsap$2) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger$2 || _setScrollTrigger();
    var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl$2;
    this.vars = vars;
    ignore && (ignore = gsap$2.utils.toArray(ignore));
    tolerance = tolerance || 0;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win$2.getComputedStyle(_body$2).lineHeight) || 22);
    var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport$1(target), ownerDoc = target.ownerDocument || _doc$2, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
      return onClickTime = _getTime$1();
    }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
      return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    }, onStopFunc = function onStopFunc2() {
      self._vx.reset();
      self._vy.reset();
      onStopDelayedCall.pause();
      onStop && onStop(self);
    }, update = function update2() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }
      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }
      if (moved || dragged) {
        onMove && onMove(self);
        onLockAxis && locked && onLockAxis(self);
        if (dragged) {
          onDrag(self);
          dragged = false;
        }
        moved = locked = false;
      }
      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }
      id = 0;
    }, onDelta = function onDelta2(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;
      self._vx.update(x);
      self._vy.update(y);
      debounce ? id || (id = requestAnimationFrame(update)) : update();
    }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
      if (axis !== "y") {
        deltaX[2] += x;
        self._vx.update(x, true);
      }
      if (axis !== "x") {
        deltaY[2] += y;
        self._vy.update(y, true);
      }
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }
      debounce ? id || (id = requestAnimationFrame(update)) : update();
    }, _onDrag = function _onDrag2(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
      self.x = x;
      self.y = y;
      if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
        onDrag && (dragged = true);
        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
        isDragging || onDragStart && onDragStart(self);
      }
    }, _onPress = self.onPress = function(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e);
      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;
      self._vx.reset();
      self._vy.reset();
      _addListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    }, _onRelease = function _onRelease2(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
      var wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
      if (!wasDragging) {
        self._vx.reset();
        self._vy.reset();
        if (preventDefault && allowClicks) {
          gsap$2.delayedCall(0.08, function() {
            if (_getTime$1() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win$2, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }
      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, wasDragging);
    }, _onGestureStart = function _onGestureStart2(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    }, _onGestureEnd = function _onGestureEnd2() {
      return (self.isGesturing = false) || onGestureEnd(self);
    }, onScroll = function onScroll2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = scrollFuncX(), y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    }, _onWheel = function _onWheel2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win$2.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    }, _onMove = function _onMove2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    }, _onHover = function _onHover2(e) {
      self.event = e;
      onHover(self);
    }, _onHoverEnd = function _onHoverEnd2(e) {
      self.event = e;
      onHoverEnd(self);
    }, _onClick = function _onClick2(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };
    onStopDelayedCall = self._dc = gsap$2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp$1(0, 50, true);
    self._vy = _getVelocityProp$1(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;
    self.enable = function(e) {
      if (!self.isEnabled) {
        _addListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
        type.indexOf("scroll") >= 0 && _addListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
        type.indexOf("wheel") >= 0 && _addListener$1(target, "wheel", _onWheel, preventDefault, capture);
        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener$1(target, _eventTypes[0], _onPress, preventDefault, capture);
          _addListener$1(ownerDoc, _eventTypes[2], _onRelease);
          _addListener$1(ownerDoc, _eventTypes[3], _onRelease);
          allowClicks && _addListener$1(target, "click", clickCapture, false, true);
          onClick && _addListener$1(target, "click", _onClick);
          onGestureStart && _addListener$1(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener$1(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener$1(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener$1(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener$1(target, _pointerType + "move", _onMove);
        }
        self.isEnabled = true;
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }
      return self;
    };
    self.disable = function() {
      if (self.isEnabled) {
        _observers.filter(function(o) {
          return o !== self && _isViewport$1(o.target);
        }).length || _removeListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
        if (self.isPressed) {
          self._vx.reset();
          self._vy.reset();
          _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }
        _removeListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
        _removeListener$1(target, "wheel", _onWheel, capture);
        _removeListener$1(target, _eventTypes[0], _onPress, capture);
        _removeListener$1(ownerDoc, _eventTypes[2], _onRelease);
        _removeListener$1(ownerDoc, _eventTypes[3], _onRelease);
        _removeListener$1(target, "click", clickCapture, true);
        _removeListener$1(target, "click", _onClick);
        _removeListener$1(ownerDoc, "gesturestart", _onGestureStart);
        _removeListener$1(ownerDoc, "gestureend", _onGestureEnd);
        _removeListener$1(target, _pointerType + "enter", _onHover);
        _removeListener$1(target, _pointerType + "leave", _onHoverEnd);
        _removeListener$1(target, _pointerType + "move", _onMove);
        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };
    self.kill = function() {
      self.disable();
      var i = _observers.indexOf(self);
      i >= 0 && _observers.splice(i, 1);
      _normalizer$1 === self && (_normalizer$1 = 0);
    };
    _observers.push(self);
    isNormalizer && _isViewport$1(target) && (_normalizer$1 = self);
    self.enable(event);
  };
  _createClass$1(Observer2, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);
  return Observer2;
}();
Observer.version = "3.10.4";
Observer.create = function(vars) {
  return new Observer(vars);
};
Observer.register = _initCore2;
Observer.getAll = function() {
  return _observers.slice();
};
Observer.getById = function(id) {
  return _observers.filter(function(o) {
    return o.vars.id === id;
  })[0];
};
_getGSAP$2() && gsap$2.registerPlugin(Observer);
/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap$1, _coreInitted$1, _win$1, _doc$1, _docEl$1, _body$1, _root, _resizeDelay, _toArray$1, _clamp$1, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _limitCallbacks, _startup = 1, _getTime = Date.now, _time1 = _getTime(), _lastScrollTime = 0, _enabled = 0, _pointerDownHandler = function _pointerDownHandler2() {
  return _pointerIsDown = 1;
}, _pointerUpHandler = function _pointerUpHandler2() {
  return _pointerIsDown = 0;
}, _passThrough = function _passThrough2(v) {
  return v;
}, _round$1 = function _round(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
}, _windowExists$1 = function _windowExists() {
  return typeof window !== "undefined";
}, _getGSAP$1 = function _getGSAP2() {
  return gsap$1 || _windowExists$1() && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
}, _isViewport2 = function _isViewport3(e) {
  return !!~_root.indexOf(e);
}, _getBoundsFunc = function _getBoundsFunc2(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport2(element) ? function() {
    _winOffsets.width = _win$1.innerWidth;
    _winOffsets.height = _win$1.innerHeight;
    return _winOffsets;
  } : function() {
    return _getBounds(element);
  });
}, _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
  var d = _ref.d, d2 = _ref.d2, a = _ref.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
    return a()[d];
  } : function() {
    return (isViewport ? _win$1["inner" + d2] : scroller["client" + d2]) || 0;
  };
}, _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
    return _winOffsets;
  };
}, _maxScroll = function _maxScroll2(element, _ref2) {
  var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport2(element) ? (_docEl$1[s] || _body$1[s]) - (_win$1["inner" + d2] || _docEl$1["client" + d2] || _body$1["client" + d2]) : element[s] - element["offset" + d2];
}, _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
}, _isString = function _isString2(value) {
  return typeof value === "string";
}, _isFunction = function _isFunction2(value) {
  return typeof value === "function";
}, _isNumber = function _isNumber2(value) {
  return typeof value === "number";
}, _isObject = function _isObject2(value) {
  return typeof value === "object";
}, _callIfFunc = function _callIfFunc2(value) {
  return _isFunction(value) && value();
}, _combineFunc = function _combineFunc2(f1, f2) {
  return function() {
    var result1 = _callIfFunc(f1), result2 = _callIfFunc(f2);
    return function() {
      _callIfFunc(result1);
      _callIfFunc(result2);
    };
  };
}, _endAnimation = function _endAnimation2(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
}, _callback = function _callback2(self, func) {
  if (self.enabled) {
    var result = func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
}, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle2 = function _getComputedStyle3(element) {
  return _win$1.getComputedStyle(element);
}, _makePositionable = function _makePositionable2(element) {
  var position = _getComputedStyle2(element).position;
  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
}, _setDefaults = function _setDefaults2(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }
  return obj;
}, _getBounds = function _getBounds2(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle2(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap$1.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
}, _getSize = function _getSize2(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
}, _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
  var a = [], labels = timeline.labels, duration = timeline.duration(), p;
  for (p in labels) {
    a.push(labels[p] / duration);
  }
  return a;
}, _getClosestLabel = function _getClosestLabel2(animation) {
  return function(value) {
    return gsap$1.utils.snap(_getLabelRatioArray(animation), value);
  };
}, _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
  var snap = gsap$1.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
    return a2 - b;
  });
  return a ? function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var i;
    if (!direction) {
      return snap(value);
    }
    if (direction > 0) {
      value -= threshold;
      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }
      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;
      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }
    return a[0];
  } : function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
}, _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
  return function(value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
}, _multiListener = function _multiListener2(func, element, types, callback) {
  return types.split(",").forEach(function(type) {
    return func(element, type, callback);
  });
}, _addListener2 = function _addListener3(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
}, _removeListener2 = function _removeListener3(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
}, _wheelListener = function _wheelListener2(func, el, scrollFunc) {
  return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
}, _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, _defaults = {
  toggleActions: "play",
  anticipatePin: 0
}, _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, _offsetToPx = function _offsetToPx2(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }
    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }
  return value;
}, _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
  var e = _doc$1.createElement("div"), useFixedPosition = _isViewport2(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body$1 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];
  _positionMarker(e, 0, direction, isStart);
  return e;
}, _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap$1.set(marker, vars);
}, _triggers = [], _ids = {}, _rafID, _sync = function _sync2() {
  return _getTime() - _lastScrollTime > 34 && _updateAll();
}, _onScroll2 = function _onScroll3() {
  if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body$1.clientWidth) {
    _scrollers.cache++;
    _rafID || (_rafID = requestAnimationFrame(_updateAll));
    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
}, _setBaseDimensions = function _setBaseDimensions2() {
  _baseScreenWidth = _win$1.innerWidth;
  _baseScreenHeight = _win$1.innerHeight;
}, _onResize = function _onResize2() {
  _scrollers.cache++;
  !_refreshing && !_ignoreResize && !_doc$1.fullscreenElement && !_doc$1.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win$1.innerWidth || Math.abs(_win$1.innerHeight - _baseScreenHeight) > _win$1.innerHeight * 0.25) && _resizeDelay.restart(true);
}, _listeners = {}, _emptyArray = [], _media = [], _creatingMedia, _lastMediaTick, _onMediaChange = function _onMediaChange2(e) {
  var tick = gsap$1.ticker.frame, matches = [], i = 0, index;
  if (_lastMediaTick !== tick || _startup) {
    _revertAll();
    for (; i < _media.length; i += 4) {
      index = _win$1.matchMedia(_media[i]).matches;
      if (index !== _media[i + 3]) {
        _media[i + 3] = index;
        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
      }
    }
    _revertRecorded();
    for (i = 0; i < matches.length; i++) {
      index = matches[i];
      _creatingMedia = _media[index];
      _media[index + 2] = _media[index + 1](e);
    }
    _creatingMedia = 0;
    _coreInitted$1 && _refreshAll(0, 1);
    _lastMediaTick = tick;
    _dispatch("matchMedia");
  }
}, _softRefresh = function _softRefresh2() {
  return _removeListener2(ScrollTrigger$1, "scrollEnd", _softRefresh2) || _refreshAll(true);
}, _dispatch = function _dispatch2(type) {
  return _listeners[type] && _listeners[type].map(function(f) {
    return f();
  }) || _emptyArray;
}, _savedStyles = [], _revertRecorded = function _revertRecorded2(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
}, _revertAll = function _revertAll2(kill, media) {
  var trigger;
  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];
    if (!media || trigger.media === media) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert();
      }
    }
  }
  media && _revertRecorded(media);
  media || _dispatch("revert");
}, _clearScrollMemory = function _clearScrollMemory2() {
  return _scrollers.cache++ && _scrollers.forEach(function(obj) {
    return typeof obj === "function" && (obj.rec = 0);
  });
}, _refreshingAll, _refreshID = 0, _refreshAll = function _refreshAll2(force, skipRevert) {
  if (_lastScrollTime && !force) {
    _addListener2(ScrollTrigger$1, "scrollEnd", _softRefresh);
    return;
  }
  _refreshingAll = true;
  var refreshInits = _dispatch("refreshInit");
  _sort && ScrollTrigger$1.sort();
  skipRevert || _revertAll();
  _triggers.slice(0).forEach(function(t) {
    return t.refresh();
  });
  _triggers.forEach(function(t) {
    return t.vars.end === "max" && t.setPositions(t.start, _maxScroll(t.scroller, t._dir));
  });
  refreshInits.forEach(function(result) {
    return result && result.render && result.render(-1);
  });
  _clearScrollMemory();
  _resizeDelay.pause();
  _refreshID++;
  _refreshingAll = false;
  _dispatch("refresh");
}, _lastScroll = 0, _direction = 1, _primary, _updateAll = function _updateAll2() {
  if (!_refreshingAll) {
    ScrollTrigger$1.isUpdating = true;
    _primary && _primary.update(0);
    var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
    _direction = _lastScroll > scroll ? -1 : 1;
    _lastScroll = scroll;
    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;
        _dispatch("scrollEnd");
      }
      _time2 = _time1;
      _time1 = time;
    }
    if (_direction < 0) {
      _i = l;
      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }
    ScrollTrigger$1.isUpdating = false;
  }
  _rafID = 0;
}, _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]), _swapPinOut = function _swapPinOut2(pin, spacer, state) {
  _setState(state);
  var cache = pin._gsap;
  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin.parentNode === spacer) {
    var parent = spacer.parentNode;
    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
}, _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
  if (pin.parentNode !== spacer) {
    var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }
    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = spacerStyle.flexBasis = "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
    _setState(spacerState);
    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    pin.parentNode.insertBefore(spacer, pin);
    spacer.appendChild(pin);
  }
}, _capsExp = /([A-Z])/g, _setState = function _setState2(state) {
  if (state) {
    var style = state.t.style, l = state.length, i = 0, p, value;
    (state.t._gsap || gsap$1.core.getCache(state.t)).uncache = 1;
    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];
      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
}, _getState = function _getState2(element) {
  var l = _stateProps.length, style = element.style, state = [], i = 0;
  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }
  state.t = element;
  return state;
}, _copyState = function _copyState2(state, override, omitOffsets) {
  var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }
  result.t = state.t;
  return result;
}, _winOffsets = {
  left: 0,
  top: 0
}, _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
  _isFunction(value) && (value = value(self));
  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }
  var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
  containerAnimation && containerAnimation.seek(0);
  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = value.split(" "), bounds, localOffset, globalOffset, display;
    element = _getTarget(trigger) || _body$1;
    bounds = _getBounds(element) || {};
    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle2(element).display === "none") {
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }
    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset;
  } else if (markerScroller) {
    _positionMarker(markerScroller, scrollerSize, direction, true);
  }
  if (marker) {
    var position = value + scrollerSize, isStart = marker._isStart;
    p1 = "scroll" + direction.d2;
    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body$1[p1], _docEl$1[p1]) : marker.parentNode[p1]) <= position + 1);
    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }
  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }
  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
}, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent2(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style, p, cs;
    if (parent === _body$1) {
      element._stOrig = style.cssText;
      cs = _getComputedStyle2(element);
      for (p in cs) {
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }
      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }
    gsap$1.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
}, _getTweenCreator = function _getTweenCreator2(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, lastScroll1, lastScroll2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
    initialValue = initialValue || getScroll();
    change2 = change1 && change2 || 0;
    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    lastScroll1 = Math.round(initialValue);
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;
    modifiers[prop] = function(value) {
      value = _round$1(getScroll());
      if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2 && Math.abs(value - lastScroll2) > 2) {
        tween.kill();
        getTween2.tween = 0;
      } else {
        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
      }
      lastScroll2 = lastScroll1;
      return lastScroll1 = _round$1(value);
    };
    vars.onComplete = function() {
      getTween2.tween = 0;
      onComplete && onComplete.call(tween);
    };
    tween = getTween2.tween = gsap$1.to(scroller, vars);
    return tween;
  };
  scroller[prop] = getScroll;
  getScroll.wheelHandler = function() {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };
  _addListener2(scroller, "wheel", getScroll.wheelHandler);
  return getTween;
};
var ScrollTrigger$1 = /* @__PURE__ */ function() {
  function ScrollTrigger2(vars, animation) {
    _coreInitted$1 || ScrollTrigger2.register(gsap$1) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    this.init(vars, animation);
  }
  var _proto = ScrollTrigger2.prototype;
  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true);
    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }
    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);
    var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win$1), scrollerCache = gsap$1.core.getCache(scroller), isViewport = _isViewport2(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle2(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
      return vars.onRefreshInit(self);
    }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
    self.media = _creatingMedia;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;
    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self);
    }
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
    self.scrubDuration = function(value) {
      scrubSmooth = _isNumber(value) && value;
      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap$1.to(animation, {
          ease: "expo",
          totalProgress: "+=0.001",
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };
    if (animation) {
      animation.vars.lazy = false;
      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }
    _triggers.push(self);
    if (snap) {
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }
      "scrollBehavior" in _body$1.style && gsap$1.set(isViewport ? [_body$1, _docEl$1] : scroller, {
        scrollBehavior: "auto"
      });
      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap$1.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp$1(snapDurClamp.min, snapDurClamp.max) : _clamp$1(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap$1.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
        var scroll = scrollFunc(), refreshedRecently = _getTime() - lastRefresh < 500, tween = tweenTo.tween;
        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1e3 || 0, change1 = gsap$1.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue = _clamp$1(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              return;
            }
            if (snap.inertia === false) {
              change1 = endValue - progress;
            }
            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }
    id && (_ids[id] = self);
    trigger = self.trigger = _getTarget(trigger || pin);
    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : _getTarget(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });
    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle2(pin.parentNode).display === "flex" ? false : _padding);
      self.pin = pin;
      vars.force3D !== false && gsap$1.set(pin, {
        force3D: true
      });
      pinCache = gsap$1.core.getCache(pin);
      if (!pinCache.spacer) {
        if (pinSpacer) {
          pinSpacer = _getTarget(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }
        pinCache.spacer = spacer = pinSpacer || _doc$1.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle2(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap$1.getProperty(pin);
      pinSetter = gsap$1.quickSetter(pin, direction.a, _px);
      _swapPinIn(pin, spacer, cs);
      pinState = _getState(pin);
    }
    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap$1.quickSetter([markerStart, markerEnd], direction.a, _px));
      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body$1 : scroller);
        gsap$1.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap$1.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap$1.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }
    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function() {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(oldParams || []);
      });
    }
    self.previous = function() {
      return _triggers[_triggers.indexOf(self) - 1];
    };
    self.next = function() {
      return _triggers[_triggers.indexOf(self) + 1];
    };
    self.revert = function(revert) {
      var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
      if (r !== self.isReverted) {
        if (r) {
          self.scroll.rec || !_refreshing || !_refreshingAll || (self.scroll.rec = scrollFunc());
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.style.display = r ? "none" : "block";
        });
        r && (_refreshing = 1);
        self.update(r);
        _refreshing = prevRefreshing;
        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle2(pin), spacerState));
        self.isReverted = r;
      }
    };
    self.refresh = function(soft, force) {
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }
      if (pin && soft && _lastScrollTime) {
        _addListener2(ScrollTrigger2, "scrollEnd", _softRefresh);
        return;
      }
      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = 1;
      lastRefresh = _getTime();
      if (tweenTo.tween) {
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }
      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.time(-0.01, true).invalidate();
      self.isReverted || self.revert();
      var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), offset2 = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins;
      while (i--) {
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
        curPin = curTrigger.pin;
        if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger);
          curTrigger.revert();
        }
        if (curTrigger !== _triggers[i]) {
          triggerIndex--;
          i--;
        }
      }
      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -1e-3 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset2 = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset2;
          parsedEndTrigger = trigger;
        }
      }
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -1e-3;
      change = end - start || (start -= 0.01) && 1e-3;
      offset2 = 0;
      i = triggerIndex;
      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;
        if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation && curTrigger.end > 0) {
          cs2 = curTrigger.end - curTrigger.start;
          if ((curPin === trigger || curPin === pinnedContainer) && !_isNumber(parsedStart)) {
            offset2 += cs2 * (1 - curTrigger.progress);
          }
          curPin === pin && (otherPinOffset += cs2);
        }
      }
      start += offset2;
      end += offset2;
      self._pinPush = otherPinOffset;
      if (markerStart && offset2) {
        cs2 = {};
        cs2[direction.a] = "+=" + offset2;
        pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
        gsap$1.set([markerStart, markerEnd], cs2);
      }
      if (pin) {
        cs2 = _getComputedStyle2(pin);
        isVertical = direction === _vertical;
        scroll = scrollFunc();
        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        !max && end > 1 && ((isViewport ? _body$1 : scroller).style["overflow-" + direction.a] = "scroll");
        _swapPinIn(pin, spacer, cs2);
        pinState = _getState(pin);
        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px);
          _setState(spacerState);
          useFixedPosition && scrollFunc(prevScroll);
        }
        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs2[_padding];
          override[_padding + _Top] = cs2[_padding + _Top];
          override[_padding + _Right] = cs2[_padding + _Right];
          override[_padding + _Bottom] = cs2[_padding + _Bottom];
          override[_padding + _Left] = cs2[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
        }
        if (animation) {
          initted = animation._initted;
          _suppressOverwrites(1);
          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          change !== pinChange && useFixedPosition && pinActiveState.splice(pinActiveState.length - 2, 2);
          animation.render(0, true, true);
          initted || animation.invalidate();
          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
      } else if (trigger && scrollFunc() && !containerAnimation) {
        bounds = trigger.parentNode;
        while (bounds && bounds !== _body$1) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }
          bounds = bounds.parentNode;
        }
      }
      revertedPins && revertedPins.forEach(function(t) {
        return t.revert(false);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = scrollFunc();
      if (!containerAnimation) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }
      self.revert(false);
      if (snapDelayedCall) {
        lastSnap = -1;
        self.isActive && scrollFunc(start + change * prevProgress);
        snapDelayedCall.restart(true);
      }
      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
      if (prevProgress !== self.progress || containerAnimation) {
        animation && !isToggle && animation.totalProgress(prevProgress, true);
        self.progress = prevProgress;
        self.update(0, 0, 1);
      }
      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      onRefresh && onRefresh(self);
    };
    self.getVelocity = function() {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1e3 || 0;
    };
    self.endAnimation = function() {
      _endAnimation(self.callbackAnimation);
      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };
    self.labelToScroll = function(label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };
    self.getTrailing = function(name) {
      var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
      return (_isString(name) ? a.filter(function(t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function(t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };
    self.update = function(reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }
      var scroll = self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;
        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      }
      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 1e-4);
      if (clipped !== prevProgress2 && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress2 && prevProgress2 < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress2;
        self.direction = clipped > prevProgress2 ? 1 : -1;
        self.progress = clipped;
        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }
        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
          return t.endAnimation();
        }));
        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            (containerAnimation || _primary && _primary !== self) && scrubTween.render(scrubTween._dp._time - scrubTween._start);
            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!_refreshing);
          }
        }
        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
          if (!useFixedPosition) {
            pinSetter(_round$1(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true), _offset = scroll - start;
                _reparent(pin, _body$1, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }
            _setState(isActive || isAtMax ? pinActiveState : pinState);
            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }
        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray$1(toggleClass.targets).forEach(function(el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        });
        onUpdate && !isToggle && !reset && onUpdate(self);
        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }
            onUpdate && onUpdate(self);
          }
          if (toggled || !_limitCallbacks) {
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
            if (!toggled) {
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }
          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);
            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      }
      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }
      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };
    self.enable = function(reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;
        _addListener2(scroller, "resize", _onResize);
        _addListener2(isViewport ? _doc$1 : scroller, "scroll", _onScroll2);
        onRefreshInit && _addListener2(ScrollTrigger2, "refreshInit", onRefreshInit);
        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }
        refresh !== false && self.refresh();
      }
    };
    self.getTween = function(snap3) {
      return snap3 && tweenTo ? tweenTo.tween : scrubTween;
    };
    self.setPositions = function(newStart, newEnd) {
      if (pin) {
        pinStart += newStart - start;
        pinChange += newEnd - newStart - change;
      }
      self.start = start = newStart;
      self.end = end = newEnd;
      change = newEnd - newStart;
      self.update();
    };
    self.disable = function(reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert();
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener2(ScrollTrigger2, "refreshInit", onRefreshInit);
        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }
        if (!isViewport) {
          var i = _triggers.length;
          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return;
            }
          }
          _removeListener2(scroller, "resize", _onResize);
          _removeListener2(scroller, "scroll", _onScroll2);
        }
      }
    };
    self.kill = function(revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];
      var i = _triggers.indexOf(self);
      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--;
      i = 0;
      _triggers.forEach(function(t) {
        return t.scroller === self.scroller && (i = 1);
      });
      i || (self.scroll.rec = 0);
      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.render(-1);
        allowAnimation || animation.kill();
      }
      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);
      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;
        _triggers.forEach(function(t) {
          return t.pin === pin && i++;
        });
        i || (pinCache.spacer = 0);
      }
      vars.onKill && vars.onKill(self);
    };
    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);
    !animation || !animation.add || change ? self.refresh() : gsap$1.delayedCall(0.01, function() {
      return start || end || self.refresh();
    }) && (change = 0.01) && (start = end = 0);
  };
  ScrollTrigger2.register = function register(core) {
    if (!_coreInitted$1) {
      gsap$1 = core || _getGSAP$1();
      _windowExists$1() && window.document && ScrollTrigger2.enable();
      _coreInitted$1 = _enabled;
    }
    return _coreInitted$1;
  };
  ScrollTrigger2.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }
    return _defaults;
  };
  ScrollTrigger2.disable = function disable(reset, kill) {
    _enabled = 0;
    _triggers.forEach(function(trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });
    _removeListener2(_win$1, "wheel", _onScroll2);
    _removeListener2(_doc$1, "scroll", _onScroll2);
    clearInterval(_syncInterval);
    _removeListener2(_doc$1, "touchcancel", _passThrough);
    _removeListener2(_body$1, "touchstart", _passThrough);
    _multiListener(_removeListener2, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);
    _multiListener(_removeListener2, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);
    _resizeDelay.kill();
    _iterateAutoRefresh(_removeListener2);
    for (var i = 0; i < _scrollers.length; i += 3) {
      _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 1]);
      _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 2]);
    }
  };
  ScrollTrigger2.enable = function enable() {
    _win$1 = window;
    _doc$1 = document;
    _docEl$1 = _doc$1.documentElement;
    _body$1 = _doc$1.body;
    if (gsap$1) {
      _toArray$1 = gsap$1.utils.toArray;
      _clamp$1 = gsap$1.utils.clamp;
      _suppressOverwrites = gsap$1.core.suppressOverwrites || _passThrough;
      gsap$1.core.globals("ScrollTrigger", ScrollTrigger2);
      if (_body$1) {
        _enabled = 1;
        Observer.register(gsap$1);
        ScrollTrigger2.isTouch = Observer.isTouch;
        _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
        _addListener2(_win$1, "wheel", _onScroll2);
        _root = [_win$1, _doc$1, _docEl$1, _body$1];
        ScrollTrigger2.matchMedia({
          // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
          "(orientation: portrait)": function orientationPortrait() {
            _setBaseDimensions();
            return _setBaseDimensions;
          }
        });
        _addListener2(_doc$1, "scroll", _onScroll2);
        var bodyStyle = _body$1.style, border = bodyStyle.borderTopStyle, bounds, i;
        bodyStyle.borderTopStyle = "solid";
        bounds = _getBounds(_body$1);
        _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
        _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
        _syncInterval = setInterval(_sync, 250);
        gsap$1.delayedCall(0.5, function() {
          return _startup = 0;
        });
        _addListener2(_doc$1, "touchcancel", _passThrough);
        _addListener2(_body$1, "touchstart", _passThrough);
        _multiListener(_addListener2, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_addListener2, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);
        _transformProp = gsap$1.utils.checkPrefix("transform");
        _stateProps.push(_transformProp);
        _coreInitted$1 = _getTime();
        _resizeDelay = gsap$1.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc$1, "visibilitychange", function() {
          var w = _win$1.innerWidth, h = _win$1.innerHeight;
          if (_doc$1.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc$1, "DOMContentLoaded", _refreshAll, _win$1, "load", _refreshAll, _win$1, "resize", _onResize];
        _iterateAutoRefresh(_addListener2);
        _triggers.forEach(function(trigger) {
          return trigger.enable(0, 1);
        });
        for (i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 1]);
          _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 2]);
        }
      }
    }
  };
  ScrollTrigger2.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger2.isTouch === 1 && vars.ignoreMobileResize);
    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener2) || _iterateAutoRefresh(_addListener2, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };
  ScrollTrigger2.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport2(t);
    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }
    if (vars) {
      isViewport ? _proxies.unshift(_win$1, vars, _body$1, vars, _docEl$1, vars) : _proxies.unshift(t, vars);
    }
  };
  ScrollTrigger2.matchMedia = function matchMedia(vars) {
    var mq, p, i, func, result;
    for (p in vars) {
      i = _media.indexOf(p);
      func = vars[p];
      _creatingMedia = p;
      if (p === "all") {
        func();
      } else {
        mq = _win$1.matchMedia(p);
        if (mq) {
          mq.matches && (result = func());
          if (~i) {
            _media[i + 1] = _combineFunc(_media[i + 1], func);
            _media[i + 2] = _combineFunc(_media[i + 2], result);
          } else {
            i = _media.length;
            _media.push(p, func, result);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
          _media[i + 3] = mq.matches;
        }
      }
      _creatingMedia = 0;
    }
    return _media;
  };
  ScrollTrigger2.clearMatchMedia = function clearMatchMedia(query) {
    query || (_media.length = 0);
    query = _media.indexOf(query);
    query >= 0 && _media.splice(query, 4);
  };
  ScrollTrigger2.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win$1.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win$1.innerHeight;
  };
  ScrollTrigger2.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win$1.innerWidth : (bounds.top + offset) / _win$1.innerHeight;
  };
  return ScrollTrigger2;
}();
ScrollTrigger$1.version = "3.10.4";
ScrollTrigger$1.saveStyles = function(targets) {
  return targets ? _toArray$1(targets).forEach(function(target) {
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);
      i >= 0 && _savedStyles.splice(i, 5);
      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap$1.core.getCache(target), _creatingMedia);
    }
  }) : _savedStyles;
};
ScrollTrigger$1.revert = function(soft, media) {
  return _revertAll(!soft, media);
};
ScrollTrigger$1.create = function(vars, animation) {
  return new ScrollTrigger$1(vars, animation);
};
ScrollTrigger$1.refresh = function(safe) {
  return safe ? _onResize() : (_coreInitted$1 || ScrollTrigger$1.register()) && _refreshAll(true);
};
ScrollTrigger$1.update = _updateAll;
ScrollTrigger$1.clearScrollMemory = _clearScrollMemory;
ScrollTrigger$1.maxScroll = function(element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};
ScrollTrigger$1.getScrollFunc = function(element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};
ScrollTrigger$1.getById = function(id) {
  return _ids[id];
};
ScrollTrigger$1.getAll = function() {
  return _triggers.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
ScrollTrigger$1.isScrolling = function() {
  return !!_lastScrollTime;
};
ScrollTrigger$1.snapDirectional = _snapDirectional;
ScrollTrigger$1.addEventListener = function(type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger$1.removeEventListener = function(type, callback) {
  var a = _listeners[type], i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};
ScrollTrigger$1.batch = function(targets, vars) {
  var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
    var elements = [], triggers = [], delay = gsap$1.delayedCall(interval, function() {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function(self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  }, p;
  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }
  if (_isFunction(batchMax)) {
    batchMax = batchMax();
    _addListener2(ScrollTrigger$1, "refresh", function() {
      return batchMax = vars.batchMax();
    });
  }
  _toArray$1(targets).forEach(function(target) {
    var config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    result.push(ScrollTrigger$1.create(config));
  });
  return result;
};
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
}, _allowNativePanning = function _allowNativePanning2(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
  }
  target === _docEl$1 && _allowNativePanning2(_body$1, direction);
}, _overflow = {
  auto: 1,
  scroll: 1
}, _nestedScroll = function _nestedScroll2(_ref5) {
  var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
  var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap$1.core.getCache(node), time = _getTime(), cs;
  if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
    while (node && node.scrollHeight <= node.clientHeight) {
      node = node.parentNode;
    }
    cache._isScroll = node && !_isViewport2(node) && node !== target && (_overflow[(cs = _getComputedStyle2(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }
  (cache._isScroll || axis === "x") && (event._gsapAllow = true);
}, _inputObserver$1 = function _inputObserver(target, type, inputs, nested) {
  return Observer.create({
    target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener2(_doc$1, Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener2(_doc$1, Observer.eventTypes[0], _captureInputs, true);
    }
  });
}, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function _captureInputs2(e) {
  var isInput = _inputExp.test(e.target.tagName);
  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
}, _getScrollNormalizer = function _getScrollNormalizer2(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";
  var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, self, maxY, target = _getTarget(vars.target) || _docEl$1, smoother = gsap$1.core.globals().ScrollSmoother, content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smoother && smoother.get() && smoother.get().content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win$1.visualViewport ? _win$1.visualViewport.scale * _win$1.visualViewport.width : _win$1.outerWidth) / _win$1.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
    return momentum(self);
  } : function() {
    return momentum || 2.8;
  }, skipTouchMove, lastRefreshID, inputObserver = _inputObserver$1(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
    return skipTouchMove = false;
  }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps2() {
    maxY = _maxScroll(target, _vertical);
    scrollClampY = _clamp$1(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp$1(0, _maxScroll(target, _horizontal)));
    lastRefreshID = _refreshID;
  }, ignoreDrag = function ignoreDrag2() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);
      var offset = _round$1(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;
        content.style.transform = "translateY(" + -scrollFuncY.offset + "px)";
        content._gsap && (content._gsap.y = -scrollFuncY.offset + "px");
        scrollFuncY.cacheID = _scrollers.cache;
        _updateAll();
      }
      return true;
    }
    if (content) {
      content.style.transform = "translateY(0px)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
      content._gsap && (content._gsap.y = "0px");
    }
    skipTouchMove = true;
  }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
    updateClamps();
    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };
  vars.ignoreCheck = function(e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };
  vars.onPress = function() {
    var prevScale = scale;
    scale = _round$1((_win$1.visualViewport && _win$1.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    skipTouchMove = false;
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };
  vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
    if (content) {
      content.style.transform = "translateY(0px)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
      content._gsap && (content._gsap.y = "0px");
    }
    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _scrollers.cache++;
      var dur = resolveMomentumDuration(), currentScroll, endScroll;
      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }
      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);
      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        gsap$1.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }
  };
  vars.onWheel = function() {
    tween._ts && tween.pause();
    if (_getTime() - wheelRefresh > 1e3) {
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };
  vars.onChange = function(self2, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
    dy && scrollFuncY(scrollClampY(yArray[2] === dy ? startScrollY + (self2.startY - self2.y) : scrollFuncY() + dy - yArray[1]));
    _updateAll();
  };
  vars.onEnable = function() {
    _allowNativePanning(target, normalizeScrollX ? false : "x");
    _addListener2(_win$1, "resize", onResize);
    inputObserver.enable();
  };
  vars.onDisable = function() {
    _allowNativePanning(target, true);
    _removeListener2(_win$1, "resize", onResize);
    inputObserver.kill();
  };
  self = new Observer(vars);
  self.iOS = _fixIOSBug;
  _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
  onStopDelayedCall = self._dc;
  tween = gsap$1.to(self, {
    ease: "power4",
    paused: true,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    onComplete: onStopDelayedCall.vars.onComplete
  });
  return self;
};
ScrollTrigger$1.sort = function(func) {
  return _triggers.sort(func || function(a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};
ScrollTrigger$1.observe = function(vars) {
  return new Observer(vars);
};
ScrollTrigger$1.normalizeScroll = function(vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }
  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }
  if (vars === false) {
    return _normalizer && _normalizer.kill();
  }
  var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport2(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};
ScrollTrigger$1.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _getVelocityProp$1,
  _inputObserver: _inputObserver$1,
  _scrollers,
  _proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP$1() && gsap$1.registerPlugin(ScrollTrigger$1);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
/*!
 * ScrollSmoother 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap, _coreInitted, _win, _doc, _docEl, _body, _toArray2, _clamp, ScrollTrigger, _mainInstance, _expo, _getVelocityProp2, _inputObserver2, _windowExists2 = function _windowExists3() {
  return typeof window !== "undefined";
}, _getGSAP3 = function _getGSAP4() {
  return gsap || _windowExists2() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _round2 = function _round3(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
}, _autoDistance = function _autoDistance2(el, progress) {
  var parent = el.parentNode || _docEl, b1 = el.getBoundingClientRect(), b2 = parent.getBoundingClientRect(), gapTop = b2.top - b1.top, gapBottom = b2.bottom - b1.bottom, change = (Math.abs(gapTop) > Math.abs(gapBottom) ? gapTop : gapBottom) / (1 - progress), offset = -change * progress, ratio, extraChange;
  if (change > 0) {
    ratio = b2.height / (_win.innerHeight + b2.height);
    extraChange = ratio === 0.5 ? b2.height * 2 : Math.min(b2.height, -change * ratio / (2 * ratio - 1)) * 2;
    offset += -extraChange / 2;
    change += extraChange;
  }
  return {
    change,
    offset
  };
}, _wrap = function _wrap2(el) {
  var wrapper = _doc.querySelector(".ScrollSmoother-wrapper");
  if (!wrapper) {
    wrapper = _doc.createElement("div");
    wrapper.classList.add("ScrollSmoother-wrapper");
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }
  return wrapper;
};
var ScrollSmoother = /* @__PURE__ */ function() {
  function ScrollSmoother2(vars) {
    var _this = this;
    _coreInitted || ScrollSmoother2.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollSmoother)");
    vars = this.vars = vars || {};
    _mainInstance && _mainInstance.kill();
    _mainInstance = this;
    var _vars = vars, smoothTouch = _vars.smoothTouch, _onUpdate = _vars.onUpdate, onStop = _vars.onStop, smooth = _vars.smooth, onFocusIn = _vars.onFocusIn, normalizeScroll = _vars.normalizeScroll, content, wrapper, height, mainST, effects, sections, intervalID, wrapperCSS, contentCSS, paused, pausedNormalizer, recordedRefreshScroll, scrollFunc = ScrollTrigger.getScrollFunc(_win), smoothDuration = ScrollTrigger.isTouch === 1 ? smoothTouch === true ? 0.8 : parseFloat(smoothTouch) || 0 : smooth === 0 || smooth === false ? 0 : parseFloat(smooth) || 0.8, currentY = 0, delta = 0, startupPhase = 1, tracker = _getVelocityProp2(0), updateVelocity = function updateVelocity2() {
      return tracker.update(-currentY);
    }, scroll = {
      y: 0
    }, removeScroll = function removeScroll2() {
      return content.style.overflow = "visible";
    }, isProxyScrolling, killScrub = function killScrub2(trigger) {
      trigger.update();
      var scrub = trigger.getTween();
      if (scrub) {
        scrub.pause();
        scrub._time = scrub._dur;
        scrub._tTime = scrub._tDur;
      }
      isProxyScrolling = false;
      trigger.animation.progress(trigger.progress, true);
    }, render = function render2(y, force) {
      if (y !== currentY && !paused || force) {
        smoothDuration && (content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)");
        delta = y - currentY;
        currentY = y;
        ScrollTrigger.isUpdating || ScrollTrigger.update();
      }
    }, scrollTop = function scrollTop2(value) {
      if (arguments.length) {
        paused ? currentY = -value : render(-value);
        scroll.y = -value;
        isProxyScrolling = true;
        scrollFunc(value);
        return this;
      }
      return -currentY - scrollFunc.offset;
    }, lastFocusElement, _onFocusIn = function _onFocusIn2(e) {
      wrapper.scrollTop = 0;
      if (onFocusIn && onFocusIn(_this, e) === false) {
        return;
      }
      ScrollTrigger.isInViewport(e.target) || e.target === lastFocusElement || _this.scrollTo(e.target, false, "center center");
      lastFocusElement = e.target;
    }, adjustParallaxPosition = function adjustParallaxPosition2(triggers, createdAfterEffectWasApplied) {
      var pins, start, dif, markers;
      effects.forEach(function(st) {
        pins = st.pins;
        markers = st.markers;
        triggers.forEach(function(trig) {
          if ((trig.trigger === st.trigger || trig.pinnedContainer === st.trigger) && st !== trig) {
            start = trig.start;
            dif = (start - st.start - st.offset) / st.ratio - (start - st.start);
            pins.forEach(function(p) {
              return dif -= p.distance / st.ratio - p.distance;
            });
            trig.setPositions(start + dif, trig.end + dif);
            trig.markerStart && markers.push(gsap.quickSetter([trig.markerStart, trig.markerEnd], "y", "px"));
            if (trig.pin && trig.end > 0) {
              dif = trig.end - trig.start;
              pins.push({
                start: trig.start,
                end: trig.end,
                distance: dif,
                trig
              });
              st.setPositions(st.start, st.end + dif);
              st.vars.onRefresh(st);
            }
          }
        });
      });
    }, onRefresh = function onRefresh2() {
      removeScroll();
      requestAnimationFrame(removeScroll);
      if (effects) {
        effects.forEach(function(st) {
          var start = st.start, end = st.auto ? Math.min(ScrollTrigger.maxScroll(st.scroller), st.end) : start + (st.end - start) / st.ratio, offset = (end - st.end) / 2;
          start -= offset;
          end -= offset;
          st.offset = offset || 1e-4;
          st.pins.length = 0;
          st.setPositions(Math.min(start, end), Math.max(start, end));
          st.vars.onRefresh(st);
        });
        adjustParallaxPosition(ScrollTrigger.sort());
      }
      tracker.reset();
    }, restoreEffects = function restoreEffects2() {
      return effects && effects.forEach(function(st) {
        return st.vars.onRefresh(st);
      });
    }, revertEffects = function revertEffects2() {
      effects && effects.forEach(function(st) {
        return st.vars.onRefreshInit(st);
      });
      return restoreEffects;
    }, effectValueGetter = function effectValueGetter2(name, value, index, el) {
      return function() {
        var v = typeof value === "function" ? value(index, el) : value;
        v || v === 0 || (v = el.getAttribute("data-" + name) || (name === "speed" ? 1 : 0));
        el.setAttribute("data-" + name, v);
        return v === "auto" ? v : parseFloat(v);
      };
    }, createEffect = function createEffect2(el, speed, lag, index) {
      var getSpeed = effectValueGetter("speed", speed, index, el), getLag = effectValueGetter("lag", lag, index, el), startY = gsap.getProperty(el, "y"), cache = el._gsap, ratio, st, autoSpeed, scrub, progressOffset, yOffset, initDynamicValues = function initDynamicValues2() {
        speed = getSpeed();
        lag = getLag();
        ratio = parseFloat(speed) || 1;
        autoSpeed = speed === "auto";
        progressOffset = autoSpeed ? 0 : 0.5;
        scrub && scrub.kill();
        scrub = lag && gsap.to(el, {
          ease: _expo,
          overwrite: false,
          y: "+=0",
          duration: lag
        });
        if (st) {
          st.ratio = ratio;
          st.autoSpeed = autoSpeed;
        }
      }, revert = function revert2() {
        cache.y = startY + "px";
        cache.renderTransform(1);
        initDynamicValues();
      }, pins = [], markers = [], change = 0, updateChange = function updateChange2(self) {
        if (autoSpeed) {
          revert();
          var auto = _autoDistance(el, _clamp(0, 1, -self.start / (self.end - self.start)));
          change = auto.change;
          yOffset = auto.offset;
        } else {
          change = (self.end - self.start) * (1 - ratio);
          yOffset = 0;
        }
        pins.forEach(function(p) {
          return change -= p.distance * (1 - ratio);
        });
        self.vars.onUpdate(self);
        scrub && scrub.progress(1);
      };
      initDynamicValues();
      if (ratio !== 1 || autoSpeed || scrub) {
        st = ScrollTrigger.create({
          trigger: autoSpeed ? el.parentNode : el,
          scroller: wrapper,
          scrub: true,
          refreshPriority: -999,
          // must update AFTER any other ScrollTrigger pins
          onRefreshInit: revert,
          onRefresh: updateChange,
          onKill: function onKill(self) {
            var i = effects.indexOf(self);
            i >= 0 && effects.splice(i, 1);
            revert();
          },
          onUpdate: function onUpdate(self) {
            var y = startY + change * (self.progress - progressOffset), i = pins.length, extraY = 0, pin, scrollY, end;
            if (self.offset) {
              if (i) {
                scrollY = -currentY;
                end = self.end;
                while (i--) {
                  pin = pins[i];
                  if (pin.trig.isActive || scrollY >= pin.start && scrollY <= pin.end) {
                    if (scrub) {
                      pin.trig.progress += pin.trig.direction < 0 ? 1e-3 : -1e-3;
                      pin.trig.update(0, 0, 1);
                      scrub.resetTo("y", parseFloat(cache.y), -delta, true);
                      startupPhase && scrub.progress(1);
                    }
                    return;
                  }
                  scrollY > pin.end && (extraY += pin.distance);
                  end -= pin.distance;
                }
                y = startY + extraY + change * ((gsap.utils.clamp(self.start, self.end, scrollY) - self.start - extraY) / (end - self.start) - progressOffset);
              }
              y = _round2(y + yOffset);
              markers.length && !autoSpeed && markers.forEach(function(setter) {
                return setter(y - extraY);
              });
              if (scrub) {
                scrub.resetTo("y", y, -delta, true);
                startupPhase && scrub.progress(1);
              } else {
                cache.y = y + "px";
                cache.renderTransform(1);
              }
            }
          }
        });
        updateChange(st);
        gsap.core.getCache(st.trigger).stRevert = revertEffects;
        st.startY = startY;
        st.pins = pins;
        st.markers = markers;
        st.ratio = ratio;
        st.autoSpeed = autoSpeed;
        el.style.willChange = "transform";
      }
      return st;
    };
    ScrollTrigger.addEventListener("refresh", onRefresh);
    gsap.delayedCall(0.5, function() {
      return startupPhase = 0;
    });
    this.scrollTop = scrollTop;
    this.scrollTo = function(target, smooth2, position) {
      var p = gsap.utils.clamp(0, ScrollTrigger.maxScroll(_win), isNaN(target) ? _this.offset(target, position) : +target);
      !smooth2 ? scrollTop(p) : paused ? gsap.to(_this, {
        duration: smoothDuration,
        scrollTop: p,
        overwrite: "auto",
        ease: _expo
      }) : scrollFunc(p);
    };
    this.offset = function(target, position) {
      target = _toArray2(target)[0];
      var cssText = target.style.cssText, st = ScrollTrigger.create({
        trigger: target,
        start: position || "top top"
      }), y;
      effects && adjustParallaxPosition([st]);
      y = st.start;
      st.kill(false);
      target.style.cssText = cssText;
      gsap.core.getCache(target).uncache = 1;
      return y;
    };
    function refreshHeight() {
      height = content.clientHeight;
      content.style.overflow = "visible";
      _body.style.height = height + "px";
      return height - _win.innerHeight;
    }
    this.content = function(element) {
      if (arguments.length) {
        var newContent = _toArray2(element || "#smooth-content")[0] || _body.children[0];
        if (newContent !== content) {
          content = newContent;
          contentCSS = content.getAttribute("style") || "";
          gsap.set(content, {
            overflow: "visible",
            width: "100%",
            boxSizing: "border-box"
          });
        }
        return this;
      }
      return content;
    };
    this.wrapper = function(element) {
      if (arguments.length) {
        wrapper = _toArray2(element || "#smooth-wrapper")[0] || _wrap(content);
        wrapperCSS = wrapper.getAttribute("style") || "";
        refreshHeight();
        gsap.set(wrapper, smoothDuration ? {
          overflow: "hidden",
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        } : {
          overflow: "visible",
          position: "relative",
          width: "100%",
          height: "auto",
          top: "auto",
          bottom: "auto",
          left: "auto",
          right: "auto"
        });
        return this;
      }
      return wrapper;
    };
    this.effects = function(targets, config) {
      var _effects;
      effects || (effects = []);
      if (!targets) {
        return effects.slice(0);
      }
      targets = _toArray2(targets);
      targets.forEach(function(target) {
        var i2 = effects.length;
        while (i2--) {
          if (effects[i2].trigger === target) {
            effects[i2].kill();
            effects.splice(i2, 1);
          }
        }
      });
      config = config || {};
      var _config = config, speed = _config.speed, lag = _config.lag, effectsToAdd = [], i, st;
      for (i = 0; i < targets.length; i++) {
        st = createEffect(targets[i], speed, lag, i);
        st && effectsToAdd.push(st);
      }
      (_effects = effects).push.apply(_effects, effectsToAdd);
      return effectsToAdd;
    };
    this.sections = function(targets, config) {
      var _sections;
      sections || (sections = []);
      if (!targets) {
        return sections.slice(0);
      }
      var newSections = _toArray2(targets).map(function(el) {
        return ScrollTrigger.create({
          trigger: el,
          start: "top 120%",
          end: "bottom -20%",
          onToggle: function onToggle(self) {
            el.style.opacity = self.isActive ? "1" : "0";
            el.style.pointerEvents = self.isActive ? "all" : "none";
          }
        });
      });
      config && config.add ? (_sections = sections).push.apply(_sections, newSections) : sections = newSections.slice(0);
      return newSections;
    };
    this.content(vars.content);
    this.wrapper(vars.wrapper);
    this.render = function(y) {
      return render(y || y === 0 ? y : currentY);
    };
    this.getVelocity = function() {
      return tracker.getVelocity(-currentY);
    };
    ScrollTrigger.scrollerProxy(wrapper, {
      scrollTop,
      scrollHeight: function scrollHeight() {
        return refreshHeight() && _body.scrollHeight;
      },
      fixedMarkers: vars.fixedMarkers !== false && !!smoothDuration,
      content,
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: _win.innerWidth,
          height: _win.innerHeight
        };
      }
    });
    ScrollTrigger.defaults({
      scroller: wrapper
    });
    var existingScrollTriggers = ScrollTrigger.getAll().filter(function(st) {
      return st.scroller === _win || st.scroller === wrapper;
    });
    existingScrollTriggers.forEach(function(st) {
      return st.revert(true);
    });
    mainST = ScrollTrigger.create({
      animation: gsap.to(scroll, {
        y: function y() {
          return -refreshHeight();
        },
        ease: "none",
        data: "ScrollSmoother",
        duration: 100,
        // for added precision
        onUpdate: function onUpdate() {
          var force = isProxyScrolling;
          if (force) {
            scroll.y = currentY;
            killScrub(mainST);
          }
          render(scroll.y, force);
          updateVelocity();
          _onUpdate && !paused && _onUpdate(_this);
        }
      }),
      onRefreshInit: function onRefreshInit() {
        recordedRefreshScroll = currentY;
        scroll.y = wrapper.scrollTop = 0;
      },
      id: "ScrollSmoother",
      scroller: _win,
      invalidateOnRefresh: true,
      start: 0,
      refreshPriority: -9999,
      // because all other pins, etc. should be calculated first before this figures out the height of the body. BUT this should also update FIRST so that the scroll position on the proxy is up-to-date when all the ScrollTriggers calculate their progress! -9999 is a special number that ScrollTrigger looks for to handle in this way.
      end: refreshHeight,
      onScrubComplete: function onScrubComplete() {
        tracker.reset();
        onStop && onStop(_this);
      },
      scrub: smoothDuration || true,
      onRefresh: function onRefresh2(self) {
        killScrub(self);
        scroll.y = -scrollFunc();
        render(scroll.y);
        startupPhase || self.animation.progress(gsap.utils.clamp(0, 1, recordedRefreshScroll / -self.end));
      }
    });
    this.smooth = function(value) {
      smoothDuration = value;
      return arguments.length ? mainST.scrubDuration(value) : mainST.getTween() ? mainST.getTween().duration() : 0;
    };
    mainST.getTween() && (mainST.getTween().vars.ease = vars.ease || _expo);
    this.scrollTrigger = mainST;
    vars.effects && this.effects(vars.effects === true ? "[data-speed], [data-lag]" : vars.effects, {});
    vars.sections && this.sections(vars.sections === true ? "[data-section]" : vars.sections);
    existingScrollTriggers.forEach(function(st) {
      st.vars.scroller = wrapper;
      st.init(st.vars, st.animation);
    });
    this.paused = function(value, allowNestedScroll) {
      if (arguments.length) {
        if (!!paused !== value) {
          if (value) {
            mainST.getTween() && mainST.getTween().pause();
            scrollFunc(-currentY);
            tracker.reset();
            pausedNormalizer = ScrollTrigger.normalizeScroll();
            pausedNormalizer && pausedNormalizer.disable();
            paused = ScrollTrigger.observe({
              preventDefault: true,
              type: "wheel,touch,scroll",
              debounce: false,
              allowClicks: true,
              onChangeY: function onChangeY() {
                return scrollTop(-currentY);
              }
              // refuse to scroll
            });
            paused.nested = _inputObserver2(_docEl, "wheel,touch,scroll", true, allowNestedScroll !== false);
          } else {
            paused.nested.kill();
            paused.kill();
            paused = 0;
            pausedNormalizer && pausedNormalizer.enable();
            mainST.progress = (-currentY - mainST.start) / (mainST.end - mainST.start);
            killScrub(mainST);
          }
        }
        return this;
      }
      return !!paused;
    };
    this.kill = function() {
      _this.paused(false);
      killScrub(mainST);
      mainST.kill();
      var triggers = (effects || []).concat(sections || []), i = triggers.length;
      while (i--) {
        triggers[i].kill();
      }
      ScrollTrigger.scrollerProxy(wrapper);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      _body.style.removeProperty("height");
      wrapper.style.cssText = wrapperCSS;
      content.style.cssText = contentCSS;
      var defaults = ScrollTrigger.defaults({});
      defaults && defaults.scroller === wrapper && ScrollTrigger.defaults({
        scroller: _win
      });
      _this.normalizer && ScrollTrigger.normalizeScroll(false);
      clearInterval(intervalID);
      _mainInstance = null;
      _win.removeEventListener("focusin", _onFocusIn);
    };
    this.refresh = function(soft, force) {
      return mainST.refresh(soft, force);
    };
    if (normalizeScroll) {
      this.normalizer = ScrollTrigger.normalizeScroll(normalizeScroll === true ? {
        debounce: true,
        content
      } : normalizeScroll);
    }
    ScrollTrigger.config(vars);
    "overscrollBehavior" in _win.getComputedStyle(_body) && gsap.set([_body, _docEl], {
      overscrollBehavior: "none"
    });
    "scrollBehavior" in _win.getComputedStyle(_body) && gsap.set([_body, _docEl], {
      scrollBehavior: "auto"
    });
    _win.addEventListener("focusin", _onFocusIn);
    intervalID = setInterval(updateVelocity, 250);
    _doc.readyState === "loading" || requestAnimationFrame(function() {
      return ScrollTrigger.refresh();
    });
  }
  ScrollSmoother2.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP3();
      if (_windowExists2() && window.document) {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
      }
      if (gsap) {
        _toArray2 = gsap.utils.toArray;
        _clamp = gsap.utils.clamp;
        _expo = gsap.parseEase("expo");
        ScrollTrigger = gsap.core.globals().ScrollTrigger;
        gsap.core.globals("ScrollSmoother", ScrollSmoother2);
        if (_body && ScrollTrigger) {
          _getVelocityProp2 = ScrollTrigger.core._getVelocityProp;
          _inputObserver2 = ScrollTrigger.core._inputObserver;
          ScrollSmoother2.refresh = ScrollTrigger.refresh;
          _coreInitted = 1;
        }
      }
    }
    return _coreInitted;
  };
  _createClass(ScrollSmoother2, [{
    key: "progress",
    get: function get() {
      return this.scrollTrigger.animation._time / 100;
    }
  }]);
  return ScrollSmoother2;
}();
ScrollSmoother.version = "3.10.4";
ScrollSmoother.create = function(vars) {
  return _mainInstance && vars && _mainInstance.content() === _toArray2(vars.content)[0] ? _mainInstance : new ScrollSmoother(vars);
};
ScrollSmoother.get = function() {
  return _mainInstance;
};
_getGSAP3() && gsap.registerPlugin(ScrollSmoother);
const SplitText_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsap$3.registerPlugin(SplitText, ScrollTrigger$1, ScrollSmoother);
  return `<div><div><div class="${"max-w-full h-screen px-20 flex flex-col space-y-5 justify-center items-center bg-slate-500 text-6xl font-bold"}"><div class="${"box1"}"><div id="${"title1"}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit similique corrupti quasi
				nesciunt? Doloremque, illo maiores. Hic enim possimus sit itaque explicabo et magni natus. Ab
				asperiores sit quidem minima.
			</div></div></div>
		
		<div class="${"max-w-full h-screen px-20 flex flex-col space-y-5 justify-center items-center bg-pink-400 text-6xl font-bold"}"><div id="${"title2"}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit similique corrupti quasi
				nesciunt? Doloremque, illo maiores. Hic enim possimus sit itaque explicabo et magni natus. Ab
				asperiores sit quidem minima.
			</div></div></div></div>`;
});
const TypeWritter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-full bg-red-400 h-screen flex flex-row justify-center items-center"}"><p class="${"text-5xl text-center font-bold title"}"></p>
	<span id="${"cursor"}" class="${"w-1 h-[50px] self-center bg-black"}"></span></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<div id="${"smooth-wrapper"}"><div id="${"smooth-content"}"><div>${validate_component(Flip3, "Flip3").$$render($$result, {}, {}, {})}</div>
		<div>${validate_component(MotionPath, "MotionPath").$$render($$result, {}, {}, {})}</div>
		<div>${validate_component(Dragable, "Dragable").$$render($$result, {}, {}, {})}</div>
		<div>${validate_component(Observer_1, "Observer").$$render($$result, {}, {}, {})}</div>
		<div>${validate_component(SplitText_1, "SplitText").$$render($$result, {}, {}, {})}</div>
		<div>${validate_component(TypeWritter, "TypeWritter").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
