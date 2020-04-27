module.exports = function onError(callback = () => {}) {
	return {
		name: 'onerror',
		buildEnd(err) {
			if (err)
				callback(err);
		}
	}
}
