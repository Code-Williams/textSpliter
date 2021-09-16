var splitInp = document.getElementById("splitInput");
var splits = document.getElementById("splits");
var splitBtn = document.getElementById("splitNow");

splitBtn.addEventListener("click", () => {

    var valueInp = splitInp.value
    if(valueInp !== ""){

        splitInp.style.border = "1px solid black"
        const inpSplit = valueInp.replace("\n", " ").split(" ")

        var splitsBefore = document.getElementsByClassName("splits");
        var pBefore = document.getElementsByClassName("pItem");

        for(const i of splitsBefore) i.remove();
        for(const i of pBefore) i.remove();

        for(const i of inpSplit){

            var createSplitItem = document.createElement("div");
            var pItem = document.createElement("p");

            createSplitItem.className = "splits";
            pItem.className = "pItem";

            document.body.appendChild(createSplitItem);
            createSplitItem.appendChild(pItem);

            pItem.innerHTML = i;

        }

    }else{
        splitInp.style.border = "1px solid red"
    }

})