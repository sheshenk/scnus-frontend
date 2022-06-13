import { useQuery } from "@apollo/client";
import { Pagination, Table } from "@mantine/core";
import React, { useEffect, useState } from 'react';
import { READ_CUSTOMERS } from '../../../queries/customers.js'

function CustomerTable() {
	const [customers, setCustomers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1)

	const { loading, error, data } = useQuery(READ_CUSTOMERS)

	useEffect(() => {
		if (data && data.readCustomers) setCustomers(data.readCustomers)
	}, [loading, error, data])

	return ( 
		<>
			<Table verticalSpacing='sm' fontSize='md'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone</th>
						<th>Tokens</th>
						<th>Redemptions</th>
					</tr>
				</thead>
				<tbody>
					{customers.map(c => (
						<tr>
							<td>{c.name}</td>
							<td>{c.phone}</td>
							<td>{c.tokenCount}</td>
							<td>{c.redemptionCount}</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Pagination total={Math.ceil(customers.length / 10)}/>
		</>
		
	 )
}

export default CustomerTable;