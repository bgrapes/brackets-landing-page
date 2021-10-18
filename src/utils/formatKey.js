export const formatKey = (string) => {
	return string
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s+/g, '-')
		.toLowerCase()
}

export default formatKey
