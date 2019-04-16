var object=new DotsandBox();

function DotsandBox()
{
	this.dynamictable=dynamictable;
	this.showResult=showResult;
	this.removeElement=removeElement;
	this.lineClick=lineClick;
	this.popup=popup;
	this.winpopup1=winpopup1;
	this.winpopup2=winpopup2;
	this.drawpopup=drawpopup;
	this.hide=hide;
	this.restrictAlphabets=restrictAlphabets;
	
	
	function dynamictable()
	{	/*dynamic table creation start here*/
		
		var rows=$("#rowid").val();
	var columns=$("#columnid").val();
	var noofrows=parseInt(rows);
		var noofcolumns=parseInt(columns);
		var str="";
		for(var i=1;i<=(noofrows*2)+1;i++)
		{	
			str+="<div class='innerdiv'>";
			for(var j=1;j<=noofcolumns;j++)
			{
				if((i%2)!=0)
				{
					var id=i+"_"+j;
					str+="<div><input type='radio' class='radio' disabled></div><div class='line' id="+id+" onclick='object.lineClick(this.id);'></div></div>";
					if(j==noofcolumns)
					{
						str+="<input type='radio' class='radio' disabled>";
					}
					
				}
				else
				{	
					var id=i+"_"+j;
					var wid=id+i;
					str+="<div class='lineheight' id="+id+" onclick='object.lineClick(this.id);'></div><div class='blankwidth' id="+wid+" data-count='0'></div></div>";
					if(j==noofcolumns)	
					{
						var id=i+"_"+(parseInt(j)+1);
						str+="<div class='lineheight' id="+id+" onclick='object.lineClick(this.id);'></div>";
					}
				}
			}
			
			str+="<div class='cleargrid'></div>";
			str+="</div>";
		}
		/*dynamic table creation end here*/
		$("#dotgrid").append(str);
		$("#btnclick").hide();
		
	}
	var count=0;//count for users
	var score1=0;//player 1 score
	var score2=0;//player 2 score
	/*remove element*/
	function removeElement()
	{
		$("#dotgrid").empty();
		$(".header").empty();
		$("#btnclick").show();
		$("#rowid").val("");
		$("#columnid").val("");
		$("#p1").text("");
		$("#p2").text("");
		score1=0;
		score2=0;
	}
	var count=0;//count for users
	var score1=0;//player 1 score
	var score2=0;//player 2 score
	//var totalcount=0;
	
	function lineClick(id)
	{	
			//totalcount++;
			var rows=$("#rowid").val();
			var columns=$("#columnid").val();
			
			count++;//increment counter here for 1st count it will be red and for 2nd count color will be black
			var blackcolor="rgb(0, 0, 0)";//color black
			var redcolor="rgb(255, 0, 0)";//color red
			if(count%2==0)//checking counts for red and black
			{
				$("#"+id).css("background","rgb(0,0,0)");//count=2 for black
				$("#"+id).css("pointer-events","none");
				var res=id.split("_");//getting id and splitting for check
				var m=parseInt(res[0]);//id calculation start here
				var n=parseInt(res[1]);
				var topleftarea=(m-1)+"_"+n;
				var toparea=(m-2)+"_"+n;
				var toprightarea=(m-1)+"_"+(n+1);
				var bottomarea=(m+2)+"_"+n;
				var bottomleftarea=(m+1)+"_"+n;
				var bottomrightarea=(m+1)+"_"+(n+1);//id calculation end here
				//var bgbtmcolor=(m+1)+"_"+n;//bgbottom color
				//var bgtopcolor=(m-1)+"_"+n;//bgbottom color
				var divcolor = (m+1)+"_"+n+""+(m+1);
				/*top to bottom check condition*/
				//topcheck box
				if((m%2!=0) && ((($("#"+topleftarea).css("background-color")=="rgb(255, 0, 0)" || $("#"+topleftarea).css("background-color")=="rgb(0, 0, 0)")  && $("#"+topleftarea).css("background-color")!=undefined ) && ($("#"+topleftarea).css("background-color")==(redcolor) || $("#"+topleftarea).css("background-color")==(blackcolor)))
					&& ((($("#"+toparea).css("background-color")=="rgb(255, 0, 0)" || $("#"+toparea).css("background-color")=="rgb(0, 0, 0)") && $("#"+toparea).css("background-color")!=undefined ) && ($("#"+toparea).css("background-color")==(redcolor) || $("#"+toparea).css("background-color")==(blackcolor)))
					&& ((($("#"+toprightarea).css("background-color")=="rgb(255, 0, 0)" || $("#"+toprightarea).css("background-color")=="rgb(0, 0, 0)") && $("#"+toprightarea).css("background-color")!=undefined ) && ($("#"+toprightarea).css("background-color")==(redcolor) || $("#"+toprightarea).css("background-color")==(blackcolor))))
					{
						score2++;//player 2 score increment
						$("#p2").html("<br>"+score2);
						count=1;
					
					//counter set to 1 for same user chance
					}
				//bottomcheck box 
				if((m%2!=0) && ($("#"+bottomarea).css("background-color")==(redcolor) || $("#"+bottomarea).css("background-color")==(blackcolor))
					&& ($("#"+bottomrightarea).css("background-color")==(redcolor) || $("#"+bottomrightarea).css("background-color")==(blackcolor)) 
					&& ($("#"+bottomleftarea).css("background-color")==(redcolor) || $("#"+bottomleftarea).css("background-color")==(blackcolor)))
					{
						score2++;
						$("#p2").html("<br>"+score2);
						count=1;
						//alert($("#"+bottomarea).css("background-color"));
						alert($("#"+id).css("background-color"));
						
					}
					
				
				/*leftright check condition*/
				var topleftarea=(m-1)+"_"+(n-1);
				var left=(m)+"_"+(n-1);
				var bottomleftarea=(m+1)+"_"+(n-1);
				var toprightarea=(m-1)+"_"+n;
				var rightarea=(m)+"_"+(n+1);
				var bottomrightarea=(m+1)+"_"+(n);
				var divcolor1=(m)+"_"+n+""+(m);
				//when click rightside check
				if((m%2==0) && ($("#"+toprightarea).css("background-color")==(blackcolor) || $("#"+toprightarea).css("background-color")==(redcolor)) 
					&& ($("#"+rightarea).css("background-color")==(blackcolor) || $("#"+rightarea).css("background-color")==(redcolor)) 
					&& ($("#"+bottomrightarea).css("background-color")==(blackcolor) || $("#"+bottomrightarea).css("background-color")==(redcolor)))
					{
						score2++;
						$("#p2").html("<br>"+score2);
						count=1;
					}
				//when click left side check
				if((m%2==0) && ((($("#"+topleftarea).css("background-color")=="rgb(255, 0, 0)" || $("#"+topleftarea).css("background-color")=="rgb(0, 0, 0)") && $("#"+topleftarea).css("background-color")!=undefined ) && ($("#"+topleftarea).css("background-color")==(blackcolor) || $("#"+topleftarea).css("background-color")==(redcolor))) 
					&& ((($("#"+left).css("background-color")=="rgb(255, 0, 0)" || $("#"+left).css("background-color")=="rgb(0, 0, 0)") && $("#"+left).css("background-color")!=undefined ) && ($("#"+left).css("background-color")==(blackcolor) || $("#"+left).css("background-color")==(redcolor)))
					&& ((($("#"+bottomleftarea).css("background-color")=="rgb(255, 0, 0)" || $("#"+bottomleftarea).css("background-color")=="rgb(0, 0, 0)") && $("#"+bottomleftarea).css("background-color")!=undefined ) && ($("#"+bottomleftarea).css("background-color")==(blackcolor) || $("#"+bottomleftarea).css("background-color")==(redcolor))))
					{
						score2++;
						$("#p2").html("<br>"+score2);
						count=1;
						
					}
					if((score1+score2)==(parseInt(rows)*parseInt(columns)))				
						{
									if(score1>score2)
										object.winpopup1();
									else if(score1<score2)
										object.winpopup2();
									else
										object.drawpopup();
						}
			}
			
			else //counter=1 user 1 chance
			{
				$("#"+id).css("background","rgb(255,0,0)");
				$("#"+id).css("pointer-events","none");
				var res=id.split("_");//getting id and splitting for check
				var m=parseInt(res[0]);//id calculation start here
				var n=parseInt(res[1]);
				var topleftarea=(m-1)+"_"+n;
				var toparea=(m-2)+"_"+n;
				var toprightarea=(m-1)+"_"+(n+1);
				var bottomarea=(m+2)+"_"+n;
				var bottomleftarea=(m+1)+"_"+n;
				var bottomrightarea=(m+1)+"_"+(n+1);//id calculation end here
				var divcolor = (m+1)+"_"+n+""+(m+1);
				/*top to bottom check condition*/
				//topcheck box
				if((m%2!=0) && ((($("#"+topleftarea).css("background-color")=="rgb(255, 0, 0)" || $("#"+topleftarea).css("background-color")=="rgb(0, 0, 0)")  && $("#"+topleftarea).css("background-color")!=undefined ) && ($("#"+topleftarea).css("background-color")==(redcolor) || $("#"+topleftarea).css("background-color")==(blackcolor)))
					&& ((($("#"+toparea).css("background-color")=="rgb(255, 0, 0)" || $("#"+toparea).css("background-color")=="rgb(0, 0, 0)") && $("#"+toparea).css("background-color")!=undefined ) && ($("#"+toparea).css("background-color")==(redcolor) || $("#"+toparea).css("background-color")==(blackcolor)))
					&& ((($("#"+toprightarea).css("background-color")=="rgb(255, 0, 0)" || $("#"+toprightarea).css("background-color")=="rgb(0, 0, 0)") && $("#"+toprightarea).css("background-color")!=undefined ) && ($("#"+toprightarea).css("background-color")==(redcolor) || $("#"+toprightarea).css("background-color")==(blackcolor))))
					{
						
						score1++;//player 2 score increment
						$("#p1").html("<br>"+score1);
						count=0;//counter set to 1 for same user chance
					
					}
				//bottomcheck box 
				if((m%2!=0) && ($("#"+bottomarea).css("background-color")==(redcolor) || $("#"+bottomarea).css("background-color")==(blackcolor))
					&& ($("#"+bottomrightarea).css("background-color")==(redcolor) || $("#"+bottomrightarea).css("background-color")==(blackcolor)) 
					&& ($("#"+bottomleftarea).css("background-color")==(redcolor) || $("#"+bottomleftarea).css("background-color")==(blackcolor)))
					{
						score1++;//player 2 score increment
						$("#p1").html("<br>"+score1);
						count=0;
					
					}
					
				
				/*leftright check condition*/
				var topleftarea=(m-1)+"_"+(n-1);
				var left=(m)+"_"+(n-1);
				var bottomleftarea=(m+1)+"_"+(n-1);
				var toprightarea=(m-1)+"_"+n;
				var rightarea=(m)+"_"+(n+1);
				var bottomrightarea=(m+1)+"_"+(n);
				var divcolor1=(m)+"_"+n+""+(m);
				//when click rightside check
				if((m%2==0) && ($("#"+toprightarea).css("background-color")==(blackcolor) || $("#"+toprightarea).css("background-color")==(redcolor)) 
					&& ($("#"+rightarea).css("background-color")==(blackcolor) || $("#"+rightarea).css("background-color")==(redcolor)) 
					&& ($("#"+bottomrightarea).css("background-color")==(blackcolor) || $("#"+bottomrightarea).css("background-color")==(redcolor)))
					{
						score1++;//player 2 score increment
						$("#p1").html("<br>"+score1);
						count=0;//counter set to 1 for same user chance
						
						
					}
				//when click left side check
				if((m%2==0) && ((($("#"+topleftarea).css("background-color")=="rgb(255, 0, 0)" || $("#"+topleftarea).css("background-color")=="rgb(0, 0, 0)") && $("#"+topleftarea).css("background-color")!=undefined ) && ($("#"+topleftarea).css("background-color")==(blackcolor) || $("#"+topleftarea).css("background-color")==(redcolor))) 
					&& ((($("#"+left).css("background-color")=="rgb(255, 0, 0)" || $("#"+left).css("background-color")=="rgb(0, 0, 0)") && $("#"+left).css("background-color")!=undefined ) && ($("#"+left).css("background-color")==(blackcolor) || $("#"+left).css("background-color")==(redcolor)))
					&& ((($("#"+bottomleftarea).css("background-color")=="rgb(255, 0, 0)" || $("#"+bottomleftarea).css("background-color")=="rgb(0, 0, 0)") && $("#"+bottomleftarea).css("background-color")!=undefined ) && ($("#"+bottomleftarea).css("background-color")==(blackcolor) || $("#"+bottomleftarea).css("background-color")==(redcolor))))
					{
						score1++;//player 2 score increment
						$("#p1").html("<br>"+score1);
						count=0;//counter set to 1 for same user chance
						s
					}
							if((score1+score2)==(parseInt(rows)*parseInt(columns)))				
						{
									if(score1>score2)
								object.winpopup1();
										else if(score1<score2)
								object.winpopup2();
										else
								object.drawpopup();
						}

			}
	}
	/*popup hide*/
	function hide()
	{
		$(".blur").css("display","none");
		$(".popup").css("display","none");
		$(".winpopup1").css("display","none");
		$(".winpopup2").css("display","none");
		$(".drawpopup").css("display","none");
	}
	//popup show
	function popup()
	{
		$(".blur").css("display","block");
		$(".popup").css("display","block");
	}
	function winpopup1()
	{
		$(".blur").css("display","block");
		$(".winpopup1").css("display","block");
		setTimeout(function(){object.hide(); }, 4000);

	}function winpopup2()
	{
		$(".blur").css("display","block");
		$(".winpopup2").css("display","block");
		setTimeout(function(){object.hide(); }, 4000);
	}function drawpopup()
	{
		$(".blur").css("display","block");
		$(".drawpopup").css("display","block");
		setTimeout(function(){object.hide(); }, 4000);
	}
	//to restrict alphabets
	function restrictAlphabets(e)
	{
		var x=e.which||e.keycode;
		if((x>49 && x<=56) || x==8 ||
			(x>=35 && x<=40) || x==47)
			return true;
		else
			return false;
	}
	//final show result where all function pewrform events
	function showResult()
	{
		$("#btnclick").click(dynamictable);
		$("#resetgame").click(removeElement);
		$("#ancid").click(popup);
		$(".blur").click(hide);
		$(".js-close-modal").click(hide);
		$("#rowid").keypress(restrictAlphabets);
		$("#columnid").keypress(restrictAlphabets);
	}

}

$(document).ready(function()
{	
	//all events call here
	object.showResult();
});
