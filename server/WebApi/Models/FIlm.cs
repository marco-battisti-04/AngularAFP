using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Film
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public DateTime ReleaseDate { get; set; }

        [Required]
        public string Director { get; set; }

        // for one or multiple genres
        [Required]
        public ICollection<string> Genres { get; set; }

    }
}