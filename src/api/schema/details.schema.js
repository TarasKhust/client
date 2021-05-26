import { gql } from "@apollo/client";

const GET_DETAILS = gql`
    query {
     getProductById(id: "f438bb2b-b6d5-435f-a8f5-cb321edcc5c3"){
            id
            image
            name
            price
            count
            minimalCount
            vendor
            statusExist
            status
            brand{
            name
            }
            category{
            name
            }
            description
            tags
            metaDescription
            metaDataTagKeyword
            seoUrl
            createdAt
            updatedAt
            productAttribute{
            attribute
            attribute_group
        }
    }
    }
`;

export default GET_DETAILS;
