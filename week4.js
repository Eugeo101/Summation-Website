const btn = document.querySelector("#button1");
const txt = document.querySelector("#text1");
const Result = document.querySelector("#Result");

let sum = 0;
const clicked = () =>{
    if (txt.value) //if clicked and txt contain something
    {
        let str = txt.value;
        const arr = str.split(" ");
        arr.forEach((element) => {
            if (Number(element))
            {
                sum = sum + Number(element);
            }
        });
    }
    const arr = [];
    console.log("The sum equals = " + sum);
    Result.innerHTML = `<h3>sum equals= ${sum}</h3> <p>Please Check the Console too</p>`;
    sum = 0;
};
Result.innerHTML = `<h3>No Numbers Entered</h3>`;
btn.onclick = clicked;