namespace PharmacyAPI.Services
{
	public interface IPharmacyService
	{
		Task<List<Pharmacy>> GetAllPharmacies();
        Task<List<Pharmacy>> GetPharmacyByName(string name);
		Task<List<Pharmacy>> GetFavoriteById(List<int> ids);
        Task<Pharmacy?> GetPharmacyById(int id);
		Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy pharmacy);
	}
}