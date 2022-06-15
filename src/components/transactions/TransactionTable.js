import { useQuery } from "@apollo/client";
import { Pagination, Table } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { READ_TRANSACTIONS } from "../../queries/transaction.js";

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data } = useQuery(READ_TRANSACTIONS);

  useEffect(() => {
    if (data && data.readRedemptions) setTransactions(data.readRedemptions);
  }, [loading, error, data]);

    if (transactions.length === 0) {
        return <p>No transactions !</p>
    }

  return (
    <>
      <Table verticalSpacing="sm" fontSize="md">
        <thead>
          <tr>
            <th>MerchantId</th>
            <th>CustomerId</th>
            <th>Amount</th>
            <th>Discount</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
            
          {transactions
            .slice(10 * (currentPage - 1), 10 * currentPage)
            .map((c) => (
              <tr>
                <td>{c.merchantId}</td>
                <td>{c.customerId}</td>
                <td>{c.amount}</td>
                <td>{c.discount}</td>
                <td>{c.time}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination
        total={Math.ceil(transactions.length / 10)}
        page={currentPage}
        onChange={(v) => setCurrentPage(v)}
      />
    </>
  );
}

export default TransactionTable;
