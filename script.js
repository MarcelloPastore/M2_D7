//! inizio esercizio finale
// NON MODIFICARE QUESTO ARRAY!
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]
// TODO:  devo crearmi una funzione che analizza un array e mi restituisce solo gli elementi che mi interessano
// * inizio a definirmi le variabili di appoggio o contatri
let counter = 0;
let counter2 = 1;
// *definisco l'array di riscontro, mi basta solo questo per restituire il valore sulla pagina
searchResults = [];
// *metto tutto in un for che mi itera la ricerca
// *per ogni iterazione il for controlla che nell'array ci sia la stringa catturata nell'HTML
let search =  () => {
  // * catturo le variabili di input con getElement 
  let titleLow = document.getElementById("title");
  let locationLow = document.getElementById("location");
  let p = document.querySelector("p")
  // * queste le lascio commentate perché mi servivano come prova
  //? let titleLow = "dev";
  //? let locationLow = "us";
  // * ho controllato spesso che il risultato fosse giusto
  // console.log(titleLow.value);
  // console.log(locationLow.value);
  // * Creo il for che controlla tutto l'array 
    for (let i = 0; i < jobs.length; i++) {
      // * Creo un IF che confronta la stringa catturata con quelle all'interno dell'array
        if (jobs[i].title.toLowerCase().includes(titleLow.value) && jobs[i].location.toLowerCase().includes(locationLow.value)) {
          // * inserisco l'intero oggetto nell'array di ricerca
            searchResults.push(jobs[i]);
            // * mi controllo i risultati
            // console.log(jobs[i]);
            // console.log(searchResults);
            // * inserisco la stringa che mi interessa nel documento HTML
            p.innerText += ("Job "+ counter2 + ": " + searchResults[counter].title + "\nlocation:  " + searchResults[counter].location + "\n")
            // * uso un console log per controllare che il risultato sia corretto
            console.log("Job "+ counter2 + ": " + searchResults[counter].title + "\nlocation:  " + searchResults[counter].location);
            // * aggiorno i counters
            counter ++;
            counter2 ++
        }
      // * controllo anche gli errori per vedere se prende tutti gli elementi che mi interessano o meno
      // else {console.log("error");}
    } 
    return searchResults;
}
// TODO: Mi creo un bottone (assolutamente non neceassario) che mi cancella tutti i paragrafi
// ! ringraziamento speciale a Marco Biunno per avermi fatto capire che chiamare la funzione clear mi dava problemi <3
let Marco = () => {
  // * catturo il paragrafo p con una variabile
  let p = document.querySelector("p")
  // * elimino tutto il contenuto del paragrafo 
  p.innerHTML = "";
}
// ! fine del codice, grazie di tutto per la visione <3!