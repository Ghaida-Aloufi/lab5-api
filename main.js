let url = "https://fakestoreapi.com/products";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let div = document.createElement("div");
    div.classList = "div"

    div.innerHTML = '';

    data.forEach((e) => {
      let r = document.createElement("div")
      let c = r.classList = "div2"

      let img = document.createElement("img");
      img.classList = "img"
      img.src = e.image;


      let pTitle = document.createElement("p");
      pTitle.textContent = e.title ;


      let pPrice = document.createElement("p");
      pPrice.textContent = e.price;

      r.appendChild(img);
      r.appendChild(pTitle);
      r.appendChild(pPrice);
      div.appendChild(r);

      document.body.appendChild(div);
    });

  })