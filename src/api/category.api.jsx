import GQL from "../Request/GQL";
import GET_CATEGORY from "api/schema/categoty.schema";

/**
 * @name useQueryCategory
 * @param props
 * @returns {{loadingCategory: boolean, dataCategory: any, error: string, rest: any}}
 */
export const useQueryCategory = (props) => {
    const options = {
        fetchPolicy: "cache-and-network",
        ...props,
    };

    const { loading, data, error, ...rest } = GQL.useQuery(GET_CATEGORY, options);

    return {
        loading,
        error,
        data,
        rest,
    };
};
