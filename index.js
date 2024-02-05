
// function to get the hex value and scheme value

document.getElementById('search-color').addEventListener('click', () => {
    const hexCode = document.getElementById('seed-color').value
    const colorScheme = document.getElementById('color-scheme').value
   
    const colorWithoutHash = hexCode.slice(1) 
   
   searchColor(colorWithoutHash, colorScheme)
})



// function to make a GET request to the API
function searchColor(color, colorScheme) {

    // API
const apiURL = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorScheme}&count=5`
    fetch(apiURL)
   
       .then(response => response.json())
       .then(data => {
        
        let colorField = ''
        let hexCodes = ''

         data.colors.forEach(color => {
         colorField += `
           <div class="color-field" 
           style="background-color: ${color.hex.value};">
           </div>
           `
           hexCodes += `<p>${color.hex.value}</p>`
       })

       renderDom(colorField, hexCodes)
    })
      
}


// function to render color palette and hex code to the dom
function renderDom (colorField, hexCodes) {
    document.getElementById('hex-codes').innerHTML = hexCodes
    document.getElementById('second-section').innerHTML = colorField
}