namespace PharmacyAPI.Services
{
    public interface IPharmacyService
    {
        /*
        public Task<List<Pharmacy>> GetAllPharmacies();
        public Task<List<Pharmacy>> GetPharmacyByName(string name);
        public Task<List<Pharmacy>> GetFavoriteById(List<int> pharmacyIds);
        public Task<Pharmacy?> GetPharmacyById(int id);
        */
        public Task<List<Pharmacy>> GetPharmacyList(List<int> ids, string name);
        public Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy updatedPharmacy);
    }
}