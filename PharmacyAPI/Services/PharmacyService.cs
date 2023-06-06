namespace PharmacyAPI.Services
{
	public class PharmacyService : IPharmacyService
	{
        private readonly IPharmacyRepository _pharmacyRepository;

        public PharmacyService(IPharmacyRepository pharmacyRepository)
        {
            this._pharmacyRepository = pharmacyRepository;
        }

        public async Task<List<Pharmacy>> GetAllPharmacies()
        {
            var pharmacies = await _pharmacyRepository.GetAllPharmacies();
            return  pharmacies;
        }

        public async Task<Pharmacy?> GetPharmacyById(int id)
        {
            var pharmacy = await _pharmacyRepository.GetPharmacyById(id);
            return pharmacy;
        }

        public async Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy updatedPharmacy)
        {
            if(updatedPharmacy is null)
            {
                return updatedPharmacy;
            }

            var pharmacy = await _pharmacyRepository.UpdatePharmacyById(id, updatedPharmacy);

            return pharmacy;
        }
    }
}