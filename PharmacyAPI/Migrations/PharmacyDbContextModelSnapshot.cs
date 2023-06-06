﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PharmacyAPI.Database;

#nullable disable

namespace PharmacyAPI.Migrations
{
    [DbContext(typeof(PharmacyDbContext))]
    partial class PharmacyDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("PharmacyAPI.Models.Pharmacy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValueSql("getutcdate()");

                    b.Property<int?>("FilledPrescriptionsMonthToDate")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasMaxLength(2)
                        .HasColumnType("nvarchar(2)");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Zipcode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Pharmacies", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "123 Test Street",
                            City = "Dallas",
                            CreatedAt = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FilledPrescriptionsMonthToDate = 234,
                            Name = "Pharmacy 1",
                            State = "TX",
                            Zipcode = "75024"
                        },
                        new
                        {
                            Id = 2,
                            Address = "234 Test Street",
                            City = "Dallas",
                            CreatedAt = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FilledPrescriptionsMonthToDate = 102,
                            Name = "Pharmacy 2",
                            State = "TX",
                            Zipcode = "75024"
                        },
                        new
                        {
                            Id = 3,
                            Address = "345 Test Street",
                            City = "Dallas",
                            CreatedAt = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FilledPrescriptionsMonthToDate = 983,
                            Name = "Pharmacy 3",
                            State = "TX",
                            Zipcode = "75024"
                        },
                        new
                        {
                            Id = 4,
                            Address = "456 Test Street",
                            City = "Dallas",
                            CreatedAt = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FilledPrescriptionsMonthToDate = 763,
                            Name = "Pharmacy 4",
                            State = "TX",
                            Zipcode = "75024"
                        },
                        new
                        {
                            Id = 5,
                            Address = "567 Test Street",
                            City = "Dallas",
                            CreatedAt = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FilledPrescriptionsMonthToDate = 98,
                            Name = "Pharmacy 5",
                            State = "TX",
                            Zipcode = "75024"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
