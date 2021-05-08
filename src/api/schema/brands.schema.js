import { gql } from "@apollo/client";

const GET_BRANDS = gql`
    query {
        getAllBrands{
            id
            name
        }
    }
`;

export default GET_BRANDS;

