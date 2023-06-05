namespace PharmacyAPI.Repositories
{
	public class PharmacyRepository : IPharmacyRepository
	{
        private readonly PharmacyDbContext _pharmacyDbContext;

		public PharmacyRepository(PharmacyDbContext pharmacyDbContext)
		{
            this._pharmacyDbContext = pharmacyDbContext;
		}

        public async Task<List<Pharmacy>> GetAllPharmacies()
        {
            var pharmacies = await _pharmacyDbContext.Pharmacies.ToListAsync();
            return pharmacies;
        }

        public async Task<Pharmacy?> GetPharmacyById(int id)
        {
            var pharmacy = await _pharmacyDbContext.Pharmacies.FirstOrDefaultAsync(pharmacy => pharmacy.Id == id);
            return pharmacy;
        }

        public async Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy updatedPharmacy)
        {
            var pharmacy = await _pharmacyDbContext.Pharmacies.FirstOrDefaultAsync(pharmacy => pharmacy.Id == id);
            if(pharmacy is not null)
            {
                pharmacy.Name =
                    !String.IsNullOrWhiteSpace(updatedPharmacy.Name) ? updatedPharmacy.Name : pharmacy.Name;
                pharmacy.Address =
                    !String.IsNullOrWhiteSpace(updatedPharmacy.Address) ? updatedPharmacy.Address : pharmacy.Address;
                pharmacy.City =
                    !String.IsNullOrWhiteSpace(updatedPharmacy.City) ? updatedPharmacy.City: pharmacy.City;
                pharmacy.State =
                    !String.IsNullOrWhiteSpace(updatedPharmacy.State) ? updatedPharmacy.State : pharmacy.State;
                pharmacy.Zipcode =
                    !String.IsNullOrWhiteSpace(updatedPharmacy.Zipcode) ? updatedPharmacy.Zipcode : pharmacy.Zipcode;
                pharmacy.FilledPrescriptionsMonthToDate =
                    updatedPharmacy.FilledPrescriptionsMonthToDate is not null ? updatedPharmacy.FilledPrescriptionsMonthToDate : pharmacy.FilledPrescriptionsMonthToDate;
                pharmacy.UpdatedAt = DateTime.UtcNow;
            }

            await _pharmacyDbContext.SaveChangesAsync();

            return pharmacy;
        }
    }
}