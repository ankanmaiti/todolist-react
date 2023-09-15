import Task from "./components/Todo/Task";
import Input from "./components/Todo/Input";
import Header from "./components/Todo/Header";
import { useTodos } from "./context/TodoProvider";

export default function App() {
  const { todos } = useTodos();

  return (
    <>
      <div className="grid h-screen place-items-center bg-indigo-500">
        <main className="grid w-full max-w-xl gap-12">
          {/* title */}
          <h1 className="text-center text-3xl uppercase text-white drop-shadow-sm">
            Todo list
          </h1>

          <Input />

          {/* todo list */}
          <section className="mx-auto h-max w-full overflow-hidden rounded bg-white">
            <Header />

            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <Task todo={todo} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
