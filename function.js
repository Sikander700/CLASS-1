function add(a,b){

    c=a+b;
    console.log(c);
}

add(873, 34);

//console.log(c);

const getavg=function(m1,m2,m3){
    const avg=(m1+m2+m3)/3;

    //console.log(avg);
    return avg;

}

const result=getavg(34, 56, 78);
console.log(result);

const getfact=(n) => {
    let f=1;
    for(let i=1; i<=n; i++){
        f=f*i;
    }

    //console.log(f);
    return f;
}

getfact(5);

const myres=getfact(10)/getfact(5);
console.log(myres);