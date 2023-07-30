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

        [HttpGet]
        public async Task<ActionResult<Pharmacy>> GetPharmacyList(int page, int pageSize, [Optional][FromQuery] List<int> ids, string name = "")
        {
            var pharmacyList = await _pharmacyService.GetPharmacyList(page, pageSize, ids, name);

            if (pharmacyList.Count == 0)
            {
                return NotFound("Sorry, we couldn't find any pharmacies matching that request.");
            }

            return Ok(pharmacyList);
        }

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

