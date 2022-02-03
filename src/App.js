import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Todos from "./components/todos/Todos";
import { useGlobalState } from "./context";
import "./scss/index.css";

function App() {
    const { isDark } = useGlobalState();
    return (
        <main className={isDark ? "app dark" : "app light"}>
            <div className="app__hero" />
            <section className="container">
                <Header />
                <Input />
                <Todos />
            </section>
            <footer className="app__footer">
                Drag and drop to reorder list
            </footer>
        </main>
    );
}

export default App;
