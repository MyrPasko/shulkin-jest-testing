
/**
 * Return node(s) with the given data-test attribute.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} attrVal - Value of data-set attribute for search.
 * @returns {ShallowWrapper}
 * */
export const findByTestAttribute = (wrapper, attrVal) => {
    return wrapper.find(`[data-test='${attrVal}']`)
};
