using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace todos_be.Migrations
{
    /// <inheritdoc />
    public partial class seeddatas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "todos",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Job 1" },
                    { 2, "Job 2" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "todos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "todos",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
