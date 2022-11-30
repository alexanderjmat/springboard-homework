function choice(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function remove(items, item) {
    const idx = items.indexOf(item)
    const selected = items[idx]
    if (selected) {
        items.splice(idx, 1)
        return selected
    }
    return undefined;

}

export {choice, remove}