using Application.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Xml;

namespace UserManagement
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // DbSets go here
        public DbSet<User> Users { get; set; }
    }
}
