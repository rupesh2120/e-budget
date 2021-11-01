import "./App.css";
import { AddExpense } from "./components/AddExpense";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExp } from "./components/IncomeExp";
import { Transactions } from "./components/Transactions";

import { ExpenseProvider } from "./context/ExpenseState";

function App() {
	return (
		<ExpenseProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExp />
				<Transactions />
				<AddExpense />
			</div>
		</ExpenseProvider>
	);
}

export default App;
