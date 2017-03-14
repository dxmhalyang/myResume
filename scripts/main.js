$(function(){
	// 侧边导航栏效果
	$(".nav-right ul li").click(function(){
		$(this).children().addClass("selected").parent().siblings().children().removeClass("selected");
		var num=$(this).index();
		$(".nav-top-list ul li").eq(num).children().addClass("sel").parent().siblings().children().removeClass("sel");
		var index=$(".nav-right ul li").index(this);
		var height=$(".top").height();
		$(".content").animate({top:-height*index+"px"},"normal");
	});
	// 顶部导航栏效果
    $(".nav-top-list ul li").click(function(){
		 $(this).children().addClass("sel").parent().siblings().children().removeClass("sel");
		 var num=$(this).index();
		$(".nav-right ul li").eq(num).children().addClass("selected").parent().siblings().children().removeClass("selected");
		var index=$(".nav-top-list ul li").index(this);
		var height=$(".top").height();
		$(".content").animate({top:-height*index+"px"},"normal");
	});
    //个人技能效果
	$(".skill-list img,p").mouseover(function(){
		$(this).parent().find("span").addClass("select");
		$(this).parent().find(".skill-info").slideDown(700);
	}).mouseleave(function(){
		$(this).parent().find("span").removeClass("select");
		$(this).parent().find(".skill-info").stop(true,true).slideUp(700);
	});
	//二维码放大效果
	$(".wechat-ewm a").toggle(function(){
		$(this).addClass("big");
	},function(){
		$(this).removeClass("big");
	});

	// 项目展示
	var page=1;
	$(".right1 img").click(function(){ 
	var v_width=$(".project-content").width();
	var $conten =$(".project-list1");
	var pag=$(".project-list1 ul li").length;
	if(!$conten.is(":animated")){
	if(page==pag){
		$conten.animate({left:"0px"},"normal");
		page=1;
	}else{
		$conten.animate({left:"-="+v_width},"normal");
		page++;
	    }
	  }
	});
	
	$(".left1 img").click(function(){
		var v_width=$(".project-content").width();
	var $conten =$(".project-list1");
	var pag=$(".project-list1 ul li").length;
	if(!$conten.is(":animated")){
	if(page==1){
		$conten.animate({left:"-="+v_width*(pag-1)},"normal");
		page=pag;
	}else{
		$conten.animate({left:"+="+v_width},"normal");
		page--;
	   }
	  }
	});

	var page=1;
	$(".right2 img").click(function(){ 
	var v_width=$(".project-content").width();
	var $conten =$(".project-list2");
	var pag=$(".project-list2 ul li").length;
	if(!$conten.is(":animated")){
	if(page==pag){
		$conten.animate({left:"0px"},"normal");
		page=1;
	}else{
		$conten.animate({left:"-="+v_width},"normal");
		page++;
	    }
	  }
	});
	
	$(".left2 img").click(function(){
	var v_width=$(".project-content").width();
	var $conten =$(".project-list2");
	var pag=$(".project-list2 ul li").length;
	if(!$conten.is(":animated")){
	if(page==1){
		$conten.animate({left:"-="+v_width*(pag-1)},"normal");
		page=pag;
	}else{
		$conten.animate({left:"+="+v_width},"normal");
		page--;
	   }
	  }
	});
	
	
  
});	