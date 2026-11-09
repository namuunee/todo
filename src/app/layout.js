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
        <div className="container">
            <div className="todo-list">
                <div>
                    <h1 className="header">To-do list</h1>

                    <div className="body">
                        <div className="search-add-bar">
                            <input 
                                className="search-bar"
                                type="text"
                                placeholder="Add a new task..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                />
                                <div 
                                    className="btn-add-todo"
                                    onClick={handleAdd}
                                    style={{cursor: "pointer"}}
                                    >
                                        Add
                                    </div>
                        </div>

                        <div className="buttons">
                            <div 
                                className="btn-all"
                                onClick={() =>setFilter("Complete")}
                                style={{cursor: "pointer"}}
                                >
                                    Complete
                                </div>
                        </div>

                        <div style={{marginTop: "24px"}}>
                            {visibleToDos.length === 0 ? (
                                <div className="no-task"> No task yet. Add one above!</div>
                             ) : (
                                visibleToDos.map((todo) => (
                                    <>
                                    <div
                                        key={todo.id}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0px",
                                        }}
                                    >
                                        <input 
                                            type="checkbox"
                                            checked={todo.isDone}
                                            onChange={() => toggleToDo(todo.id)}
                                        />
                                        <span style={{
                                            textDecoration: todo.isDone ? "line-through" : "none",
                                        }}
                                        >
                                            {todo.text}
                                        </span>
                                    </div>

                                    <div 
                                        onClick={() => deleteTodo(todo.id)}
                                        style={{
                                            color: "red",
                                            cursor:"pointer",
                                            fontSize: "16px"


                                        }}
                                    >
                                        Delete
                                    </div>


                                    </>

                                   
                                ))
                             )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}