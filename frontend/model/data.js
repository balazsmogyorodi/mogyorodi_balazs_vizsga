class Data{


    getData(vegPont, callback){
        axios
            .get(vegPont)
            .then(function (response){
                console.log(response.data);
                callback(response.data);
            })
            .catch(function (error){
                console.log(error);
            })
            .finally(function(){
            });
    }


}
export default Data;