function getInfo(){
$.ajax({
    url: "http://localhost:8080/data",
    type: 'GET',
    success: function(data){
        let reqId = $("#number").val()
        if (data.id == reqId){
            $("#node-label").html(data.label)
        } else if(reqId > 0 && reqId <10){
            if(data.children){
            data.children.forEach( x => {
                if (x.id == reqId){
                    $("#node-label").html(x.label)
                } else if (x.children){
                    x.children.forEach( y => {
                        if (y.id == reqId){
                            $("#node-label").html(y.label)
                        } 
                    })
                } 
            })
            }  
        } else {
            $("#node-label").html('Please, enter correct ID')
        }
    }
})
}

let getId = id => document.getElementById(id)


function formSubmit(){
  hideErr()
  if(getId('name').value && getId('adress-1').value && getId('city').value && getId('state').value && getId('zip-code').value){
  if(getId('name').value.length > 100 || !getId('name').value.match(/^[A-Za-z]+$/)){
    showErr('name-error', 'name')
  }
  if(getId('adress-1').value.length > 100){
    showErr('adress-1-error', 'adress-1')
  }
  if(getId('adress-2').value.length > 100){
    showErr('adress-2-error', 'adress-2')
  }
  if(getId('city').value.length > 50){
    showErr('city-error', 'city')
  }
  if(getId('zip-code').value.length != 5 || isNaN(getId('zip-code').value.length)){
    showErr('zip-code-error', 'zip-code')
  } else if(getId('name').value.match(/^[A-Za-z]+$/) && getId('name').value.length < 100 && getId('adress-1').value.length < 100 && getId('city').value.length < 50 && getId('zip-code').value.length == 5 && !isNaN(getId('zip-code').value.length)) {
      alert('You have passed registration. Wellcome!')
  }
} else {
    alert('Please, fill all required fields.')
}
}

function showErr(errId, itemId){
    getId(errId).style.display = 'block';
    getId(itemId).style.borderColor = 'red';
}

function resetForm(){
    document.forms['registration-form'].reset();
    hideErr()
}

function hideErr(){
    document.querySelectorAll('p').forEach(x => x.style.display = 'none');
    document.querySelectorAll('input').forEach(x => x.style.borderColor = 'grey');
}