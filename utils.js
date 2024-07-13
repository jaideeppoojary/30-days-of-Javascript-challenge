const PAD_LENGTH = 60;
const PAD_CHAR = "_";
const getPadString = (str, padStr) => {
	const maxLength = (PAD_LENGTH - str.length) / 2;
	return `${"".padStart(maxLength, padStr ?? PAD_CHAR)}${str}${"".padEnd(maxLength, padStr ?? PAD_CHAR)}`;
};

module.exports = {
  getPadString,
};