using System.ComponentModel.DataAnnotations;

namespace PharmacyAPI.Models
{
	public class Pharmacy
	{
        [Required]
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
        [RegularExpression(@"^\d{5}([-]|\s*)?(\d{4})?$", ErrorMessage = "Please enter a valid 5-9 digit zipcode")]
        public string Zip { get; set; }

        public int? FilledPrescriptions { get; set; } = 0;

        [Required]
        [Editable(false)]
        public DateTime CreatedAt { get; } = DateTime.Now;

        [Editable(false)]
        public DateTime? UpdatedAt { get; }
    }
}