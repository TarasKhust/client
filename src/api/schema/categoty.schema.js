import { gql } from "@apollo/client";

const GET_CATEGORY = gql`
    query {
        categoryFindAll{
            id
            title
            children {id title}
        }
    }
`;

export default GET_CATEGORY;
