// *** using call back function
// function getCustomers(id, callback) {
//     setTimeout(function () {
//         let url = "users.json";
//         callback(url)
//     }, 200)
// }

// function getOrders(email, callback) {
//     setTimeout(function () {
//         let url = "order.json";
//         callback(url)
//     })
// }

// common methods 
async function FetchData(url) {
    return dataFetched = await fetch(url).then((dataFetched) => {
        if (dataFetched.ok) {
            return dataFetched.json();
        } else {
            throw new Error("Something went wrong");
        }
    });
}


function Showdata(e) {
    var userId = e ? e.target.id : 1;
    console.log(userId);
    FetchData("order.json").then((orders) => {
        for (let order of orders) {
            if (userId == order.email) {
                document.getElementById("showdata").innerHTML = " ";
                document.getElementById("showdata").classList.add("decorate");
                document.getElementById("showdata").innerHTML += order.order + "<br>";

            }
        }
    });

}

// getCustomers(1, (users) => {
//     FetchData(users).then((users) => {
//         for (let user of users) {
//             var div = document.createElement("span");
//             div.classList.add("decorate");
//             div.id = user.email;
//             div.innerHTML = user.name;
//             document.getElementById("users").appendChild(div);
//             getOrders(user.email, (orders) => {
//                 FetchData(orders).then((orders) => {
//                     for (let order of orders) {
//                         if (user.email == order.email) {
//                             console.log(order.order);
//                         }
//                     }
//                 })
//             })
//         }
//     }).catch((e) => {
//         console.log(e);
//     });
// })


// *** using promise

function getCustomers() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                let url = "users.json";
                resolve(url)             
            }
            catch {
                reject( new Error("Couldn't get users"))  
            }
        }, 200)
        
    })
}

function getOrders(email) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                let url = "order.json";
                resolve(url)
            }
            catch {
                reject(new Error("Couldn't get orders"))
            }
        }, 200)

    })
}

getCustomers().then((users) =>{
    FetchData(users).then((users) => {
        for (let user of users) {
            var div = document.createElement("span");
            div.classList.add("decorate");
            div.id = user.email;
            div.innerHTML = user.name;
            document.getElementById("users").appendChild(div);
            getOrders(user.email)
        }
    });
}).catch((err) => {
  console.log(err)
})



// Write a simple app that simulates that you are fetching data from database.

// Imagine that you have customers and orders for every customer.

// What you have to do that you will specific customer e.g with id 1 this will return object
// like this : { email: "", name: "", id: }
// after you get the customer you will get this customer orders using customer email from the object above and return
// array orders like[{ order: "mobile", customerId: 1, creationDate: "2022-02-02" }]

// Note: you will not connect to database, you will return the data hard coded like above.

// This task needs to be done in 3 different ways:
// 1. Callback approach.
// 2. Promise.
// 3. Async / await

// After completion you submit the task to you github account and link of the task repo in the sheet below,
//     Good luck,