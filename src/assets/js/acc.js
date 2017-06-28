

var title = document.getElementsByClassName('bat_click');
var cont = document.getElementsByClassName('bat_content');

for (var i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function() {
        if (!(this.classList.contains('active'))) {
            for(var i = 0; i < title.length; i++) {
                title[i].classList.remove('active');
            }
            this.classList.add('active');
        }
    });
}
