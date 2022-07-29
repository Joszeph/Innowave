fetch('./dataBase.json')
.then(res=>res.json())
.then(data => {
    let news = data
    // console.log(news)
    news.map(function(item){
        let newsCards = document.querySelector('.newsCards')

        let newsCard = document.createElement('div')
        newsCard.classList.add('newsCard')
        newsCards.append(newsCard)

        let dateTag = document.createElement('div')
        dateTag.classList.add('dateTag')
        newsCard.appendChild(dateTag)
       
        let dateIcon = document.createElement('i')
        dateIcon.classList.add('fa-solid', 'fa-calendar-days')
        dateTag.appendChild(dateIcon)
        
        let dateSpan = document.createElement('span')
        dateSpan.classList.add('dateSpan')
        dateTag.appendChild(dateSpan)
        dateSpan.innerHTML = `${item.date}`

        let newsImage = document.createElement('img')
        newsCard.appendChild(newsImage)
        newsImage.setAttribute('src', `${item.image}`)

        let h3 = document.createElement('h3')
        newsCard.appendChild(h3)
        h3.innerHTML=`${item.title}`

        let tags = document.createElement('p')
        tags.classList.add('newsTags')
        newsCard.appendChild(tags)
        tags.innerHTML = `<i class="fa-solid fa-tag"></i>${item.tags}`

        let newsContent = document.createElement('p')
        newsContent.classList.add('newsContent')
        newsCard.appendChild(newsContent)
        newsContent.innerHTML=`${item.content}`
    })
})
.catch(err => console.log(err))