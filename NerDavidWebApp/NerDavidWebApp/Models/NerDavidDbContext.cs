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

    public virtual DbSet<DisplayDataTbl> DisplayDataTbls { get; set; }

    public virtual DbSet<LimudTbl> LimudTbls { get; set; }

    public virtual DbSet<MasechetTbl> MasechetTbls { get; set; }

    public virtual DbSet<PhonesTbl> PhonesTbls { get; set; }

    public virtual DbSet<QuestionsTbl> QuestionsTbls { get; set; }

    public virtual DbSet<ShiurTbl> ShiurTbls { get; set; }

    public virtual DbSet<StatusTbl> StatusTbls { get; set; }

    public virtual DbSet<TestsTbl> TestsTbls { get; set; }

    public virtual DbSet<YearsTbl> YearsTbls { get; set; }

    public virtual DbSet<YeshivaTbl> YeshivaTbls { get; set; }

    public virtual DbSet<ZmanTbl> ZmanTbls { get; set; }

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
            entity.Property(e => e.ShiurId).HasColumnName("ShiurID");
            entity.Property(e => e.StatusId).HasColumnName("StatusID");
            entity.Property(e => e.YeshivaId).HasColumnName("YeshivaID");

            entity.HasOne(d => d.City).WithMany(p => p.BachurimTbls)
                .HasForeignKey(d => d.CityId)
                .HasConstraintName("Adress_City_fk");

            entity.HasOne(d => d.Shiur).WithMany(p => p.BachurimTbls)
                .HasForeignKey(d => d.ShiurId)
                .HasConstraintName("Bach_Shiur_fk");

            entity.HasOne(d => d.Status).WithMany(p => p.BachurimTbls)
                .HasForeignKey(d => d.StatusId)
                .HasConstraintName("bach_ID_fk");

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

        modelBuilder.Entity<DisplayDataTbl>(entity =>
        {
            entity.HasKey(e => e.DisplayDataId).HasName("Disp_ID_pk");

            entity.ToTable("DisplayDataTbl");

            entity.Property(e => e.DisplayDataId).HasColumnName("DisplayDataID");
            entity.Property(e => e.Columns)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Component)
                .HasMaxLength(50)
                .IsFixedLength();
            entity.Property(e => e.Title)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<LimudTbl>(entity =>
        {
            entity.HasKey(e => e.LimudId).HasName("Limud_ID_pk");

            entity.ToTable("LimudTbl");

            entity.Property(e => e.EndValue)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Perek)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.StartValue)
                .HasMaxLength(20)
                .IsUnicode(false);

            entity.HasOne(d => d.Bachur).WithMany(p => p.LimudTbls)
                .HasForeignKey(d => d.BachurId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Limud_Bach_fk");

            entity.HasOne(d => d.Masechet).WithMany(p => p.LimudTbls)
                .HasForeignKey(d => d.MasechetId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Limud_Mas_fk");

            entity.HasOne(d => d.Year).WithMany(p => p.LimudTbls)
                .HasForeignKey(d => d.YearId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Limud_Year_fk");

            entity.HasOne(d => d.Zman).WithMany(p => p.LimudTbls)
                .HasForeignKey(d => d.ZmanId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Limud_Zman_fk");
        });

        modelBuilder.Entity<MasechetTbl>(entity =>
        {
            entity.HasKey(e => e.MasechetId).HasName("Madechet_ID_pk");

            entity.ToTable("MasechetTbl");

            entity.Property(e => e.MasechetName).HasMaxLength(50);
            entity.Property(e => e.PrakimNum)
                .HasMaxLength(10)
                .IsFixedLength();
        });

        modelBuilder.Entity<PhonesTbl>(entity =>
        {
            entity.HasKey(e => e.PhoneId).HasName("ph_ID_pk");

            entity.ToTable("PhonesTbl");

            entity.Property(e => e.PhoneId).HasColumnName("PhoneID");
            entity.Property(e => e.BachurId).HasColumnName("BachurID");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .IsUnicode(false);

            entity.HasOne(d => d.Bachur).WithMany(p => p.PhonesTbls)
                .HasForeignKey(d => d.BachurId)
                .HasConstraintName("phbachur_ID_fk");
        });

        modelBuilder.Entity<QuestionsTbl>(entity =>
        {
            entity.HasKey(e => e.QuestionId).HasName("Ques_ID_pk");

            entity.ToTable("QuestionsTbl");

            entity.Property(e => e.Answer1).IsUnicode(false);
            entity.Property(e => e.Answer2).IsUnicode(false);
            entity.Property(e => e.Answer3).IsUnicode(false);
            entity.Property(e => e.Daf)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Perek)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Question).IsUnicode(false);

            entity.HasOne(d => d.Masechet).WithMany(p => p.QuestionsTbls)
                .HasForeignKey(d => d.MasechetId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Ques_Mas_fk");
        });

        modelBuilder.Entity<ShiurTbl>(entity =>
        {
            entity.HasKey(e => e.ShiurId).HasName("Shiur_ID_pk");

            entity.ToTable("Shiur_tbl");

            entity.Property(e => e.ShiurId).HasColumnName("ShiurID");
            entity.Property(e => e.ShiurName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ShiurType)
                .HasMaxLength(10)
                .IsFixedLength();
        });

        modelBuilder.Entity<StatusTbl>(entity =>
        {
            entity.HasKey(e => e.StatusId).HasName("Stat_ID_pk");

            entity.ToTable("StatusTbl");

            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StatusSymbol)
                .HasMaxLength(50)
                .IsFixedLength();
        });

        modelBuilder.Entity<TestsTbl>(entity =>
        {
            entity.HasKey(e => e.TestId).HasName("Test_ID_pk");

            entity.ToTable("TestsTbl");

            entity.Property(e => e.CommentTest).IsUnicode(false);
            entity.Property(e => e.TestFile).IsUnicode(false);

            entity.HasOne(d => d.Bachur).WithMany(p => p.TestsTbls)
                .HasForeignKey(d => d.BachurId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Test_Bach_fk");

            entity.HasOne(d => d.Year).WithMany(p => p.TestsTbls)
                .HasForeignKey(d => d.YearId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Test_Year_fk");
        });

        modelBuilder.Entity<YearsTbl>(entity =>
        {
            entity.HasKey(e => e.YearId).HasName("Year_ID_pk");

            entity.ToTable("YearsTbl");

            entity.Property(e => e.YearName)
                .HasMaxLength(20)
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
            entity.Property(e => e.YeshivaType)
                .HasMaxLength(10)
                .IsFixedLength();
        });

        modelBuilder.Entity<ZmanTbl>(entity =>
        {
            entity.HasKey(e => e.ZmanId).HasName("Zman_ID_pk");

            entity.ToTable("ZmanTbl");

            entity.Property(e => e.ZmanName)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
