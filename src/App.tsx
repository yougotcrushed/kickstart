import { useReducer, useState } from "react";
import "./App.css";
import ExpandableText from "./components/ExpandableText";
import Form3 from "./components/Form3";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import FetchDataInfinite from "./react-query/FetchDataInfinite";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/counter/Counter";
import Counter1 from "./state-management/counter/Counter1";
import authReducer from "./state-management/reducers/authReducer";
import authContext from "./state-management/contexts/AuthContext";
import LonginStatus from "./state-management/auth/LonginStatus";
import AuthContext from "./state-management/contexts/AuthContext";
import Counter2 from "./state-management/counter/Counter2";
import LonginStatus1 from "./state-management/auth/LonginStatus1";
import Text from "./components/text/Text";

let items = ["USA", "UK", "Canada", "Germany", "Austrial"];

function App() {
  const [alertvisible, setAlertVisibility] = useState(false);
  const [cartItem, setCartItem] = useState(["product", "product", "product"]);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 10, category: "Groceries" },
    { id: 2, description: "gotv", amount: 4000, category: "Utilities" },
    { id: 3, description: "tea", amount: 10, category: "Groceries" },
    { id: 4, description: "dstv", amount: 10000, category: "Utilities" },
  ]);

  const VisibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <>
      <AuthContext.Provider value={{ user, dispatch }}>
        <Counter2 />
        <LonginStatus1 />
      </AuthContext.Provider>
    </>
  );
}

export default App;
