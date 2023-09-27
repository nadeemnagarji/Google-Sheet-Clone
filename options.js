let activeCell = null;
let activeOptionsState
// let activeOptionsState={
//     isBoldSelected: false
// }

function onCellFocus (e){
    activeCell = e.target
    activeCell.style.overflowY = "auto"
    // console.log(activeCell.style.overflowY)
    activeCellElement.innerText =`${e.target.id}`


// here we capture the entire styles when user focuses on the cell
// i.e. if a cell already had something selected i.e. bold or differene color
// we capture those styles in computedStyle variable
    const computedStyle = getComputedStyle(activeCell)

// and this styles are maintained in the activeOptionsState to let the user know the current state of the cell

    // initialize the state of each cell
    // because we need to maintain the state of the cell whenever a user focuses on a cell
    activeOptionsState = {
        isBoldSelected: computedStyle.fontWeight ==="600",
        isItalicSelected: computedStyle.fontStyle ==="italic",
        isUnderlineSelected: computedStyle.textDecoration==="underline",
        textAlign:computedStyle.textAlign,
        textColor:computedStyle.color,
        backgroundColor:computedStyle.backgroundColor,
        fontSize:computedStyle.fontSizes
    }

    console.log(activeOptionsState);

}

function onClickBold(button){
    button.classList.toggle("active-options")

if(activeCell){
    console.log(activeOptionsState.isBoldSelected);
   if(activeOptionsState.isBoldSelected===false){
    activeCell.style.fontWeight = "600"
   }else{
    activeCell.style.fontWeight = "400"
   }
   activeOptionsState.isBoldSelected = !activeOptionsState.isBoldSelected
}

}

function highlightTextAlignButtons(textAlignValue){
        // if textAlignValue is left we highlight leftAlignButton
        // if rightAlignValue is left we highlight rightAlignButton
    const textAlignElement = document.getElementsByClassName("AlignItems")
        
    for(let i=0;i<textAlignElement.length;i++){
        if(textAlignElement[i].getAttribute("data-value")===textAlignValue){
            textAlignElement[i].classList.toggle("active-options")
            console.log(textAlignElement[i]);
        }else{
            textAlignElement[i].classList.remove("active-options")
        }
    }
}


function onclickTextAlign(button){
    const alignType = button.getAttribute("data-value");
    // this value helps us identify which button was clicked amoungst the three

    // we cant change the bg of button because if we do it will change value of all 3 buttons
    // to handle this we make another function which handles the bg change of each button
    // with the help of attribute value
    highlightTextAlignButtons(alignType)
   if(activeCell){
   
    activeCell.style.textAlign = alignType
    activeOptionsState.textAlign=alignType
   }

}

