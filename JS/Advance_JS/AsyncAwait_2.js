function fetchPostData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("Post data fetched")
        },3000);
    });
}

function fetchCommentData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Comment data fetched")
        },6000);
    });   
}

async function getBlogData (params) {
    try{
        console.log("Fetching Blog data...")
        // const postdata = await fetchPostData()
        // const commentdata =await fetchCommentData()
        
        const [postdata,commentdata] = await Promise.all([fetchPostData(),fetchCommentData()])
        console.log(postdata)
        console.log(commentdata)
    }
    catch(error){
        console.error("Neither get post not comment data")
    }
    
}

getBlogData()