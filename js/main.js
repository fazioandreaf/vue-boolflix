function init(){
    new Vue({
        el:'#app',
        data:{
            queryDefault:'batman',
            queryReally:'',
            allResults:{},
            allResults2:{},
            activeCard:'',
        },
        mounted(){
            this.callAPI(this.queryDefault)
            this.callAPI2(this.queryDefault)
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
            log: function(){
                console.log('esco');
            }
        }
    })
}
document.addEventListener('DOMContentLoaded',init);