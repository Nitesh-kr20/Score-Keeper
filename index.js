var p = document.getElementById("p1");
var p2 = document.querySelector("#p2");
var re = document.querySelector("#reset");
var score1=0;
var score2=0;
var game= true;
var s1 = document.querySelector("#p1score");
var s2 = document.querySelector("#p2score");
var ip = document.querySelector("input");
var winningscore = 5;
var wd = document.querySelector("p span");

p.addEventListener("click",function(){
  if(game)
  {
    score1+=1;
    if(score1===winningscore)
    { game=false;
      s1.classList.add("winner");
    }
  }
  s1.textContent = score1;

  });

p2.addEventListener("click",function(){
    if(game)
    {
      score2+=1;
      if(score2===winningscore)
      {
        game=false;
        s2.classList.add("winner");
      }
    }
    s2.textContent = score2;
  });

re.addEventListener("click", function(){
  reset();
});

function reset() {
  score1=0;
  score2=0;
  game=true;
  s1.textContent = score1;
  s2.textContent = score2;
  s1.classList.remove("winner");
  s2.classList.remove("winner");
}

ip.addEventListener("change",function() {

  wd.textContent = ip.value;
  winningscore = Number(ip.value);
  reset();
})
