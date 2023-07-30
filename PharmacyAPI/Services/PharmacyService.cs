using Microsoft.EntityFrameworkCore;

namespace PharmacyAPI.Services
{
    public class PharmacyService : IPharmacyService
    {
        private readonly PharmacyDbContext _pharmacyDbContext;

        public PharmacyService(PharmacyDbContext pharmacyDbContext)
        {
            _pharmacyDbContext = pharmacyDbContext;
        }

        public async Task<List<Pharmacy>> GetPharmacyList(int page, int pageSize, List<int> ids, string? name)
        {
            var query = from p in _pharmacyDbContext.Pharmacies
                        select p;

            if(ids.Count() != 0 ) query = query.Where(p => ids.Contains(p.Id));
            if(!string.IsNullOrEmpty(name)) query = query.Where(p => p.Name.Contains(name));

            query = query.OrderBy(p => p.Id).Skip((page - 1) * pageSize).Take(pageSize);

            var pharmacyList = await query.ToListAsync();
            return pharmacyList;
        }

        public async Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy updatedPharmacy)
        {
            var nameParam = "";
            var idParam = new List<int>
            {
                id
            };
            var pharmacyList = await GetPharmacyList(1, 3, idParam, nameParam);
            var pharmacy = pharmacyList[0];
            

            if (pharmacy is not null)
            {
                //Update occurs only if fields contain a value other than null or white spaces 
                pharmacy.Name =
                    !string.IsNullOrWhiteSpace(updatedPharmacy.Name) ? updatedPharmacy.Name : pharmacy.Name;
                pharmacy.Address =
                    !string.IsNullOrWhiteSpace(updatedPharmacy.Address) ? updatedPharmacy.Address : pharmacy.Address;
                pharmacy.City =
                    !string.IsNullOrWhiteSpace(updatedPharmacy.City) ? updatedPharmacy.City : pharmacy.City;
                pharmacy.State =
                    !string.IsNullOrWhiteSpace(updatedPharmacy.State) ? updatedPharmacy.State : pharmacy.State;
                pharmacy.Zipcode =
                    !string.IsNullOrWhiteSpace(updatedPharmacy.Zipcode) ? updatedPharmacy.Zipcode : pharmacy.Zipcode;
                pharmacy.FilledPrescriptionsMonthToDate =
                    updatedPharmacy.FilledPrescriptionsMonthToDate is not null ? updatedPharmacy.FilledPrescriptionsMonthToDate : pharmacy.FilledPrescriptionsMonthToDate;
                pharmacy.UpdatedAt = DateTime.UtcNow;
            }

            await _pharmacyDbContext.SaveChangesAsync();

            return pharmacy;
        }
    }
}