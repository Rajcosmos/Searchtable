var $tbody = document.querySelector('tbody');
var $Datetime = document.querySelector('#Datetime');
var $City = document.querySelector('#City');
var $State = document.querySelector('#State');
var $Country= document.querySelector('#Country');
var $Shape = document.querySelector('#Shape');

// Note ids are lowercase for button selectors to differentiate between the query selector ids' and button ids'

var $DatetimeBtn =  document.querySelector('#datetime');
var $cityBtn = document.querySelector('#city');
var $stateBtn = document.querySelector('#state');
var $CountryBtn =  document.querySelector('#country');
var $ShapeBtn = document.querySelector('#shape');
var $RefreshBtn = document.querySelector('#refresh');

$DatetimeBtn.addEventListener('click',dateSearchButtonClick);
$cityBtn.addEventListener('click',citySearchButtonClick);
$stateBtn.addEventListener('click',stateSearchButtonClick);
$CountryBtn.addEventListener('click',countrySearchButtonClick);
$ShapeBtn.addEventListener('click',shapeSearchButtonClick);
$RefreshBtn.addEventListener('click',RefreshButtonClick);


 /** 
console.log($Datetime);
console.log($City);
console.log($State);
console.log($Country);
console.log($Shape);
*/

//Load the data from js file into rows and columns 
var filterData = dataSet;

function renderTable() {
    $tbody.innerHTML='';

    var tempArray = filterData;

    for(var i=0;i<filterData.length;i++) {
    
        var table_data = filterData[i];
    
        var fields=Object.keys(table_data);
        var $row = $tbody.insertRow(i);
        for (var j=0;j<fields.length;j++) {
            var field=fields[j];
            var $cell = $row.insertCell(j); 
           $cell.innerText = table_data[field];
           
        } 
    }
}



  function RefreshButtonClick() {
    filterData = dataSet;
  // alert("Refreshing, please give some time ...");
    renderTable();
  }

function dateSearchButtonClick() {
            var  dateTemp=$Datetime.value;
         //   alert("Hey you just clicked --Date");

    if($City.value)
        { 
          filterData = tempArray.filter(function(table_data){
            var dateName = table_data.datetime;
       
            return dateName == dateTemp;
                        } );
          
            console.log("filterData is ");
            console.log(filterData); 

            renderTable();
        }

        else if (dateTemp) {
              filterData = dataSet.filter(function(table_data){
              var dateName = table_data.datetime;
         
              return dateName == dateTemp;
                          } );
            
              console.log("filterData is ");
              console.log(filterData); 

              renderTable();

                 }
} 

function citySearchButtonClick() {
                var cityTemp=$City.value.trim().toLowerCase();
              //  alert("Hey you just clicked --City");

                if (cityTemp) {
                  filterData = dataSet.filter(function(table_data){
                  var cityName = table_data.city;
                 
                  return cityName == cityTemp;
                        } );
          
                console.log("filterData is ");
                console.log(filterData); 
                renderTable();

                 }
} 



 function stateSearchButtonClick() {
             var  stateTemp=$State.value.trim().toLowerCase();
            //  alert("Hey you just clicked --State");

              if (stateTemp) {
                filterData = dataSet.filter(function(table_data){
                var stateName = table_data.state;
                
                return stateName == stateTemp;
                            } );
              
                console.log("filterData is ");
                console.log(filterData); 
                renderTable();

                 }
} 




function countrySearchButtonClick() {
  var  countryTemp=$Country.value.trim().toLowerCase();


   //alert("Hey you just clicked --Country");

   if (countryTemp) {
     filterData = dataSet.filter(function(table_data){
     var countryName = table_data.country;
   
     return countryName == countryTemp;
                 } );
   
     console.log("filterData is ");
     console.log(filterData); 
     renderTable();

      }
} 



function shapeSearchButtonClick() {
  var  shapeTemp=$Shape.value.trim().toLowerCase();


   //alert("Hey you just clicked --Shape");

   if (shapeTemp) {
    
     filterData = dataSet.filter(function(table_data){
     var shapeName = table_data.shape;
    
     return shapeName == shapeTemp;
                 } );
   
     console.log("filterData is ");
     console.log(filterData); 
     renderTable();

      }
} 
 

renderTable();


