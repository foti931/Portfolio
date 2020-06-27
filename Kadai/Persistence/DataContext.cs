﻿using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> ApUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
               .HasData(
                   new Value { Id = 1, Name = "Value 105" },
                   new Value { Id = 2, Name = "Value 106" },
                   new Value { Id = 3, Name = "Value 107" }
               );
        }
    }
}