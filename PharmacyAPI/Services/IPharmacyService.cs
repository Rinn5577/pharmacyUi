namespace PharmacyAPI.Services
{
    public interface IPharmacyService
    {
        public Task<List<Pharmacy>> GetPharmacyList(int page, int pageSize, List<int> id, string? name);
        public Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy updatedPharmacy);
    }
}