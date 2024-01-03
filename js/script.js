window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = (scrollPosition / totalHeight) * 100;

    var body = document.body;

    if (scrollPercent < 20) {
        body.className = 'bg-color-white';
    } else if (scrollPercent < 45) {
        body.className = 'bg-color-gray';
    } else if (scrollPercent < 75) {
        body.className = 'bg-color-light-black';
    } else {
        body.className = 'bg-color-black';
    }
});
// Smooth scrolling using the anchor link

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}

window.onscroll = function () {
    var posicion = window || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}
function check()
{
    var checkbox = document.getElementById("checkbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
    for (var i = 0; i < text1.length; i++)
    {
        if (checkbox.checked == true)
        {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        }
        else if (checkbox.checked == false)
        {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        }
    }

    }
    document.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        const scrollThreshold1 = 200;
        const scrollThreshold2 = 400;
    
        document.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition < scrollThreshold1) {
                body.style.backgroundColor = '#FFFFFF';
            } else if (scrollPosition < scrollThreshold2) {
                body.style.backgroundColor = '#CCCCCC';
            } else {
                body.style.backgroundColor = '#000000';
            }
        });
    });
    
