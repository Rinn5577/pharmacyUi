namespace PharmacyAPI.Services
{
	public interface IPharmacyService
	{
		Task<List<Pharmacy>> GetAllPharmacies();
        Task<Pharmacy?> GetPharmacyByName(string name);
        Task<Pharmacy?> GetPharmacyById(int id);
		Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy pharmacy);
	}
}