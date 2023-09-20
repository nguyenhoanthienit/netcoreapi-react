using todos_be.Model;

namespace todos_be.Service.Todos
{
    public interface ITodosService
    {
        List<Todo> GetTodos();
        bool AddTodo(Todo todo);
        bool UpdateTodo(Todo todo);
        bool DeleteTodo(Todo todo);
    }
}
