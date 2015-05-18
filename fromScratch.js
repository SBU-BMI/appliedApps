console.log('loaded from scratch')

loadScript= function(url,fun){
    var s=document.createElement('script')
    s.src=url
    document.head.appendChild(s)
    if(fun){
        s.onload=function(){
            fun()
        }
    }
}

// ini

ini = function(){ // things run automatically in the beginning
    var url=document.location.search.slice(1)
    if(url.length>0){
        loadScript(url)
        console.log(url+' loaded')
    }
    console.log('nothing to load at ini')
}

ini()
