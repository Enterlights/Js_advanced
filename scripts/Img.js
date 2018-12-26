class Images extends Gallery {
    constructor(imgMin, imgMax) {
        super();
        this.imgMin = imgMin;
        this.imgMax = imgMax;
    }

    createImage() {
        return `<a href="${this.imgMax}" target="_blank"><img src="${this.imgMin}"></a>`;
    }
}