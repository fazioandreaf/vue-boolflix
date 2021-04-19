function init(){
    new Vue({
        el:'#app',
        data:{
            query:'batman',
            allResults:''
        },
        mounted(){
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    'api_key': '2087fd848b765980c5bf5832959724ef',
                    'query':  this.query,
                }
            })
         .then(data => {
             this.allResults=data.data;
             console.log(this.allResults)
            })
         .catch(()=>
         console.log('error'));
        },
    })
}
document.addEventListener('DOMContentLoaded',init);