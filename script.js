add = document.getElementById('add');

add.addEventListener("click", function(){
   update("1"); 
});

function update(flag) {
    jsonstr = localStorage.getItem('json');
     jsonarr = JSON.parse(jsonstr)
    console.log("Updating.....");
    if(flag=="1"){
    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('json') == null) {

        jsonarr = [];
        jsonarr.push([title, desc]);
        localStorage.setItem('json', JSON.stringify(jsonarr));
    }

    else {

        let jsonstr = localStorage.getItem('json');
        jsonarr = JSON.parse(jsonstr)
        jsonarr.push([title, desc]);
        localStorage.setItem('json', JSON.stringify(jsonarr));
    }

}

if(jsonarr!=null){
    let tablebody = document.getElementById('tablebody');

    var str = ``;

    jsonarr.forEach((element, index) => {
        str += `
    <tr> 
    <th scope="row">${index + 1}</th>
     <td>${element[0]}</td>
      <td>${element[1]}</td>
        <td><button  class="btn btn-primary btn-sm" onclick=deleted(${index})>Delete</button></td>
      </tr>
     `;


    });

    tablebody.innerHTML = str; 
}
}


update("2");

function deleted(index){
    let jsonstr = localStorage.getItem('json');
    jsonarr = JSON.parse(jsonstr)
     
    jsonarr.splice(index,1);
    localStorage.setItem('json', JSON.stringify(jsonarr));
   


update("2");
}

function clearlist(){
    if(confirm("Do you really want to clear ?")){
  console.log("Clearing List");
    localStorage.clear();
    tablebody.innerHTML="";
    }
}
