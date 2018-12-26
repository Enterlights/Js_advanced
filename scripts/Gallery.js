class Gallery {
    constructor(id, images) {
        this.id = id;
        this.images = images;
    }

    render() {
        var result = `<div id = "${this.id}">`;

        for (var i = 0; i < this.images.length; i++) {
            if (this.images[i] instanceof Images) {
                result += this.images[i].createImage();
            }
        }

        result += '</div>';
        return result;
    }
}