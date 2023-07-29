using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices;

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
        /*
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

        //Return a list of favorite pharmacies by ID 
        [HttpGet("favorites")]
         public async Task<ActionResult<List<Pharmacy>>> GetFavoriteById([FromQuery] List<int> ids)
        //public async Task<ActionResult<List<Pharmacy>>> GetFavoriteById(List<int> ids)

        {
            var pharmacies = await _pharmacyService.GetFavoriteById(ids);
            if (pharmacies is null) 
            {
                return NotFound("Sorry no favorites found");
            }
            return Ok(pharmacies);
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

        */
        [HttpGet]
        public async Task<ActionResult<Pharmacy>> GetPharmacyList(int page, int pageSize, [Optional][FromQuery]List<int> ids, string name = "")
        {
            var fullPharmacyList = await _pharmacyService.GetPharmacyList(ids, name);
            var paginatedPharmacyList = fullPharmacyList.Skip((page - 1) * pageSize).Take(pageSize).ToList();
            var totalCount = fullPharmacyList.Count;

            if (paginatedPharmacyList.Count == 0)
            {
                return NotFound("Sorry, we couldn't find any pharmacies matching that request.");
            }

            return Ok(paginatedPharmacyList);
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

