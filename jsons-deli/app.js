async function fetchData() {
  const response = await fetch("http://localhost:3000/menu/");
  // console.log('Response:', response)
  const data = await response.json();
  // console.log(data);
  data.map(function (menu) {
    menu.appetizers.map(function (item) {
      let ul = document.getElementById('items')
        let li = document.createElement('li')
        let p = document.createElement('p') 
      li.textContent = item.name;
      p.textContent = item.ingredients
      ul.append(li)
      li.append(p)  
    });
  });
}
fetchData();
