export const createEl = (tag, options = {}) => {
	const element = document.createElement(tag);

	if (options.html) element.innerHTML = options.html;
	if (options.parent) options.parent.appendChild(element);

	if (options.id) element.id = options.id;
	if (options.class) element.classList.add(options.class);

	return element;
};
