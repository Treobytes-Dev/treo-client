// crudEditHandlers
export const lastIdGen = (itemsList, previousItems) => {
	if (!itemsList || (!itemsList.length && !previousItems.length)) return 0;

	const currentItemIds = itemsList.length
		? itemsList.map((item) => item.id)
		: [];
	const previousItemsIds = previousItems.length
		? previousItems.map((item) => item.id)
		: [];

	return Math.max(...currentItemIds, ...previousItemsIds);
};

export const createNewItem = (id, content, editable, checked) => {
	return {
		id: id + 1,
		content: content,
		editable: editable,
		checked: checked,
	};
};

export const addPreviousItems = (removedItem, previousItems) => {
	previousItems.push(removedItem);
	if (previousItems.length > 19) {
		previousItems.shift();
	}
};

export const handleDelete = (id, list, setList, addPreviousItems) => {
	const idx = list.findIndex((i) => i.id === id);
	let removedItem = list.splice(idx, 1)[0];
	removedItem.index = idx;
	addPreviousItems(removedItem);
	setList([...list]);
};

export const handleList = (list, setList) => {
	setList([...list]);
};
