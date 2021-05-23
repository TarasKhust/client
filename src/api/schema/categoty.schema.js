import { gql } from "@apollo/client";

const GET_CATEGORY = gql`
    query {
        categoryFindAll{
            id
            title
            disabled
            label
            value
            children {id title}
        }
    }
`;

export default GET_CATEGORY;
