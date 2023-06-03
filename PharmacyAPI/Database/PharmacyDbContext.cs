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

        public DbSet<Pharmacy> Pharmacies { get; set; }
	}
}