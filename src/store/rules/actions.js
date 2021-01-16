export const MERGE_RULES = "MERGE_RULES";

/**
 *
 * @param state
 * @returns {{state: *, type: string}}
 */
export const mergeRules = (state) => ({
	type: MERGE_RULES,
	state,
});
