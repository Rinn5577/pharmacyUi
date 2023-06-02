using Microsoft.AspNetCore.Mvc;
using PharmacyAPI.Models;

namespace PharmacyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PharmacyController : Controller
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


        [HttpGet]
        public async Task<ActionResult<List<Pharmacy>>> GetAllPharmacies()
        {
            if (pharmacies is null || !pharmacies.Any())
            {
                return NotFound("Sorry, no pharmacies to display.");
            }
            return Ok(pharmacies);
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<Pharmacy>> GetPharmacyById(int id)
        {
            var pharmacy = pharmacies.Find(pharmacy => pharmacy.Id == id);

            if (pharmacy is null)
            {
                return NotFound("Sorry, a pharmacy with id " + id + " does not exist.");
            }

            return Ok(pharmacy);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Pharmacy>> UpdatePharmacyById(int id, Pharmacy updatedPharmacy)
        {
            var pharmacy = pharmacies.Find(pharmacy => pharmacy.Id == id);

            if (pharmacy is null)
            {
                return NotFound("Sorry, a pharmacy with id: " + id + " does not exist.");
            }

            pharmacy.Name = updatedPharmacy.Name;
            pharmacy.Address = updatedPharmacy.Address;
            pharmacy.City = updatedPharmacy.City;
            pharmacy.State = updatedPharmacy.State;
            pharmacy.Zipcode = updatedPharmacy.Zipcode;
            pharmacy.FilledPrescriptionsMonthToDate = updatedPharmacy.FilledPrescriptionsMonthToDate;
            pharmacy.UpdatedAt = DateTime.Now;

            return Ok(pharmacy);
        }
    }
}

