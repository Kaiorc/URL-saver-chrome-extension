let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

//Event Listener do botão de salvar tab
tabBtn.addEventListener("click", function(){ 
    //Usando Chrome API 
    //Consulta a tab ativa, na janela em destaque
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //Salva a URL do primeiro elemento do array de abas (tabs) do Chrome (tab atual),
        //no array de links 
        myLeads.push(tabs[0].url);
        //Salva o array de links no localStorage
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        //Invoca a renderização do array
        render(myLeads);
    })
})

//Função que rendeiza o array com os links salvos
function render(leads) {
    let listItems = "";

    //For que percorre o array de links e concatena os elementos
    //no formato do template html criado
    for (let i = 0; i < leads.length; i++) {
        //Template
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    //Os links no formato do template são adicionados
    //na lista desordenada
    ulEl.innerHTML = listItems;
}

//Event Listener do botão de deleção
deleteBtn.addEventListener("dblclick", function() {
    //Limpa o localStorage
    localStorage.clear();
    //Limpa o array de links
    myLeads = [];
    //Invoca a renderização do array vazio
    render(myLeads);
});

//Event Listener do botão input
inputBtn.addEventListener("click", function() {
    //Salva o valor do input, no array de links
    myLeads.push(inputEl.value);
    //Limpa o texto do input
    inputEl.value = "";
    //Salva o array de links no localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    //Invoca a renderização do array
    render(myLeads);
});