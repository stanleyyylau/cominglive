// diamond is o
// flower is x


// JavaScript Document
$(document).ready(function() {
var x = "x"
var o = "o"
var count = 0;
var o_win = 0;
var x_win = 0;


// when a cell is click
$('#game li').click(function(){


// check to see if O wins the game
  if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
   {
	 alert('砖石赢了本轮游戏，让我们开始新的一轮吧!')

  //  if O wins the game, reset the whole thing by adding + and remove all classes that are not needed
	 $("#game li").text("7");
	$("#game li").removeClass('disable')
	$("#game li").removeClass('o')
	$("#game li").removeClass('x')
	$("#game li").removeClass('btn-primary')
	$("#game li").removeClass('btn-info')
   }

// check to see if X wins the game
  else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
  {
   alert('花儿赢了本轮游戏，让我们开始新的一轮把!')

  //  if X wins the game, reset all shit and remove classses
  $("#game li").text("7")
	$("#game li").removeClass('disable')
	$("#game li").removeClass('o')
	$("#game li").removeClass('x')
	$("#game li").removeClass('btn-primary')
	$("#game li").removeClass('btn-info')
  }

// if no one wins and the there's no cell to be clicked
  else if (count == 9)
  {

// it's tie, you will have to remove all classses and reset the game
	alert('刚刚平局了，我们再玩一局把.')
	$("#game li").text("7")
	$("#game li").removeClass('disable')
	$("#game li").removeClass('o')
	$("#game li").removeClass('x')
	$("#game li").removeClass('btn-primary')
	$("#game li").removeClass('btn-info')
	count = 0
  }

// if you click on a thing that you already clicked before
  else if ($(this).hasClass('disable'))
  {
    alert('已经选过了')
  }

  // if you click two cells in a row, count plus one and and set what ever you click to o
  else if (count%2 == 0)
  {
	  count++

    // I will add o to whichever cell that's being click and add o-image class, o class, disable class and btn-primary class
	  $(this).text(o)
    // $(this).addClass("o-image")
      $(this).addClass('disable o btn-primary')

        // this stupid code again checks to see if o wins the game
	    if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
	    {
	   alert('钻石赢了')

    //  alert o wins and reset the count for another round of game, update o_win value
	   count = 0
	   o_win++
    //  update o_win value to view
     $('#o_win').text(o_win)
        }
  }
   else

  //  for part is for x, add x text and add x class when it's x's turn
  {
	  count++
    $(this).text(x)
    // $(this).addClass("x-image")
    $(this).addClass('disable x btn-info')
	   if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
        {
	 alert('花儿赢了')
	 count = 0
	 x_win++
	 $('#x_win').text(x_win)
        }
  }

   });
    $("#reset").click(function () {
    $("#game li").text("7");
	$("#game li").removeClass('disable')
	$("#game li").removeClass('o')
	$("#game li").removeClass('x')
	$("#game li").removeClass('btn-primary')
	$("#game li").removeClass('btn-info')
	count = 0

  });
});
