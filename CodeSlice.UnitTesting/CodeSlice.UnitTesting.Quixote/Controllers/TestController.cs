using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeSlice.UnitTesting.Quixote.Controllers
{
    public class TestController : Controller
    {
        public ActionResult Tag()
        {
            return View();
        }

        public ActionResult Question()
        {
            return View();
        }

        public ActionResult Vote()
        {
            return View();
        }

    }
}
