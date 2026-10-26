const button = document.querySelector("#button");



var n = prompt("Enter the grid length");


const container = document.querySelector("#container");






for (let i = 0; i <n; i++){
    for(let j =0 ; j <n; j++){
        let div = document.createElement("div");
        container.appendChild(div);
        div.style.height = `calc(100%/${n})`;
        div.style.width = `calc(100%/${n})`;
        //div.style.border = "1px solid red";
        div.style.boxSizing = "border-box";

        div.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
            div.style.backgroundColor =`rgb(${r},${g},${b})`;
        })
       // button.addEventListener("click", () => {
         //   div.remove();

        //})


         
        }
          
}








  button.addEventListener("click", () => {
                 n = prompt("Enter the grid length");
                 container.innerHTML ="";
    for (let i =0; i < n ; i++){
        for (let j = 0; j< n; j++){
             let div = document.createElement("div");
        container.appendChild(div);
        div.style.height = `calc(100%/${n})`;
        div.style.width = `calc(100%/${n})`;
        //div.style.border = "1px solid red";
        div.style.boxSizing = "border-box";

        div.addEventListener("mouseover", () => {
                        const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
            div.style.backgroundColor =`rgb(${r},${g},${b})`;
        })
         



    }
    }

  })

