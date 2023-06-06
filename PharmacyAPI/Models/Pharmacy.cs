using System.ComponentModel.DataAnnotations;

namespace PharmacyAPI.Models
{
	public class Pharmacy
	{
        [Editable(false)]
        public int Id { get; set; }


        [StringLength(100)]
        public required string Name { get; set; }


        [StringLength(100)]
        public required string Address { get; set; }


        [StringLength(50)]
        public required string City { get; set; }

        [StringLength(2, ErrorMessage = "State should be in two-letter format.")]
        public required string State { get; set; }

        //Regular expression that checks zipcode is in XXXXX OR XXXXXXXXX format
        [RegularExpression(@"^\d{5}(\d{4})?$", ErrorMessage = "Please enter a valid 5-9 digit zipcode")]
        public required string Zipcode { get; set; }

        public int? FilledPrescriptionsMonthToDate { get; set; }

        [Editable(false)]
        public DateTime CreatedAt { get; }

        [Editable(false)]
        public DateTime? UpdatedAt { get; set; }
    }
}