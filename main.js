new Vue({   //the heart of vue
    el: '#app', //vue is used on id known as "app" on our html
    data() {
        return {
            info: null, //this will contain our API data ("info")
        }
    },
    mounted() { //this program uses AJAX is .GET the JSON and convert each object into javascript arrays
        axios
            .get('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')   //get from the API website
            .then(response => (this.info = response.data))  //parse the response into "info" in our vue
            .catch(error => console.log(error)) //if theres an error, log it onto the console
    }
})