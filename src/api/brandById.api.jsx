import GQL from "../Request/GQL";
import GET_BRAND from "api/schema/brandById.schema";

/**
 * @name useQueryBrandId
 * @param props
 * @returns {{loading: boolean, data: any, error: string, rest: any}}
 */
export const useQueryBrandId = (props, id) => {
    const options = {
        fetchPolicy: "cache-and-network",
        ...props,
    };

    const { loading, data, error, ...rest } = GQL.useQuery(GET_BRAND, {
        variables: {
            id,
        },
        options,
    });

    return {
        loading,
        error,
        data,
        rest,
    };
};
