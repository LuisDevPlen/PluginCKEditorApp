using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PuglinCKEditorApp.Controllers
{

        public class HomeController : Controller
        {
            //
            // GET: /Home/

            public ActionResult Index()
            {
                return View();
            }
        }
    }
