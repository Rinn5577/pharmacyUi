namespace PharmacyAPI.Services
{
	public class PharmacyService : IPharmacyService
	{

        private static List<Pharmacy> pharmacies = new List<Pharmacy> {
             new Pharmacy()
            {
                Id = 1,
                Name = "Pharmacy 1",
                Address = "123 Test Street",
                City = "Dallas",
                State = "TX",
                Zipcode = "75024",
                FilledPrescriptionsMonthToDate = 234,
            },
                new Pharmacy()
                {
                    Id = 2,
                    Name = "Pharmacy 2",
                    Address = "234 Test Street",
                    City = "Dallas",
                    State = "TX",
                    Zipcode = "75024",
                    FilledPrescriptionsMonthToDate = 102,
                },
                new Pharmacy()
                {
                    Id = 3,
                    Name = "Pharmacy 3",
                    Address = "345 Test Street",
                    City = "Dallas",
                    State = "TX",
                    Zipcode = "75024",
                    FilledPrescriptionsMonthToDate = 983,
                },
                new Pharmacy()
                {
                    Id = 4,
                    Name = "Pharmacy 4",
                    Address = "456 Test Street",
                    City = "Dallas",
                    State = "TX",
                    Zipcode = "75024",
                    FilledPrescriptionsMonthToDate = 763,
                },
                new Pharmacy()
                {
                    Id = 5,
                    Name = "Pharmacy 5",
                    Address = "567 Test Street",
                    City = "Dallas",
                    State = "TX",
                    Zipcode = "75024",
                    FilledPrescriptionsMonthToDate = 98,
                }
        };
        public async Task<List<Pharmacy>?> GetAllPharmacies()
        {
            return pharmacies;
        }

        public async Task<Pharmacy?> GetPharmacyById(int id)
        {
            return pharmacies.Find(pharmacy => pharmacy.Id == id);
        }

        public async Task<Pharmacy?> UpdatePharmacyById(int id, Pharmacy updatedPharmacy)
        {
            var pharmacy = pharmacies.Find(pharmacy => pharmacy.Id == id);


            if (pharmacy is not null)
            {
                pharmacy.Name = updatedPharmacy.Name;
                pharmacy.Address = updatedPharmacy.Address;
                pharmacy.City = updatedPharmacy.City;
                pharmacy.State = updatedPharmacy.State;
                pharmacy.Zipcode = updatedPharmacy.Zipcode;
                pharmacy.FilledPrescriptionsMonthToDate = updatedPharmacy.FilledPrescriptionsMonthToDate;
                pharmacy.UpdatedAt = DateTime.Now;
            }

            return pharmacy;
        }
    }
}