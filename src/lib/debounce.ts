let timeouts = new Map<string, number>();

/**
 * Debounces a callback.
 * @param cb
 * @param ms
 * @param id
 */
export function debounce (cb: (() => void), ms: number, id: string) {

	// Clear current timeout for id
	const timeout = timeouts.get(id);
	if (timeout != null) {
		window.clearTimeout(timeout);
	}

	// Set new timeout
	timeouts.set(id, window.setTimeout(() => {
		cb();
		timeouts.delete(id);
	}, ms));
}

