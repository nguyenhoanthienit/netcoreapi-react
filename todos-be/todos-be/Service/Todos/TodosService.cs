using todos_be.Data;
using todos_be.Model;

namespace todos_be.Service.Todos
{
    public class TodosService : ITodosService
    {
        private readonly TodosDbContext _todosDbContext;

        public TodosService(TodosDbContext todosDbContext)
        {
            _todosDbContext = todosDbContext;
        }

        public bool AddTodo(Todo todo)
        {
            throw new NotImplementedException();
        }

        public bool DeleteTodo(Todo todo)
        {
            throw new NotImplementedException();
        }

        public List<Todo> GetTodos()
        {
            return _todosDbContext.Todos.OrderByDescending(s => s.Id).ToList();
        }

        public bool UpdateTodo(Todo todo)
        {
            throw new NotImplementedException();
        }
    }
}
