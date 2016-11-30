using System.Web.Mvc;

namespace WebApplication7_landing.Controllers
{
    public class PagesController : Controller
    {
        public ActionResult Index(string param1)
        {
            string ViewFileName = "~/Views/Pages/" + param1;

            if (Request.IsAjaxRequest())
            {
                return PartialView(ViewFileName);
            }
            else
            {
                return View(ViewFileName);
            }
        }
    }
}
