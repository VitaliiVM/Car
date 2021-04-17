class Header {

    constructor(head, tittle, image) {
        this.head = head;
        this.tittle = tittle;
        this.src1 = image;
        this.numbers = ["+1 (212) 459-5392", "+1 (212) 777-5392", "+1 (212) 333-5392", "+1 (212) 682-5392"];
    }


    render(p, q, z, m) {
        document.querySelector('.head').innerHTML += `<span>${this.head}</span>`;
        document.querySelector('.tittle').innerHTML += this.tittle;
        document.querySelector('.pic').innerHTML += `<img src=${this.src1} style="width: 150px" height="100px" alt="" alt="no">`;
        let li = document.querySelectorAll(".numbers > li");
        for (let i = 0, len = li.length; i < len; i++) {
            li[i].innerHTML = this.numbers[i].toString();
        }
    }
}
let image = "https://fullhdoboi.ru/wp-content/uploads/_ph/31/913151038.jpg";
let header = new Header("Cars","Best cars from USA",image);

header.render("head","tittle","pic","numbers");
console.log(header);

