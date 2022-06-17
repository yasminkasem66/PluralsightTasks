// function getCustomers(id, callback) {
//     setTimeout(function () {
//         callback({email: "Yasmin@gmail.com", name:"Yasmin Kassem", id:1})
//     }, 200)
// }

// function getOrders(email, callback) {
//     setTimeout(function () {
//         callback([{ order: "mobile", customerId: 1, creationDate: "2022-02-02" }])
//     })
// }


// getCustomers(1, (users) => {
//     console.log(users);
//     getOrders(user.email, (orders) => {
//         console.log(orders);

//             })
//         }
// )


// promise

function getCustomers(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ email: "Yasmin@gmail.com", name: "Yasmin Kassem", id: 1 })

        }, 200)

    })
}

function getOrders(email) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve([{ email: "Yasmin@gmail.com", order: "mobile", customerId: 1, creationDate: "2022-02-02" }])
        }, 200)
    })
}


getCustomers(1).then((users) => {
    console.log(users);
    getOrders(users)
}).then(ordered => {
    console.log(ordered)
}).catch((err) => {
    console.log(err)
})


async function get() {
    const user = await getCustomers(1);
    const orders = await getOrders(user.email);
    console.log(user);
    console.log(orders);
}

get()