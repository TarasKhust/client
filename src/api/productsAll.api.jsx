import GQL from "../Request/GQL";
import GET_PRODUCTS from "api/schema/productsAll.shema";

/**
 * @name useQueryProducts
 * @param props
 * @returns {{loading: boolean, data: any, error: string, rest: any}}
 */
export const useQueryProducts = (props) => {
    const options = {
        fetchPolicy: "cache-and-network",
        ...props,
    };

    const { loading, data, error, ...rest } = GQL.useQuery(GET_PRODUCTS, options);

    return {
        loading,
        error,
        data,
        rest,
    };
};
