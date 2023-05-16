
function date(date) {
  let _date = date.split("-")
  new Date(parseInt(_date[0]),parseInt(_date[1]-1),parseInt(_date[2]-1))
  console.log(new Date(parseInt(_date[0]),parseInt(_date[1]-1),parseInt(_date[2])+1)); 
};

date('1999-5-10')

