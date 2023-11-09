// const api = fetch('https://dummyjson.com/products').then((data) => data.json()).then((json) => json)
// // api
// console.log(api)


// let data;

const fetchdata = async () => {
    const api_data = await fetch('https://dummyjson.com/products')
    const json_data = await api_data.json()

    const products = json_data.products

    for (let product of products) {
        // console.log(product)
        document.getElementById('target').innerHTML += `<div class="col-md-3 my-3">
                                                            <div class="card">
                                                                <img src=${`${product.thumbnail}`} class="card-img-top" alt=".." >
                                                                <div class="card-body">
                                                                <h5 class="card-title">${product.brand} - ${product.title}</h5>
                                                                <p class="card-text">${product.description}</p>
                                                                <button onclick="addtoCart()" class="btn btn-primary">Add to Cart</button>
                                                                </div>
                                                            </div>
                                                        </div>`
    }

    // console.log()

    // const layout = document.getElementById('target').innerHTML
    // console.log(layout)



    // document.getElementById('target').innerHTML += `<div class="col-md-3 my-3">
    //                 <div class="card">
    //                     <div class="card-body">
    //                         <h5 class="card-title">Card title</h5>
    //                         <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    //                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of
    //                             the card's content.</p>
    //                         <a href="#" class="card-link">Card link</a>
    //                         <a href="#" class="card-link">Another link</a>
    //                     </div>
    //                 </div>
    //             </div>`
}


fetchdata();
// data = fetchdata();
// console.log(data)

const addtoCart = (prd)=>{
    console.log(prd)
}