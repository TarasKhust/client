import { gql } from "@apollo/client";

const GET_BRAND = gql`
    query($id: String!) {
     getBrandById(id: $id){
        id
        name
        description
        metaTagsDescription
        metaTags
        createdAt
        updatedAt
        product{
            id
          image
          name
          vendor
          status
          price
          count
          minimalCount
          description
          createdAt
        }
        }
    }
`;

export default GET_BRAND;
