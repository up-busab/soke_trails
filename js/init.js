
navbar = "\
<nav class='navbar navbar-expand-md navbar-light bg-light'>\
	<div class='container-fluid'>\
	  <a href='index.html' class='navbar-brand'>SöKē Trails</a>\
      <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExample01' aria-controls='navbarsExample01' aria-expanded='false' aria-label='Toggle navigation'>\
        <span class='navbar-toggler-icon'></span>\
      </button>\
      <div class='collapse navbar-collapse justify-content-end' id='navbarsExample01'>\
        <ul class='navbar-nav'>\
          <li class='nav-item active'><a class='nav-link' href='index.html'>Home<span class='sr-only'>(current)</span></a></li>\
          <li class='nav-item'><a class='nav-link' href='about.html'>About</a></li>\
          <li class='nav-item'><a class='nav-link disabled' href='#'>Disabled</a></li>\
		  <li class='nav-item dropdown'>\
            <a class='nav-link dropdown-toggle' href='http://example.com/' id='dropdown01' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Events</a>\
            <div class='dropdown-menu' aria-labelledby='dropdown01'>\
              <a class='dropdown-item' href='ride_the_keweenaw.html'>Ride the Keweenaw</a>\
              <a class='dropdown-item' href='miners_revenge.html'>Miner's Revenge</a>\
            </div>\
          </li>\
        </ul>\
      </div>\
	</div>\
</nav>\
";

$("#navbar").html(navbar)
