namespace PharmacyAPI.Services
{
    public class PharmacyService : IPharmacyService
    {
        private readonly PharmacyDbContext _pharmacyDbContext;

        public PharmacyService(PharmacyDbContext pharmacyDbContext)
        {
            _pharmacyDbContext = pharmacyDbContext;
        }
        /*
        public async Task<List<Pharmacy>> GetAllPharmacies()
        {
            var pharmacies = await _pharmacyDbContext.Pharmacies.ToListAsync();
            return pharmacies;
        }
        public async Task<List<Pharmacy>> GetPharmacyByName(string name)
        {
            var pharmacies = await _pharmacyDbContext.Pharmacies.Where(pharm => pharm.Name.Contains(name)).ToListAsync();
            return pharmacies;
        }
        public async Task<List<Pharmacy>> GetFavoriteById(List<int> pharmacyIds)
        {
            var pharmacies = new List<Pharmacy>();
            foreach (var item in pharmacyIds)
            {
                var pharmacy = await _pharmacyDbContext.Pharmacies.FirstOrDefaultAsync(pharm => pharm.Id == item);
                if (pharmacy != null)
                {
                    pharmacies.Add(pharmacy);
                }
            }
            return pharmacies;
        }
        public async Task<Pharmacy?> GetPharmacyById(int id)
        {
            var pharmacy = await _pharmacyDbContext.Pharmacies.FirstOrDefaultAsync(pharm => pharm.Id == id);
            return pharmacy;
        }
        */

        public async Task<List<Pharmacy>> GetPharmacyList(List<int> ids, string name)
        {
            System.Diagnostics.Debug.WriteLine("incoming params" + ids.ToString() + name);
            var pharmacyList = new List<Pharmacy>();
            if (name.Length > 0)
            {
                pharmacyList = await _pharmacyDbContext.Pharmacies.Where(pharm => pharm.Name.Contains(name)).ToListAsync();
            }
            else if (ids.Count > 0)
            {
                foreach (var id in ids)
                {
                    var pharmacy = await _pharmacyDbContext.Pharmacies.FirstOrDefaultAsync(pharm => pharm.Id == id);
                    if (pharmacy != null)
                    {
                        pharmacyList.Add(pharmacy);
                    }
                }
            }
            else
            {
                pharmacyList = await _pharmacyDbContext.Pharmacies.ToListAsync();
            }
            return pharmacyList;

        }

        public async Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy updatedPharmacy)
        {
            //var pharmacyList = await _pharmacyDbContext.Pharmacies.ToListAsync();
            var nameParam = "";
            var idParam = new List<int>
            {
                id
            };
            var pharmacyList = await GetPharmacyList(idParam, nameParam);
            System.Diagnostics.Debug.WriteLine(pharmacyList);
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