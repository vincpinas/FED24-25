import { create_el, update_storage } from "../helpers.js";

export const tab_data = {
	missions: {},
	humans_in_space: {},
	news_and_events: {},
	multimedia: {},
	settings: {
		title: "Settings",
		elements: [
			{
				tag: "label",
				innerHTML: "Font Size",
				for: "fontsize"
			},
			{
				tag: "input",
				id: "fontsize",
				type: "range",
				value: 16,
				min: 14,
				max: 20,
				event: {
					type: "change",
					callback: (target) => {
						document.documentElement.style.fontSize = `${target.value}px`;
						update_storage("settings", "fontsize", target.value);
					},
				},
				state: { property: "value", id: "fontsize" }
			},
			{
				tag: "label",
				innerHTML: "Theme",
				for: "theme"
			},
			{
				tag: "input",
				id: "theme",
				type: "checkbox",
				event: {
					type: "click",
					// BRON (Zie README): Theme Switcher voorbeeld
					callback: (target, no_save = false) => {
						if (target.checked)
							document.documentElement.setAttribute("data-theme", "light");
						else document.documentElement.setAttribute("data-theme", "dark");
						if (!no_save) update_storage("settings", "theme", target.checked);
					},
				},
				state: { property: "checked", id: "theme" }
			},
			{
				tag: "label",
				innerHTML: "Font",
				for: "font"
			},
			{
				tag: "select",
				id: "font",
				type: "checkbox",
				children: [
					create_el("option", {
						innerHTML: "Default",
						value: "Inter",
					}),
					create_el("option", {
						innerHTML: "Dyslexic",
						value: "Dyslexic",
					}),
				],
				event: {
					type: "change",
					callback: (target, no_save = false) => {
						document.documentElement.style.setProperty("--font-primary", target.value);
						if (!no_save) update_storage("settings", "font", target.value);
					},
				},
				state: { property: "value", id: "font" },
			},
		],
	},
};
