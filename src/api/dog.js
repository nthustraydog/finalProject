import {AsyncStorage} from 'react-native';
const postBaseUrl = 'http://172.20.139.176:8080/api';
//const postBaseUrl = 'http://nthustraydog.us-west-2.elasticbeanstalk.com/api';
const initialUser = {
  point: 0,
  accomplish: 0,
  avai: false,
  dingding: false,
  eric: false,
  golden: false,
  gooddog: false,
  heilulu: false,
  jimmy: false,
  lally: false,
  peach: false,
  meatball: false,
  pidan: false,
  wolf: false,
};

export function getDog(dogID = '') {
  //  console.log(dogID);
    let url = `${postBaseUrl}/dogs`;
    if (dogID)
        url += `?dogID=${dogID}`;

    console.log(`Making GET request to: ${url}`);

    return fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.json();
    });
}

export function sendbath(name,mail,date,dogname,note) {
    let url = `${postBaseUrl}/mails`;

    console.log(`Making bath request to: ${url}`);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            mail,
            date,
            dogname,
            note
        })
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
    });
}
export function sendevent(name,mail,date,location,dogname,process_in,check_event) {
    let url = `${postBaseUrl}/texts`;

    console.log(`Making event request to: ${url}`);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            mail,
            date,
            location,
            dogname,
            process_in,
            check_event
        })
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
    });
}
export function sendadopt(name, phone, email, address, exp, id) {
    let url = `${postBaseUrl}/adopt`;

    console.log(`Making event request to: ${url}`);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            phone,
            email,
            address,
            exp,
            id
        })
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
    });
}
// get data
export function getUserAccomplish(){
    return new Promise((resolve, reject) => {
        resolve(_getUserAccomplish());
    });
}
function _getUserAccomplish() {
  return AsyncStorage.getItem('data', (err, data) => {
    if(err)
      console.error(err);

    if(data === null || data === undefined) {
      let obj = initialUser;
      AsyncStorage.setItem('data', JSON.stringify(obj)).then(() => {
          console.log("Achieve!!");
      });
      return obj;
    }
    else {
        let userData = JSON.parse(data);

        return userData;
    }
  });
}

//set data
export function setUserAccomplish(state) {
    AsyncStorage.setItem('data', JSON.stringify(state));
}
//clear data
export function clearUserAccomplish(){
    AsyncStorage.setItem('data', JSON.stringify(initialUser));
}
