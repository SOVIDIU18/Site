document.getElementById("myimage").addEventListener("mouseover", function (e) {
    var lens = document.createElement("div");
    lens.setAttribute("class", "img-lens");
    this.parentElement.insertBefore(lens, this);

    var img = this;
    var ratio = 3;

    lens.style.backgroundImage = "url('" + img.src + "')";
    lens.style.backgroundSize = (img.width * ratio) + "px " + (img.height * ratio) + "px";

    var coords = getCursorPosition(e);
    updateLens(coords);

    this.addEventListener("mousemove", moveLens);
    this.addEventListener("mouseout", removeLens);

    function moveLens(e) {
        coords = getCursorPosition(e);
        updateLens(coords);
    }

    function removeLens() {
        lens.remove();
        img.removeEventListener("mousemove", moveLens);
        img.removeEventListener("mouseout", removeLens);
    }

    function updateLens(coords) {
        var x = coords.x - lens.offsetWidth / 2;
        var y = coords.y - lens.offsetHeight / 2;

        if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }

        lens.style.left = x + "px";
        lens.style.top = y + "px";

        var bgPosX = -x * ratio;
        var bgPosY = -y * ratio;

        lens.style.backgroundPosition = bgPosX + "px " + bgPosY + "px";
    }

    function getCursorPosition(e) {
        var rect = img.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        return { x: x, y: y };
    }
});
