using Bank.models;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace Bank.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options)
    : base(options)
    {

    }

    public DbSet<User> Users { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Seed users
        modelBuilder.Entity<User>().HasData(
            new User { Id = 1 , UserImage = "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg", Name = "John", LastName = "Doe", CardNumber = "1111222233334444", CardPin = "1234", CardCvv = "123", CardExpirationDate = DateTime.Now.AddYears(1) },
            new User { Id = 2, UserImage= "https://randomuser.me/api/portraits/women/65.jpg", Name = "Jane", LastName = "Doe", CardNumber = "5555666677778888", CardPin = "5678", CardCvv = "456", CardExpirationDate = DateTime.Now.AddYears(1) }
        );
    }
}
