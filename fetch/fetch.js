// function fetchcallback() {
//     let res = ""
//     fetch("https://fakestoreapi.com/products").then((res) => {
//         return res.json()
//     }).then((jsData) => {
//         jsData.forEach(element => {
//             res = res + `<div class="product-card">
//                         <div class="imageclass"><img src="${element.image}" alt="${element.title}"></div>
//                         <div class="details">
//                            <div class="basicinfo">
//                                 <div class="title"> ${element.title}</div>
//                                 <div class="rating"> ⭐ ${element.rating.rate}</div>
//                                 <div class="price"> $${element.price} </div>
//                                 <button class="buy-btn"> Buy Now</button>
//                             </div>
//                         </div>
//                     </div>`
//             console.log(element.category);
//         });
//         document.getElementById("output").innerHTML = res;
//     })
// }

