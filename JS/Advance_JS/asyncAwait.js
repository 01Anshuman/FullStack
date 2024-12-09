//Promise creation
function ferchUserData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve({name: "chaicode", url:"https://chaicode.com"})
        },3000);
    })
}


//calling the promise
async function getUserData() {
    try{
        console.log('Fetching use data....');
        const userData = await ferchUserData()
        console.log("User data fetched succesfully")
        console.log("User data: ",userData)
        
    } catch(error){
        console.log("Error fetching data",error)

    }  
}

getUserData()