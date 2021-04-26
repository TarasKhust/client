import GQL from "../Request/GQL";
import getShoppingCard from "api/schema/getShoppingCard";

/**
 * @name useQueryProduct
 * @param props
 * @returns {{loading: boolean, data: any, error: string, rest: any}}
 */
export const useQueryProduct = (props) => {
	const options = {
		fetchPolicy: "cache-and-network",
		...props,
	};

	const { loading, data, error, ...rest } = GQL.useQuery(getShoppingCard, options);

	return {
		loading,
		error,
		data,
		rest,
	};
};
