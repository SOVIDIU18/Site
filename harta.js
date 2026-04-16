function recentreazaHarta() {
    // Coordonatele pentru recentrare
    var lat = 45.73934478271652;
    var lon = 21.218788999507243;

    // Generarea URL-ului cu noile coordonate
    var newSrc = "https://www.openstreetmap.org/export/embed.html?bbox=" +
        (lon - 0.002) + "%2C" + (lat - 0.001) + "%2C" +
        (lon + 0.002) + "%2C" + (lat + 0.001) +
        "&layer=mapnik&marker=" + lat + "%2C" + lon;

    // Actualizarea sursei iframe-ului
    document.getElementById("hartaFrame").src = newSrc;
}