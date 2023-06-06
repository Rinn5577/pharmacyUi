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

        /// <summary>
        /// Retries all pharmacies
        /// </summary>
        /// <response code="200">Pharmacies found</response>
        /// <response code="404">No pharmacies found</response>
        [HttpGet]
        public async Task<ActionResult<List<Pharmacy>>> GetAllPharmacies()
        {
            var pharmacies = await _pharmacyService.GetAllPharmacies();

            if (pharmacies is null)
            {
                return NotFound("Sorry, no pharmacies to display.");
            }

            return Ok(pharmacies);
        }

        /// <summary>
        /// Retries a pharmacy by id
        /// </summary>
        /// <response code="200">Pharmacy found</response>
        /// <response code="404">No pharmacy found</response>
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

        /// <summary>
        /// Updates a pharmacy by id
        /// </summary>
        /// <response code="200">Pharmacy found</response>
        /// <response code="404">No pharmacy found</response>
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

