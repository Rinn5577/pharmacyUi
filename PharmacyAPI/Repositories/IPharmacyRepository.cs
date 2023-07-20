namespace PharmacyAPI.Repositories
{
	public interface IPharmacyRepository
	{
		public Task<List<Pharmacy>> GetAllPharmacies();
        public Task<Pharmacy?> GetPharmacyByName(string name);
        public Task<Pharmacy?> GetPharmacyById(int id);
		public Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy updatedPharmacy);
	}
}