import { gql } from "@apollo/client";

const GET_SHOPPING_CARD = gql`
    query getShoppingCard {
        getAllProducts {
            categories
            count
            description
            id
        }
    }
`;

export default GET_SHOPPING_CARD;
