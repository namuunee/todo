"use client";

import { useStats } from "react";
import "./globals.css";

export default function Home() {
    const [todes, setTodos] = useState([]);
    const [iportValue, setInputValue] = useState("");
    const [filter, setFilter] = useState ("All");

    const handleAdd = () => {
        if (inputValue === "" ) return;

        const newToDo = {
            id: Date.now(),
            text: imputValue,
            isDone: false,
        };

        setTodos([...setTodos, newToDo]);
        setInputValue("");
    };

    const toggleToDo = (idToToggle) => {
        const updateList = setTodos.map((todo) => {
            if (todo.id === idToToggle) {
                return {...todo, isDone: !todo.isDone };
            }
            return todo;
        });

        setTodos(updatedList);
    };

    const visibleToDos = setTodos.filter((todo) => {
        if (filter === "Active") return todo.isDone === false;
        if (filter === "Complete") return todo.isDone === true;
        return true;
    });

    return (
        <div className="container"></div>
    )
}