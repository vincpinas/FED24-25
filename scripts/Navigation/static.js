import { updateStorage } from "../helpers.js";

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
				html: "Font Size",
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
						updateStorage("settings", "fontsize", target.value);
					},
				},
			},
			{
				tag: "label",
				html: "Theme",
			},
			{
				tag: "input",
				id: "theme",
				type: "checkbox",
				event: {
					type: "click",
					callback: (target) => {
						if(target.checked) document.documentElement.setAttribute("data-theme", "light");
						else document.documentElement.setAttribute("data-theme", "dark");
						updateStorage("settings", "theme", target.checked)
					},
				},
			},
			{
				tag: "label",
				html: "Font",
			},
			{
				tag: "select",
				id: "theme",
				type: "checkbox",
				options: [],
				event: {
					type: "click",
					callback: (target, firstRun = false) => {
						if(target.checked) document.documentElement.setAttribute("data-theme", "light");
						else document.documentElement.setAttribute("data-theme", "dark");
						if(firstRun) return;
						updateStorage("settings", "theme", target.checked)
					},
				},
			},
		],
	},
};
