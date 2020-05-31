using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers {
    [ApiController]
    [Route ("api/[action]")]
    public class LonginController : ControllerBase {
        [HttpGet]
        public string Get () {
            return $"parameter is nothing";
        }

        [HttpGet ("{id}")]
        public string Get (string id) {
            Console.Write (id);
            return $"parameter is {id}";
        }
    }
}