import {gql} from '@apollo/client'

export const GET_ALL = gql `
    query{
        vehicles {
            title
            description
            icons {
              large
              medium
            }
            level
            type {
              name
                title
              icons {
                default
              }
            }
            nation {
              name
              title
              color
              icons {
                small
                medium
                large
              }
            }
          }
    }

`