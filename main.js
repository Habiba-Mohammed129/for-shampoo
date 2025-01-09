var team =[
    {
        img:'../img/download.jfif',
        name:'habeba',
        jop:'bbbbbbb'
    }, {
        img:'../img/download.jfif',
        name:'habeba',
        jop:'bbbbbbb'
    }, {
        img:'../img/download.jfif',
        name:'habeba',
        jop:'bbbbbbb'
    }, {
        img:'../img/download.jfif',
        name:'habeba',
        jop:'bbbbbbb'
    }
]
teams.forEach(function(item){
    for(let i=0; i<= ; i++){
        var card = document.createElement('div')
        card.className = 'card'
        var img = document.createElement('img')
        img.src =item.img
        var name =document.createElement('h4')
        name.textContent = item.name
        var jop = document.createElement('p')
        jop.textContent = item.jop
    }
})