function init(){
    new Vue({
        el:'#app',
        data:{
            queryDefault:'batman',
            queryReally:'',
            allResults:{},
            allResults2:{},
            activeCard:'',
            random:(Math.floor(Math.random()*5)+1),
            errorMessage:'',
            genreTv:[],
            genreMovie:[],
            castId:'',
            allcast:'',
            prevFilm:'',
        },
        // mounted(){
        //     // this.callAPI(this.queryDefault)
        //     // this.callAPI2(this.queryDefault)
        // },
        created:function(){

            // axios.get('https://api.themoviedb.org/3/movie/popular', {
            //     params: {
            //         'api_key': '2087fd848b765980c5bf5832959724ef',
            //         'page':  this.random,
            //     }
            // })
            // .then(data => {
            //     this.allResults=data.data;
            // })
            // .catch(()=>
            // console.log('error'))

            // axios.get('https://api.themoviedb.org/3/tv/popular', {
            //     params: {
            //         'api_key': '2087fd848b765980c5bf5832959724ef',
            //         'page':  this.random,
            //     }
            // })
            // .then(data => {
            //     this.allResults2=data.data;
            // })
            // .catch(()=>
            // console.log('error'))
            axios.get('https://api.themoviedb.org/3/genre/tv/list', {
                params: {
                    'api_key': '2087fd848b765980c5bf5832959724ef',
                }
            })
            .then(data => {
                this.genreTv=data.data.genres;
            })
            .catch(()=>
            console.log('error'))
            axios.get('https://api.themoviedb.org/3/genre/movie/list', {
                params: {
                    'api_key': '2087fd848b765980c5bf5832959724ef',
                }
            })
            .then(data => {
                this.genreMovie=data.data.genres;
                
            })
            .catch(()=>
            console.log('error'))




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
                 if(this.allResults.results.length==0?this.errorMessage='Nessun film trovato':this.errorMessage='');
                })
             .catch(()=>
             console.log('error'))

            },
            callAPI2:function(elem){
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        'api_key': '2087fd848b765980c5bf5832959724ef',
                        'query':  elem,
                    }
                })
             .then(data => {
                 this.allResults2=data.data;
                })
                .catch(()=>
                console.log('error'))
                
            },
            addQuery:function(){
                this.callAPI(this.queryReally)
                this.callAPI2(this.queryReally)
            },
            descriptionHover:function(elem,index){
                if(this.activeCard===elem?this.activeCard='':this.activeCard=elem);
                
            },
            //debug
            foundGenre: function(prova){
                let allgenre='';
                
                for(i=0;i<prova.length;i++){
                    for(j=0;j<this.genreMovie.length;j++){
                        if(prova[i]==this.genreMovie[j].id) {
                            allgenre +=this.genreMovie[j].name+' ';
                        } else ;
                    }
                }
                return allgenre
            },
            cast:function(elem){
                let idFilm=elem.id;
                if(idFilm!=this.prevFilm){
                    this.allcast='';
                    this.prevFilm=idFilm
                
                axios.get('https://api.themoviedb.org/3/movie/'+idFilm+'/credits', {
                params: {
                    'api_key': '2087fd848b765980c5bf5832959724ef',
                }
            })
            .then(data => {
                this.castID=data.data.cast;
                    for(i=0;i<5;i++){
                            this.allcast +=this.castID[i].name+', ';
                    }
                    console.log(this.allcast);
            })
            .catch(()=>
            console.log('error'))

            }
            else console.log('ciao');
            return this.allcast
                
            }
        }
    })
}
document.addEventListener('DOMContentLoaded',init);