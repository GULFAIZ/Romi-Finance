var s={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(s).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    doge.innerHTML=response.dogecoin.usd;
});
var  btc=document.getElementById("bitcoin");
var  eth=document.getElementById("ethereum");
var  doge=document.getElementById("dogecoin");