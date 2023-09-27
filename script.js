const head = document.getElementById("head")
const body = document.getElementById("body")


const activeCellElement = document.getElementById("cell-display")

/// this part creates the header section or top section
//<=========================TOP SECTION===============================>
function addElement(index){
    const char =String.fromCharCode(index)
    const cell = document.createElement("b")
    cell.innerText = `Element ${char}`
    head.appendChild(cell)
}
for(let i=65 ;i<=90;i++){
    addElement(i)
}
//<=========================TOP SECTION===============================>
// this function will create a row and 
// add  A to Z cells and appends it to body
function createRow(rowNumber){
    const row = document.createElement("div")
    row.className = "row"
    row.id=`row-${rowNumber}`


    for(let i=64 ;i<=90;i++){
        const char =String.fromCharCode(i)
       
        if(i===64){
            const cell = document.createElement("b")
            cell.innerText = `${rowNumber}`
            row.appendChild(cell)
        }else{
            const cell = document.createElement("div")
            cell.innerText = ``
            row.appendChild(cell)
            cell.id=`${char}-${rowNumber}`
            cell.setAttribute("contenteditable",true)
            cell.style.minWidth = "100px"
            cell.style.maxHeight = "20px"
            cell.addEventListener("focus",onCellFocus)


            cell.addEventListener("blur",()=>{
                activeCellElement.innerText =`none`
            })
        }
        
       
       
    }
    body.appendChild(row)
}
// this part creates or calls to create all the rows of element
for(let i=1 ;i<=100 ;i++){
   const row = createRow(i)
}



