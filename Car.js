
class Car {
    constructor(brand, name, weight, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.color = color;
        this.src = img;
    }

    render(x,y,a,b,c,d) {

        document.querySelector('.carshow').innerHTML += `<img src=${this.src} style="width: 150px" height="100px">`;
        document.querySelector('.package-name').innerHTML += `<span>${this.brand}</span>`;
        document.querySelector('.showcar3').innerHTML += this.name;
        document.querySelector('.showcar4').innerHTML += `<span>${this.weight}</span>`;
        document.querySelector('.showcar5').innerHTML += `<span>${this.fuel_type}</span>`;
        document.querySelector('.showcar6').innerHTML += `<span>${this.color}</span>`;

    }
    render2(x,y,a,b,c,d) {
        document.querySelector('.mustang').innerHTML += `<img src="${this.src}"  class="go" style="width: 150px" height="100px">`;
        document.querySelector('.package-name.mustang9').innerHTML += `<span>${this.brand}</span>`;
        document.querySelector('.mustang2').innerHTML += this.name;
        document.querySelector('.mustang3').innerHTML += `<span>${this.weight}</span>`;
        document.querySelector('.mustang4').innerHTML += `<span>${this.fuel_type}</span>`;
        document.querySelector('.mustang5').innerHTML += `<span>${this.color}</span>`;
    }
    render3(x,y,a,b,c,d) {
        document.querySelector('.edge').innerHTML += `<img src="${this.src}"  class="go" style="width: 150px" height="100px">`;
        document.querySelector('.package-name.edge9').innerHTML += `<span>${this.brand}</span>`;
        document.querySelector('.edge2').innerHTML += this.name;
        document.querySelector('.edge3').innerHTML += `<span>${this.weight}</span>`;
        document.querySelector('.edge4').innerHTML += `<span>${this.fuel_type}</span>`;
        document.querySelector('.edge5').innerHTML += `<span>${this.color}</span>`;
    }

}

let img = 'https://static.nhtsa.gov/images/vehicles/11207_st0640_046.png';
let img2 = "https://cdn.euroncap.com/media/29347/ford_mustang-359-235.jpg?mode=crop&width=359&height=235";
let img3 = "https://cars.usnews.com/static/images/Auto/izmo/i111746020/2019_ford_edge_angularfront.jpg";


let car = new Car('Ford','Escape','1500kg','Behzin','Dark-blue',img);
car.render("carshow","package-name","showcar3", "showcar4","showcar5","showcar6");
console.log(car);

let mustang = new Car("Ford","Mustang","1700kg","Benzin","Dark-gray",img2);
mustang.render2("mustang","mustang1","mustang2","mustang3","mustang4","mustang5");
console.log(mustang);

let edge = new Car("Ford","Edge","2000kg","Benzine","Dark-red",img3);
edge.render3("edge","edge2","edge3","edge4","edge5","package-name.edge9");
console.log(edge);