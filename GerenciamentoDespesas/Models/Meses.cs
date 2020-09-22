using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GerenciamentoDespesas.Models
{
    public class Meses
    {
        public int MesesId { get; set; }
        public string Nome { get; set; }
        public ICollection<Despesas> Despesas { get; set; }
        public Salarios Salarios { get; set; }
    }
}
