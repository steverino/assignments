const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONData = xhr.responseText;
    const data = JSON.parse(JSONData);
    // console.log(data.objects[0].pokemon);
    let name = data.objects[0].pokemon;
    showList(name);
    console.log(data.objects[0]);
  }
};

function showList(item) {
    console.log(item);
    for (let i = 0; i < item.length; i++) {
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        h2.textContent = `Name: ${item[i].name}`;
        p.textContent = `URI: ${item[i].resource_uri}`;

        document.body.appendChild(h2);
        document.body.appendChild(p);
        
  }
}

// let names = data.objects[0].pokemon;
//         for(let i =0; i < names.length; i++ ){
//             document.getElementById("list").innerHTML =
//             names[i].name;
//         }
