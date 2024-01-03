window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = (scrollPosition / totalHeight) * 100;

    var body = document.body;

    if (scrollPercent < 25) {
        body.className = 'bg-color-white';
    } else if (scrollPercent < 50) {
        body.className = 'bg-color-gray';
    } else if (scrollPercent < 86) {
        body.className = 'bg-color-light-black';
    } else {
        body.className = 'bg-color-black';
    }
});