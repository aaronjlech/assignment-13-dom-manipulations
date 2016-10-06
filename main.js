
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})
console.log('wtf mate')
document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')

  var grabStr = answerPTagWithValue.innerText
  var turnNum = parseInt(grabStr)

  var doubleMe = turnNum * 2

   answerPTagWithValue.innerText =  doubleMe




  // you do the rest

})


document.querySelector("#color-circle button").addEventListener('click',function(){
   var circleSelector = document.querySelector("#circle-bw")



   if(circleSelector.style.backgroundColor === ""){
      circleSelector.style.backgroundColor = "black"
   }
   else if(circleSelector.style.backgroundColor === "black"){
      circleSelector.style.backgroundColor = ""
   }
  // TASK #3
})

document.querySelector("#blow-up button").addEventListener('click',function(){

   var redCircleEl = document.querySelector("div.circle-red")


    var redCircleStyles = window.getComputedStyle(redCircleEl)
    var circleWidth = redCircleStyles.width.slice(0, -2)
    var circleHeight = redCircleStyles.height.slice(0, -2)


    var circleHeightNum = parseInt(circleHeight)
    var circleWidthNum = parseInt(circleWidth)
      var circleWidthDbld = circleWidthNum * 2
      redCircleEl.style.width = circleWidthDbld + "px"
      redCircleEl.style.height = circleWidthDbld + "px"
      if(circleWidthDbld > 320){
         redCircleEl.style.width = 40 + "px"
         redCircleEl.style.height = 40 + "px"

      }

  // TASK #4}
})

document.querySelector("#remove button").addEventListener('click',function(){
   var userList = document.querySelector('#user-list')
   var allUsers = document.querySelectorAll("#user-list li")


      for(var i = 0; i < allUsers.length; i++){
         var allUsersLi = allUsers[i];

         if(allUsersLi.classList.contains('inactive') === true){
            userList.removeChild(allUsersLi)

         }

      }




  // TASK #5
})




document.querySelector("#reverse-squares button").addEventListener('click',function(){

   var allSquareSelector = document.querySelectorAll('.square')
   console.log(allSquareSelector)
   var flipdArray = []



   // console.log(allSquareSelector)
   for(var i = allSquareSelector.length-1; i >= 0 ; i--){

      flipdArray.push(allSquareSelector[i])


   }
   for(var i = 0; i < allSquareSelector.length; i++){

      for(var i = 0; i < flipdArray.length; i++){
         allSquareSelector[i].outerHTML = flipdArray[i].outerHTML

      }
   }



  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
   var allLiSelector = document.querySelectorAll("#tasks li")

   for(var i = 0; i < allLiSelector.length; i++){
      var liText = allLiSelector[i].innerText

      var textArr = liText.split('')

      var reverseTxt = textArr.reverse();

      var reverseStr =reverseTxt.join("")


      allLiSelector[i].innerText = reverseStr

   }

  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){

var imgSelector = document.querySelector('#city-img')
var tagSplit = imgSelector.outerHTML.split('');
console.log(tagSplit)
var photoIndex = tagSplit[66]

var photoNum = parseInt(photoIndex)
photoNum = photoNum + 1
console.log(photoNum)
if(photoNum > 10){
   photoNum = 0
}


imgSelector.src = "./images/city-photo-" + photoNum +".jpg"

// imgSelector.outerHTML = "<img id=\"city-img\" class=\"exercise-item\" src=\"./images/city-photo-2.jpg\">"
   console.log([imgSelector]);
   //TASK #8
})
