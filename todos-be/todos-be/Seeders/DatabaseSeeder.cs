using Microsoft.EntityFrameworkCore;
using todos_be.Model;

namespace todos_be.Seeders
{
    public static class DatabaseSeeder
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Todo>().HasData(
                new Todo() { Id = 1, Name = "Job 1", IsCompleted = false },
                new Todo() { Id = 2, Name = "Job 2", IsCompleted = false }
            );
        }
    }
}
