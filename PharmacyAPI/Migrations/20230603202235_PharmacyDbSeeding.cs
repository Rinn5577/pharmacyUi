using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PharmacyAPI.Migrations
{
    /// <inheritdoc />
    public partial class PharmacyDbSeeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Pharmacies",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<int>(
                name: "FilledPrescriptionsMonthToDate",
                table: "Pharmacies",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Pharmacies",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "getutcdate()");

            migrationBuilder.InsertData(
                table: "Pharmacies",
                columns: new[] { "Id", "Address", "City", "FilledPrescriptionsMonthToDate", "Name", "State", "UpdatedAt", "Zipcode" },
                values: new object[,]
                {
                    { 1, "123 Test Street", "Dallas", 234, "Pharmacy 1", "TX", null, "75024" },
                    { 2, "234 Test Street", "Dallas", 102, "Pharmacy 2", "TX", null, "75024" },
                    { 3, "345 Test Street", "Dallas", 983, "Pharmacy 3", "TX", null, "75024" },
                    { 4, "456 Test Street", "Dallas", 763, "Pharmacy 4", "TX", null, "75024" },
                    { 5, "567 Test Street", "Dallas", 98, "Pharmacy 5", "TX", null, "75024" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Pharmacies",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Pharmacies");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Pharmacies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "FilledPrescriptionsMonthToDate",
                table: "Pharmacies",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
