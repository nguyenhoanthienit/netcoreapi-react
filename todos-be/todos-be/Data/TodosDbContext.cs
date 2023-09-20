using Microsoft.EntityFrameworkCore;
using todos_be.Configuration;
using todos_be.Model;
using todos_be.Seeders;

namespace todos_be.Data
{
    public class TodosDbContext : DbContext
    {
        public TodosDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TodoConfiguration());
            modelBuilder.Seed();
        }

        public DbSet<Todo> Todos { get; set; }
    }
}
