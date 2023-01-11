export const FetchList = async () => {
    
    try {
            
        const response = await fetch(`https://assets.breatheco.de/apis/fake/todos/user/lucia-tacchetti`); 
        const responseJSON = await response.json();

        if(response.status <=200 && response.status <=300) {
            return responseJSON;
        } else if(response.status >=400) {


            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify([]);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://assets.breatheco.de/apis/fake/todos/user/lucia-tacchetti", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            
            
        }
        
        
    } catch (error) {
        console.error("GET error: ", error);
    }
}