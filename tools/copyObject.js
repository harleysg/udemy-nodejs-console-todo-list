/**
 * Copy the original object to other without to affect the original.
 * The copy and the original object will not share anything, so it will be a copy of the original.
 * Here's the fix to the problem of inmmutability.
 *
 * Alternative to Object.assign().
 *
 * !important:
 *
 * Don't copy property methods.
 *
 * @param { } obj
 * @type Object
 * @ignore property methods
 *
 * @tutorial https://scotch.io/bar-talk/copying-objects-in-javascript#toc-copying-object-methods
 */

module.exports = obj => {
	if (typeof obj === "object" && Array.isArray(obj) == false) {
		return JSON.parse(JSON.stringify(obj));
	}
};
