//local storage: it is same as session storage it just that it does not comes with loss of data
//you have to implesitely clear it.
//browser turn off, tab turn off or loginoff machine does not change it.
//memory capacity of atleast 5mb- 10mb. it can very depend to devices also

//session storage: it is stored till the time we have the sessions(browser tab).
//better than cookies as it does not sends the data to server while making network call
//it can hold memory of 5mb atleast

//cookies
//it can holds data 4000bytes of data

windows.localStorage.setItem('name', 'Sharansh');
window.localStorage.setItem('name1', 'sharansh2');
window.localStorage.getItem('name');
windows.localStorage.removeItem('name');
localStorage.clear();

let updatecase = {'firstName':'swati'};
localStorage.setItem('firstName', JSON.stringify(updatecase));

const getItemStorage = JSON.parse(localStorage.getItem('firstname'));
document.cookie = 'name=dubey; expires=' + new Date(2020,0,1).toUTCString();