import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deletedAllCompleted: () => void;
}

const TodoSummary = ({ todos, deletedAllCompleted }: TodoSummaryProps) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2 ">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} Todos Completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deletedAllCompleted}
          className="text-sm font-medium text-red-500 hover:underline"
        >
          Delete All Completed
        </button>
      )}
    </div>
  );
};

export default TodoSummary;
