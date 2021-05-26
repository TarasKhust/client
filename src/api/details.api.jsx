import GQL from "../Request/GQL";
import GET_DETAILS from "api/schema/details.schema";

/**
 * @name useQueryDetails
 * @param props
 * @returns {{loading: boolean, data: any, error: string, rest: any}}
 */
export const useQueryDetails = (props, id) => {
    const options = {
        fetchPolicy: "cache-and-network",
        ...props,
    };

    const { loading, data, error, ...rest } = GQL.useQuery(GET_DETAILS, {
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
