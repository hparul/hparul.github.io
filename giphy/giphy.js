     


 


let APIKEY = "pwRmApKO3fm0vBGU1ija6aqfC6Wi5qhd";  //  need to get your API KEY
     
      // https://developers.giphy.com/dashboard/
      document.addEventListener("DOMContentLoaded", init);
      function init() {
        document.getElementById("btnSearch").addEventListener("click", event => {
          event.preventDefault(); //to stop the page reload
          let numberOfGiphy=document.getElementById("enterNumber").value.trim();
          let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${numberOfGiphy}&q=`;
          let str = document.getElementById("search").value.trim();
          
          url = url.concat(str);
          console.log(url);
          fetch(url)
            .then(response => response.json())
            .then(content => {
              
              console.log(content.data);
              console.log("META", content.meta);
              const fig = document.getElementsByTagName("figure");
              
              const fc = document.getElementsByTagName("figcaption");
              const image=document.getElementById('img');
              const imageHolder=document.getElementById('imgHolder');
              imageHolder.innerHTML="";

              for (let i =0; i<numberOfGiphy; i++) {
                let divElement = document.createElement("div");
                let imgElement = document.createElement("img");
                imgElement.src=content.data[i].images.downsized.url;
                imgElement.alt=content.data[i].title;
                imgElement.width="300";
                imgElement.height="200";
                divElement.appendChild(imgElement);
                imageHolder.appendChild(divElement);
              }
            })
            .catch(err => {
              console.error(err);
            });
        });
      }