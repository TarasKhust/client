import React from 'react'
import { gql, useQuery } from '@apollo/client'

const Contact = () => {

	const { loading, error, data } = useQuery(gql`
      {
          rates(currency: "USD") {
              currency
              rate
          }
      }
	`);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	return (
			<div>
				{data.rates.map(({ currency, rate }) => (
						<div key={currency}>
							<p>
								{currency}: {rate}
							</p>
						</div>))}
			</div>
	)
}

export default Contact
