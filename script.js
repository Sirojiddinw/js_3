let num = +prompt("son kiriting biz uni toq yoki juft ekanligini aniqlab beramiz")
while (isNaN(num) || num / 1 === 0 )  {
    num = +prompt("Iltimos son kiriting")
}
if ( num % 2 === 0 ) {
    +alert("Siz juft son kiritdingiz")
}else{
    +alert("Siz toq son kiritdingiz")
}
