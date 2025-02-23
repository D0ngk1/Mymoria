

const AuthService = () => {
    //Todo change implements environment variable
    ///const apiURL = "http://localhost:8080/mymoria/";
    const apiURL = "http://10.0.2.2:8080/mymoria/";
    const login = async (username:string,password:string)=>{
        //alert(username +" "+password);
        try{
            const response = await fetch (apiURL+"auth/login",{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json', // Add headers
                },
                credentials: 'include',
                body:JSON.stringify({
                    'username':username,
                    'password':password,
                }),
            });

        if (!response.ok) {
            // Check if the server responded with an error (e.g., 401, 403)
            const errorText = await response.text(); // Read error response as text
            throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
        }

        // Ensure response has content before parsing JSON
        const text = await response.text();
        if (!text) throw new Error("Empty response from server");
        const result = JSON.parse(text);
        console.log(result);
        return result;
        }catch(error){
            console.log(error);  
        }
    }
    return {
        login
    }
}

export default AuthService;