import GQL from "../Request/GQL";
import GET_BRANDS from "api/schema/brands.schema";

/**
 * @name useQueryBrands
 * @param props
 * @returns {{loading: boolean, data: any, error: string, rest: any}}
 */
export const useQueryBrands = (props) => {
	const options = {
		fetchPolicy: "cache-and-network",
		...props,
	};

	const { loading, data, error, ...rest } = GQL.useQuery(GET_BRANDS, options);

	return {
		loading,
		error,
		data,
		rest,
	};
};
