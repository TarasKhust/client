import GQL from "../Request/GQL";
import GET_ATTRIBUTE from "api/schema/attributeAll.shema";

/**
 * @name useQueryAttributeAll
 * @param props
 * @returns {{loadingCategory: boolean, dataCategory: any, error: string, rest: any}}
 */
export const useQueryAttributeAll = (props) => {
    const options = {
        fetchPolicy: "cache-and-network",
        ...props,
    };

    const { loading, data, error, ...rest } = GQL.useQuery(GET_ATTRIBUTE, options);

    return {
        loading,
        error,
        data,
        rest,
    };
};
