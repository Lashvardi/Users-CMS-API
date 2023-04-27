using System.ComponentModel.DataAnnotations;

namespace Bank.models;

public class User
{
    [Key]
    public int Id { get; set; }
    public string UserImage { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    [Required]
    [StringLength(16, MinimumLength = 16, ErrorMessage = "Card Number must be exactly 16 digits long")]
    public string CardNumber { get; set; }

    [Required]
    [StringLength(4, MinimumLength = 4, ErrorMessage = "Card Pin must be exactly 4 digits long")]
    public string CardPin { get; set; }

    [Required]
    [StringLength(3, MinimumLength = 3, ErrorMessage = "Card CVV must be exactly 3 digits long")]
    public string CardCvv { get; set; }
    public DateTime CardExpirationDate { get; set; }
}
