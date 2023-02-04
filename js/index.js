const serverRooturl = 'https://weddinginvitation.onrender.com/user/';

const getContacts = async () => {
  try {
    const res = await fetch(serverRooturl + 'contacts');
    const contData = await res.json();
    return contData.data;
  } catch (err) {
    console.log('Error While Requesting for Contact Data', err);
  }
};

const fillTable = async () => {
  const contArr = await getContacts();
  const table = document.getElementById('contact-table');

  for (let i = 0; i < contArr.length; i++) {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(-1);
    cell1.innerHTML = contArr[i].name;
    const cell3 = row.insertCell(-1);
    cell3.innerHTML = contArr[i].place;
    const cell4 = row.insertCell(-1);
    cell4.innerHTML = contArr[i].invtDate;
  }
};
fillTable();
