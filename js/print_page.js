setTimeout(function() {
    document.body.innerHTML = localStorage.getItem('print');
    var header = document.createElement('h4');
    header.innerHTML = 'Generated by Easier CC Banner. Download at <span style="color:grey;">easierbanner.cc</span>';
    document.body.prepend(header);
    setTimeout(window.print, 3000);
}, 500);
