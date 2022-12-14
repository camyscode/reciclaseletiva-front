

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {

        for(const state of states){
        ufSelect.innerHTML +=` <option value="${state.id}">${state.nome}</option>`
        }
    })
   
}
populateUFs()



function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=city]")

    const ufValue = event.target.value
    const indexOfSelectState = event.target.selectIndex
    stateInput.value = event.target.opitions[selectIndex]
    
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML= ""
    citySelect.disabled = false

    fetch(url)
    .then(res => res.json())
    .then(cities => {
        

        for(const city of cities){
        citySelect.innerHTML +=` <option value="${city.id}">${city.nome}</option>`
        }
        citySelect.disabled = true
    })
}




 document
  .querySelector("select[name=uf]")
   .addEventListener("change", getCities)

