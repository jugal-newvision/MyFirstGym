import Axios from 'axios';

const instance = Axios.create({
    baseURL:'https://myfirstgym-ebf8b.firebaseio.com/'
});

const firebase = () =>{
alert("Hello");
Axios.get("https://myfirstgym-ebf8b.firebaseio.com/Users.json")
        .then(response =>{
            alert(response.data);
        })
        .catch(error => {
            alert(error);
        })

    }

export default firebase;