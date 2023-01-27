﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HelpMeApp.DatabaseAccess.Entities.PhotoEntity
{
    public class PhotoConfiguration : IEntityTypeConfiguration<Photo>
    {
        public void Configure(EntityTypeBuilder<Photo> builder)
        {
            builder
                .HasKey(x => x.Id);

            builder
                .Property(x => x.AdvertId)
                .IsRequired();

            builder
                .Property(x => x.Data);
        }
    }
}
