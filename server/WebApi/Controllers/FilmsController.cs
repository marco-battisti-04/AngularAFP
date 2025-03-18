using Microsoft.AspeNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmsController: ControllerBase
    {
        private readonly AppDbContext _context;

        public FilmsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Films
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Film>>> GetFilms()
        {
            return await _context.Films.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionReult<Film>> GetFilm(int id)
        {
            var film = await _context.Films.FindAsync(id);

            if (film == null)
            {
                return NotFound();
            }
            return film;
        }

        [HttpPost]
        public async Task<ActionResult<Film>> PostFilm(Film film)
        {
            _context.Films.Add(film);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFilm), new { id = film.Id }, film);
        }
    }

}