let display = document.querySelector("h1")
// display.innerText = "hello"
let buttons = Array.from(document.getElementsByTagName("button"));
// console.log(buttons);

buttons.map(button => {
    button.addEventListener('click',(e) => {
        // console.log("clicked");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
    // })
    // });
        switch(e.target.innerText){
            case 'ON':
                display.innerText = '';
                break;
                case 'pre':
                    if(display.innerText){
                        display.innerText = display.innerText.slice(0, -1);
                    }
                    break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch{
                        display.innerText
                    }
                    break;
                    default:
                        display.innerText += e.target.innerText;
        }
    })
})