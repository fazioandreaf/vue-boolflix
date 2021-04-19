function init(){
    new Vue({
        el:'#app',
        data:{
            query:'',
            allResults:''
        },
        mounted(){
            this.callAPI(this.query)
        },
        'methods':{
            callAPI:function(elem){
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        'api_key': '2087fd848b765980c5bf5832959724ef',
                        'query':  elem,
                    }
                })
             .then(data => {
                 this.allResults=data.data;
                 console.log(this.allResults)
                })
             .catch(()=>
             console.log('error'))

            },
            addQuery:function(){
                this.callAPI(this.query)
                console.log(this.query);
            }
        }
    })
}
document.addEventListener('DOMContentLoaded',init);