using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebApplication7_landing.Startup))]
namespace WebApplication7_landing
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
