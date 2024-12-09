//creating Promises
function fetchData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let success =false;
            if (success){
                resolve("Data fetched succesfully")
            }else{
                reject("Error fetch")
            }
        },3000);

    });
}

// Consuming Promises
fetchData()
   .then((data) => {
    console.log(data);
    return data.toUpperCase();
})
   .then((value) => {
    console.log(value);
   })
   .catch((error) => console.error(error))
   