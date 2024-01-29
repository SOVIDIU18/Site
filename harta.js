function recentreazaHarta() {
    // Coordonatele pentru recentrare
    var lat = 45.73926696519606;
    var lon = 21.219534873962402;

    // Generarea URL-ului cu noile coordonate
    var newSrc = "https://www.openstreetmap.org/export/embed.html?bbox=" +
        (lon - 0.002) + "%2C" + (lat - 0.001) + "%2C" +
        (lon + 0.002) + "%2C" + (lat + 0.001) +
        "&layer=mapnik&marker=" + lat + "%2C" + lon;

    // Actualizarea sursei iframe-ului
    document.getElementById("hartaFrame").src = newSrc;
}