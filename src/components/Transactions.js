import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseState";
import { Transaction } from "./Transaction";

export const Transactions = () => {
	const { transactions } = useContext(ExpenseContext);

	return (
		<div>
			<h3>History</h3>
			<ul className="list">
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</div>
	);
};
