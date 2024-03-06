import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onCompletedChange, onDelete }: TodoListProps) => {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500 text-sm">No todos found</p>
      ) : (
        <div className="space-y-2">
          {todosSorted.map((todo) => (
            <TodoItem
              onDelete={onDelete}
              key={todo.id}
              todo={todo}
              onCompletedChange={onCompletedChange}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TodoList;
