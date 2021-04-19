function init(){
    new Vue({
        el:'#app',
        data:{
            query:'batman',
            prova:''
        },
        mounted(){
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    'api_key': '2087fd848b765980c5bf5832959724ef',
                    'query':  this.query,
                }
            })
         .then(data => {
             this.prova=data.data.results[0].original_title;
             console.log(this.prova)
            })
         .catch(()=>
         console.log('error'));
        },
    })
}
document.addEventListener('DOMContentLoader',init())