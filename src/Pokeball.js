import './Pokeball.css'
export default function Pokeball(className){

console.log(className)
console.log("."+className.className+' .pokeball')
    window.onload = () =>{
        var Pokeball = function(){
            var div = document.querySelectorAll("."+className.className+' .pokeball')[0];
            this.create = function(){
              for (var i=0; i<18; i++){
                for (var j=0; j<9; j++){
                  var d = document.createElement("div");
                  if (i>9){
                    d.className = "red";
                  }
                  else if (i === 0 || i === 9){
                    d.className = "black";
                  } 
                  else {
                    d.className = "white";
                  }       
                  d.style.transform ="rotateX("+j*20+"deg) rotateY("+i*20+"deg) translateZ(57px) ";
                  div.appendChild(d);
                }
              }
              var nappi = document.createElement("div");
              nappi.className = "nappi";
              div.appendChild(nappi);
            }
          }
          var pallo = new Pokeball();
          pallo.create();
    }

    return (
        <div className={"container "+ className.className}>
            <div class="pokeball"></div>
        </div>
    )
}