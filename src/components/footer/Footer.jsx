import React from "react";
import { useGlobalState } from "../../context";

const Footer = () => {
    const { todos, setFilter, filter, setTodos } = useGlobalState();
    const clearCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    };

    return (
        <footer className="footer">
            <p className="footer__total">
                {todos.filter((todo) => !todo.completed).length} items left
            </p>
            <div className="footer__filter">
                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>
                <button
                    className={filter === "active" ? "active" : ""}
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>
                <button
                    className={filter === "completed" ? "active" : ""}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
            </div>
            <button className="footer__clear" onClick={clearCompleted}>
                Clear Completed
            </button>
        </footer>
    );
};

export default Footer;
