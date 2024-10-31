using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace NerDavidWebApp.Models;

public partial class NerDavidDbContext : DbContext
{
    public NerDavidDbContext()
    {
    }

    public NerDavidDbContext(DbContextOptions<NerDavidDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BachurimTbl> BachurimTbls { get; set; }

    public virtual DbSet<CityTbl> CityTbls { get; set; }

    public virtual DbSet<ShiurTbl> ShiurTbls { get; set; }

    public virtual DbSet<YeshivaTbl> YeshivaTbls { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost;Database=NerDavidDB;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BachurimTbl>(entity =>
        {
            entity.HasKey(e => e.BachurId).HasName("Bach_ID_pk");

            entity.ToTable("BachurimTbl");

            entity.Property(e => e.BachurId).HasColumnName("BachurID");
            entity.Property(e => e.Adress).IsUnicode(false);
            entity.Property(e => e.CityId).HasColumnName("CityID");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Phone1)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Phone2)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Phone3)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ShiurId).HasColumnName("ShiurID");
            entity.Property(e => e.YeshivaId).HasColumnName("YeshivaID");

            entity.HasOne(d => d.City).WithMany(p => p.BachurimTbls)
                .HasForeignKey(d => d.CityId)
                .HasConstraintName("Adress_City_fk");

            entity.HasOne(d => d.Shiur).WithMany(p => p.BachurimTbls)
                .HasForeignKey(d => d.ShiurId)
                .HasConstraintName("Bach_Shiur_fk");

            entity.HasOne(d => d.Yeshiva).WithMany(p => p.BachurimTbls)
                .HasForeignKey(d => d.YeshivaId)
                .HasConstraintName("Bach_Yeshiva_fk");
        });

        modelBuilder.Entity<CityTbl>(entity =>
        {
            entity.HasKey(e => e.CityId).HasName("City_ID_pk");

            entity.ToTable("City_tbl");

            entity.Property(e => e.CityId).HasColumnName("CityID");
            entity.Property(e => e.CityName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ShiurTbl>(entity =>
        {
            entity.HasKey(e => e.ShiurId).HasName("Shiur_ID_pk");

            entity.ToTable("Shiur_tbl");

            entity.Property(e => e.ShiurId).HasColumnName("ShiurID");
            entity.Property(e => e.ShiurName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<YeshivaTbl>(entity =>
        {
            entity.HasKey(e => e.YeshivaId).HasName("Yeshiva_ID_pk");

            entity.ToTable("Yeshiva_tbl");

            entity.Property(e => e.YeshivaId).HasColumnName("YeshivaID");
            entity.Property(e => e.YeshivaName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
