$(document).ready(function(){
    var navbar = $("#cs_navigation ul").first();
    var newDropdown = $("<li></li>").html("<a href=# class = 'dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'> Teacher Pages <span class='caret'></span></a>") ;
    newDropdown.addClass("dropdown");
    var dropdownMenu = $("<ul class='dropdown-menu' role='menu'></ul>");
    newDropdown.append(dropdownMenu);
    dropdownMenu.append("<li><a href='http://cs2.uco.edu/~gqian'>Dr. Gang Qian</a></li>");
    dropdownMenu.append("<li><a href='http://cs3.uco.edu'>Dr. Hong Sung</a></li>");
    dropdownMenu.append("<li><a href='http://cs2.uco.edu/~fu'>Dr. Jicheng Fu</a></li>");
    dropdownMenu.append("<li><a href='http://cs2.uco.edu/~holt'>Ms. Dawn Holt</a></li>");
    dropdownMenu.append("<li><a href='http://cs2.uco.edu/~mcdaniel'>Dr. Bill McDaniel</a></li>");
    dropdownMenu.append("<li><a href='http://cs2.uco.edu/~gp'>Dr. Myung-Ah (Grace) Park</a></li>");
    dropdownMenu.append("<li><a href='http://cs2.uco.edu/~stockwel'>Dr. Bill Stockwell</a></li>");
    dropdownMenu.append("<li><a href='http://cs2.uco.edu/~trt'>Dr. Thomas Turner</a></li>");
    navbar.append(newDropdown);
});
