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
            _todosDbContext.Todos.Add(todo);
            _todosDbContext.SaveChanges();
            return true;
        }

        public bool DeleteTodo(int id)
        {
            var entity = _todosDbContext.Todos.Find(id);
            _todosDbContext.Todos.Remove(entity);
            _todosDbContext.SaveChanges();
            return true;
        }

        public List<Todo> GetTodos()
        {
            return _todosDbContext.Todos.OrderByDescending(s => s.Id).ToList();
        }

        public bool UpdateTodo(Todo todo)
        {
            _todosDbContext.Todos.Update(todo);
            _todosDbContext.SaveChanges();
            return true;
        }
    }
}
