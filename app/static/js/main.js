// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const csrftoken = getCookie('csrftoken');

axios.defaults.withCredentials = true;



// async function getPropertyList() {
//     const response = await axios.get(mainDomain + '/properties/');
//     for (let i = 0; i < response.data.length; i++) {
//         response.data[i].values = [];
//     }
//     return response.data
// }
