alert('Welcome to my grocessary shop 🥰🎉');

let buget = Number(prompt('please Enter your buget'));

let itemCount = Number(prompt('How many items'));

let total = 0;


for(let i = 1; i <= itemCount;i++){
    let itemName = prompt('Enter you '+i+'item');
    let itemPrice = Number(prompt('Enter you items Price'));

    if(itemPrice <= buget){
        alert(itemName+'you are affortable you can buy now');
    }else
    {
        alert(itemName+'you are not affortable');
    }
    total = total + itemPrice;
}


alert('you total Price is Rs:'+total);


if(total <= buget){
 alert('ape na apna beget ma shopping ki or ape ka enta ruppess wapse  bache'+'Rs:'+(buget-total));
}else
{
    alert('Ape na apna buget  sa zayada ki shopping ka or ketna buget zayada tha os ka ruppess  Rs:'+(total-buget))
}

