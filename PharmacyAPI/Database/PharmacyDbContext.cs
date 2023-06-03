namespace PharmacyAPI.Database
{
	public class PharmacyDbContext : DbContext
	{
		public PharmacyDbContext(DbContextOptions<PharmacyDbContext> options) : base(options)
		{
		}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pharmacy>(pharmacy =>
            {
                pharmacy.Property(p => p.CreatedAt).HasDefaultValueSql("getutcdate()");
            });

            modelBuilder.Entity<Pharmacy>().HasData(
                new Pharmacy()
                {
                    Id = 1,
                    Name = "Pharmacy 1",
                    Address = "123 Test Street",
                    City = "Dallas",
                    State = "TX",
                    Zipcode = "75024",
                    FilledPrescriptionsMonthToDate = 234,
                },
                new Pharmacy()
                {
                    Id = 2,
                    Name = "Pharmacy 2",
                    Address = "234 Test Street",
                    City = "Dallas",
                    State = "TX",
                    Zipcode = "75024",
                    FilledPrescriptionsMonthToDate = 102,
                },
                new Pharmacy()
                {
                    Id = 3,
                    Name = "Pharmacy 3",
                    Address = "345 Test Street",
                    City = "Dallas",
                    State = "TX",
                    Zipcode = "75024",
                    FilledPrescriptionsMonthToDate = 983,
                },
                new Pharmacy()
                {
                    Id = 4,
                    Name = "Pharmacy 4",
                    Address = "456 Test Street",
                    City = "Dallas",
                    State = "TX",
                    Zipcode = "75024",
                    FilledPrescriptionsMonthToDate = 763,
                },
                new Pharmacy()
                {
                    Id = 5,
                    Name = "Pharmacy 5",
                    Address = "567 Test Street",
                    City = "Dallas",
                    State = "TX",
                    Zipcode = "75024",
                    FilledPrescriptionsMonthToDate = 98,
                }
            );

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Pharmacy> Pharmacies { get; set; }
	}
}