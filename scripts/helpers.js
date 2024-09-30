export const get_storage = (name) => {
	if (localStorage.getItem(name)) return JSON.parse(localStorage.getItem(name));
	else {
		localStorage.setItem(name, JSON.stringify({}));
		return JSON.parse(localStorage.getItem(name));
	}
};

export const update_storage = (name, key, value) => {
	let storage = JSON.parse(localStorage.getItem(name));

	storage[key] = value;

	localStorage.setItem(name, JSON.stringify(storage));
};

export const create_el = (tag, options = {}) => {
	const element = document.createElement(tag);

	if (options.innerHTML) element.innerHTML = options.innerHTML;
	if (options.parent) options.parent.appendChild(element);
	if (options.children) {
		options.children.forEach((child) => element.appendChild(child));
	}

	if (options.id) element.id = options.id;
	if (options.class) element.classList.add(options.class);

	if (options.type) element.setAttribute("type", options.type);
	if (options.event)
		element.addEventListener(options.event.type, (e) =>
			options.event.callback(e.target)
		);

	if (options.value) element.setAttribute("value", options.value);
	if (options.min) element.setAttribute("min", options.min);
	if (options.max) element.setAttribute("max", options.max);
	if (options.checked) element.setAttribute("checked", options.checked);
	if (options.for) element.setAttribute("for", options.for)

	return element;
};

export const get_css_variable = (property) => {
	return getComputedStyle(document.documentElement).getPropertyValue(property).replace(/"/g, "");
}