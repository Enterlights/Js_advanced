window.onload = function () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', './json/gallery.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        var items = JSON.parse(xhr.responseText);

        var arrayImages = [];
        for (var i = 0; i < items.length; i++) {
            arrayImages.push(items[i].imgMin, items[i].imgMax);
        }

        var images = new Gallery('gallery', [
            new Images(arrayImages[0], arrayImages[1]),
            new Images(arrayImages[2], arrayImages[3]),
            new Images(arrayImages[4], arrayImages[5]),
            new Images(arrayImages[6], arrayImages[7]),
            new Images(arrayImages[8], arrayImages[9])
        ]);

        document.querySelector('#wrapper').innerHTML = images.render();
    };

    xhr.send();
};