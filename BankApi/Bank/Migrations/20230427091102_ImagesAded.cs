using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bank.Migrations
{
    /// <inheritdoc />
    public partial class ImagesAded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserImage",
                table: "Users",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CardExpirationDate", "UserImage" },
                values: new object[] { new DateTime(2024, 4, 27, 13, 11, 1, 968, DateTimeKind.Local).AddTicks(5707), "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CardExpirationDate", "UserImage" },
                values: new object[] { new DateTime(2024, 4, 27, 13, 11, 1, 968, DateTimeKind.Local).AddTicks(5718), "https://randomuser.me/api/portraits/women/65.jpg" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserImage",
                table: "Users");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "CardExpirationDate",
                value: new DateTime(2024, 4, 27, 13, 8, 7, 238, DateTimeKind.Local).AddTicks(63));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "CardExpirationDate",
                value: new DateTime(2024, 4, 27, 13, 8, 7, 238, DateTimeKind.Local).AddTicks(80));
        }
    }
}
