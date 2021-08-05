var fetch = require('node-fetch');

var checkAuth = async(name,email)=>{

    var resp = await fetch('https://jsonplaceholder.typicode.com/users')
    if(resp.ok){
        var data = await resp.json()
        return new Promise((resolve,reject)=>{
            data.forEach(element => {
                if(element.username == name && element.email == email){
                    resolve(true);
                }
                else{
                    resolve(false);
                }
            });

        })
       
    }
}

module.exports = {checkAuth}
