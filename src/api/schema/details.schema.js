import { gql } from "@apollo/client";

const GET_DETAILS = gql`
    query($id: String!) {
     getProductById(id: $id){
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
