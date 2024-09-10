let total = 0;
function handleClickShowBtn(data) {
  const textArea = document.getElementById("text-area");

  // count
  const count = textArea.childElementCount;
  const dataText = data.childNodes[3].childNodes[3].innerText;
  const p = document.createElement("p");
  p.classList.add("ml-5");
  p.innerText = `${count + 1} ${dataText}`;
  textArea.appendChild(p);

  // price total
  const price = data.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(price);
  console.log(total);

  document.getElementById("total-price").innerText = total.toFixed(2);


// coupon and apply btn 
getApplyInputField()
// make parches 
setTotal()

}


function getApplyInputField(){
const couponInput =document.getElementById('coupon-input');


const applyBtn=document.getElementById('coupon-btn');
if (total >= 200) {
  applyBtn.disabled = false;
  applyBtn.addEventListener('click',function(){
    const inputField = couponInput.value.trim();
    if(inputField==="SELL200"){
      const discount=total*0.2;
      const cardTotalTk=document.getElementById('card-total-price');
      cardTotalTk.innerText=(total-discount).toFixed(2);
      const cardDiscount =document.getElementById('card-discount');
      cardDiscount.innerText=discount.toFixed(2);
    }
    couponInput.value='';
    
  })
  

} else {
  applyBtn.disabled = true;
}

}

function setTotal(total){
    // make parches 
    const purchaseBtn = document.getElementById('make-purchase-btn');
    if (total == 0) {
        purchaseBtn.setAttribute('disabled', true);
    }
    else {
        purchaseBtn.removeAttribute('disabled');
    }
    document.getElementById("go-home-modal-btn").addEventListener("click",function(){
 
      removeElementValue("total-price");
       removeElementValue("card-discount");
       removeElementValue("card-total-price");
     
     
         const container = document.getElementById("text-area");
         while (container.firstChild) {
           container.removeChild(container.firstChild);
         }
       
     })
       // reusable function
       function removeElementValue(inputId){
         const elementId = document.getElementById(inputId);
         elementId.innerText = "";
       }
}

