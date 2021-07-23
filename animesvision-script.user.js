// ==UserScript==
// @name         Stake2 - Remove popups from Animes Vision
// @namespace    http://github.com/stake2/animevision-userscript/
// @version      1.1
// @description  A Animes Vision script to remove ads and popups from Animes Vision website
// @author       Stake2
// @match        https://animesvision.biz/*
// @icon         https://icons.duckduckgo.com/ip2/animesvision.biz.ico
// @grant        none
// ==/UserScript==

function xpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function print(text) {
	console.log(text);
}

var thing = setInterval(
	function() {
		var overlay = xpath('//div[@class="bf"]');

		var iframe = xpath("/html/body/div[5]");

		var ads = xpath('//div[@class="container-fluid align-items-center justify-content-center mb30 mt10"]');

		var become_premium_section = xpath('//section[@class="become-premium ptb70"]');

		if (overlay != null) {
			print("\n");
			print("Removing overlay...");

			overlay.remove();
		}

		if (iframe != null) {
			print("\n");
			print("Removing iframe...");

			iframe.remove();
		}

		if (ads != null) {
			print("\n");
			print("Removing ads...");

			ads.remove();
		}

		if (become_premium_section != null) {
			print("\n");
			print("Removing Become Premium Section...");

			become_premium_section.remove();
		}
	},
200);

setTimeout(function() {
window.clearInterval(thing);
}, 11000);
