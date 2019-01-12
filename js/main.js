$(document).ready(function(){
    
	//side menu for mobile
	$("#side-menu-button").click(function(){
      $('#side-menu').css("width","250px");

    })

    $("#close-buttion-top").click(function(){
      $('#side-menu').css("width","0px");
      $('#main').css("marginLeft","0px");
    })
    
    

    ///////////////////////////click the confirm payment
    $(".confirm-payment").click(function(){
    	$("body").css("overflow","hidden")
    	$("#onlick-traing-fixed-body").css("display","block")
    })


    ///////////////////////////click the close payment
    $(".popup-close").click(function(){
    	$("body").css("overflow","auto")
    	$("#onlick-traing-fixed-body").css("display","none")
    })


    ///////////////////////////////////////click the ul li second-list
    $(".first-list").click(function(){
    	$(".first-list").removeClass("active-li")
    	$(this).addClass("active-li")
    })

	///////////////////////////////////////click the ul li 
    $(".second-list").click(function(){
    	$(".second-list").removeClass("active-li")
    	$(this).addClass("active-li")
    })

    ///////////////////////////////////////////////////////////////////////////////////////calculator
     var firstInput;
     var firstAttrName="NONE";
     var secondAttrName="NONE";
     var exchangeValue = 2;
     var finalAmount;
     var getImg1="";
     var getImg2="";

     var callConsole = function(){
     	console.log(firstAttrName)
     	console.log(secondAttrName)
     	console.log(firstInput)
     }

     var chnageFinalAmount = function(){
     	finalAmount = firstInput * exchangeValue
    	$(".receive-amount-text").html(finalAmount)
     }
    /////////////////////input keyup
    $(".calculator-input").keyup(function(){
    	firstInput = $(this).val()
    	callConsole()
    	
    }) 
    /////////////////////click the first list
    $(".first-list").click(function(){
    	firstAttrName = $(this).attr("data-name")
    	getImg1 = $('.first-list-img',this).attr("src")
    	$(".first-chang-title").html(firstAttrName)
    	callConsole()
    	if(secondAttrName != "NONE"){
    		chnageFinalAmount()
    	}
    	
    })
    /////////////////////click the first list
    $(".second-list").click(function(){
    	secondAttrName = $(this).attr("data-name")
    	getImg2 = $('.second-list-img',this).attr("src")
    	$(".second-chang-title").html(secondAttrName)
    	callConsole()
    	if(firstAttrName != "NONE"){
    		chnageFinalAmount()
    	}
    })



    ///////////////////////////////////////////////////////click the popup function
    $(".confirm-payment").click(function(){
    	$(".popup-first-value").html(firstInput)
    	$(".popup-second-value").html(finalAmount)
    	$(".pop-fisrt-text").html(firstAttrName)
    	$(".pop-second-text").html(secondAttrName)
    	$(".pop-fisrt-img").attr('src', getImg1);
    	$(".pop-second-img").attr('src', getImg2);

    })

    

})


///////////////when scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 30) { // this refers to window
        $("#menu-bar").css('margin-top',"-40px");
    }else{
    	$("#menu-bar").css('margin-top',"0px");
    }
});
