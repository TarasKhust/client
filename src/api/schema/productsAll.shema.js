import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
    query {
        getAllProducts{
            id
            image
            name
            price
            count
            minimalCount
            vendor
            statusExist
            status
        }
    }
`;

export default GET_PRODUCTS;
