let numberOfSex;

function start(){
  numberOfSex = +prompt('How many times had you sex? (only numbers)', '')
  
  while(numberOfSex == '' || numberOfSex == NaN || isNaN(numberOfSex)){
    numberOfSex = +prompt('How many times had you sex? (only numbers)', '')
  }
}
start();

const personalSexInfo = {
  count: numberOfSex,
  places:{},
  partners:{},
  sex: [],
  privat: false
};

function rememberDB(){
  for (let i = 0; i < 2; i++){
    const a = prompt('Your last sex?', ''),
    b = prompt('How much did u enjoy?', '')
  
    if (a != null && b != null && a != '' && b != '' && a.length < 20 && b.length < 10){
      personalSexInfo.places[a] = b;
      console.log('fine')
    } else {
      console.log('noo wayy!!!')
      i--;
    }
  }
}
rememberDB();

function detectPersonalInfo(){
  if (personalSexInfo.count < 10){
    console.log('hmm seems like you are a looser');
  } else if (personalSexInfo.count >= 10 && personalSexInfo.count < 20) {
    console.log('well good for you');
  } else if (personalSexInfo.count >= 20){
    console.log('YOU rock my MAN')
  } else {
    console.log('something went wrong')
  }
}
detectPersonalInfo();

function showMyDb(hidden){
  if (!hidden){
    console.log(personalSexInfo);
  }
}
showMyDb(personalSexInfo.privat);

function writeUrSex(){
  for(let i = 1; i <= 3; i++){
    personalSexInfo.sex[i - 1] = prompt(`your best partner?${i}`);
  }
}

writeUrSex();