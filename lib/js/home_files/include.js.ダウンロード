function include(dir,parts){
$.ajax({
url: dir,
cache: false,
async: true,
dataType: 'html',
success: function(html){
html = html.replace(dir);
document.getElementById(parts).innerHTML = html;
}
});
}