import { useQuery } from "@apollo/client";
import { Pagination, Table } from "@mantine/core";
import React, { useEffect, useState } from 'react';
import { READ_MERCHANTS } from '../../queries/merchants'

function MerchantTable() {
	const [merchants, setMerchants] = useState([]);
	const [currentPage, setCurrentPage] = useState(1)

	const { loading, error, data } = useQuery(READ_MERCHANTS)

	useEffect(() => {
		if (data && data.readMerchants) setMerchants(data.readMerchants)
	}, [loading, error, data])

	return ( 
		<>
			<Table verticalSpacing='sm' fontSize='md'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{merchants.slice(10 * (currentPage - 1), 10 * currentPage).map(c => (
						<tr>
							<td>{c.name}</td>
							<td>{c.phone}</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Pagination total={Math.ceil(merchants.length / 10)} page={currentPage} onChange={v => setCurrentPage(v)}/>
		</>
		
	 )
}

export default MerchantTable;