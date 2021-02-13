
export const MERGE_TO_PUBLIC = "MERGE_TO_PUBLIC";

/**
 *
 * @param state
 * @return {{state: *, type: *}}
 */
export const mergeToPublic = (state) => ({
	type: MERGE_TO_PUBLIC,
	state,
});
