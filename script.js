fetch("https://type.fit/api/quotes")
    .then(data=>data.json())
    .then(quotedata=>{
        let rand = Math.random() * 400;
        rand = Math.floor(rand);
        const quotetext= quotedata[rand].text;
        const quoteauth= quotedata[rand].author;
        const quoteElement = document.getElementById('quoteElement');
        quoteElement.innerHTML = quotetext;
        quoteauthor.innerHTML = "- "+quoteauth;
    })