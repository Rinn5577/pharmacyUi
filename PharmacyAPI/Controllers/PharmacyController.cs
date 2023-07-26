using Microsoft.AspNetCore.Mvc;

namespace PharmacyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PharmacyController : Controller
    {
        private readonly IPharmacyService _pharmacyService;

        public PharmacyController(IPharmacyService pharmacyService) {
            this._pharmacyService = pharmacyService;
        }

        // Returns all pharmacies
        //rename to getPaginationPharmacyList - paginated - paged 
        //remove plurals 
        [HttpGet]
        public async Task<ActionResult<List<Pharmacy>>> GetAllPharmacies(int page, int pageSize)
        {
            
            var pharmacies = await _pharmacyService.GetAllPharmacies();
            var pharmaciesPerPage = pharmacies.Skip((page -1) * pageSize).Take(pageSize).ToList();

            if (pharmaciesPerPage is null)
            {
                return NotFound("Sorry, no pharmacies to display.");
            }

            return Ok(pharmaciesPerPage);
        }


        //Returns pharmacy by name 
        [HttpGet("byName/{name}")]
        public async Task<ActionResult<List<Pharmacy>>> GetPharmacyByName(string name, int page, int pageSize)
        {
            var pharmacies = await _pharmacyService.GetPharmacyByName(name);
            var pharmaciesPerPage = pharmacies.Skip((page - 1) * pageSize).Take(pageSize).ToList();

            if (pharmaciesPerPage is null)
            {
                return NotFound("Sorry, a pharmacy with id " + name + " does not exist.");
            }

            return Ok(pharmaciesPerPage);

        }

        // Returns a pharmacy by id
        [HttpGet("{id}")]
        public async Task<ActionResult<Pharmacy>> GetPharmacyById(int id)
        {
            var pharmacy = await _pharmacyService.GetPharmacyById(id);

            if (pharmacy is null)
            {
                return NotFound("Sorry, a pharmacy with id " + id + " does not exist.");
            }

            return Ok(pharmacy);
        }



        // Updates a pharmacy by id
        [HttpPut("{id}")]
        public async Task<ActionResult<Pharmacy>> UpdatePharmacyById(int id, Pharmacy updatedPharmacy)
        {
            var pharmacy = await _pharmacyService.UpdatePharmacyById(id, updatedPharmacy);

            if (pharmacy is null)
            {
                return NotFound("Sorry, a pharmacy with id: " + id + " does not exist.");
            }

            return Ok(pharmacy);
        }
    }
}

