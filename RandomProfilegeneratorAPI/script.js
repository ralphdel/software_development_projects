async function getdata(){
  const url= 'https://api.api-ninjas.com/v1/randomuser';
  const apikey= '4bnm96jyD5610XK3LW1lXQ==todWi7b3h9L2N8iA';
  try {
    const resp =await fetch(url,{
      method: 'GET',
      headers: { 'X-Api-Key': '4bnm96jyD5610XK3LW1lXQ==todWi7b3h9L2N8iA'},
      contentType: 'application/json',
    });
    const data=  await resp.json();
    console.log(data);

  const container= document.getElementById('profile');
  container.innerHTML=`
  <h2> Name: ${data.name} </h2>
  <p>UserName: ${data.username}</p>
  <p> UserAddress: ${data.address}</p>
  <p>SEX: ${data.gender}</p>
  <p>D.O.B: ${data.birthday}</p>
  <p>Email: ${data.email}</p>
  `;
    
  } catch (error) {
    console.log('error fetching data', error);
  }
}


