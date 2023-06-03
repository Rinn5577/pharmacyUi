using System.ComponentModel.DataAnnotations;

namespace PharmacyAPI.Models
{
	public class Pharmacy
	{
        [Editable(false)]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [StringLength(100)]
        public string Address { get; set; }

        [Required]
        [StringLength(50)]
        public string City { get; set; }

        [Required]
        [StringLength(2, ErrorMessage = "State should be in two-letter format.")]
        public string State { get; set; }

        [Required]
        [RegularExpression(@"^\d{5}(\d{4})?$", ErrorMessage = "Please enter a valid 5-9 digit zipcode")]
        public string Zipcode { get; set; }

        public int? FilledPrescriptionsMonthToDate { get; set; }

        [Required]
        [Editable(false)]
        public DateTime CreatedAt { get; }

        [Editable(false)]
        public DateTime? UpdatedAt { get; set; }
    }
}