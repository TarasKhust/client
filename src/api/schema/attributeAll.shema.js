import { gql } from "@apollo/client";

const GET_ATTRIBUTE = gql`
    query {
        attributeGroupFindAll{
            id
            name
            attribute {id name}
        }
    }
`;

export default GET_ATTRIBUTE;
