async function getData(){
    const data=await fetch('https://dummyjson.com/users');
    const records=await data.json();

    let details=''; 
    records.users.forEach(function(user) {
        details+=`<tr>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.age}</td>
          <td>${user.email}</td>
          <td>${user.gender}</td>
        </tr>`
    });
    document.getElementById('tbody').innerHTML=details;
}