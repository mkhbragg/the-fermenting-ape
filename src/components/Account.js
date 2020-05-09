
import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Account = ({ }) => {
  return (
    <StaticQuery
        query={graphql`
          query StripeCustomers {
            customers: allStripeCustomer {
              edges {
                node {
                  name
                  id
                }
              }
            }
          }
        `}
        render={({ customers }) => (
          <div>
            {customers.edges.map(({ node: customer }) => {
              console.log(customer)
              return <span>boop</span>
            })}
          </div>
        )}
      />
  )
}

export default Account
