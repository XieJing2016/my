/**
 * Created by lenovo on 2016/8/8.
 */
;$(function () {
    var sidebar=$('#sidebar'),
    	mask=$('.mask'),
		sidebar_trigger=$('#sidebar_trigger');
    

	function showSidebar() {
   
		mask.fadeIn();
		sidebar.css('right',0);
    

	}

	function hideSidebar(){
    
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
    
	}

    sidebar_trigger.on('click',showSidebar);
    mask.on('click',hideSidebar);

   	var backButton=$('.back-to-top');
   	backButton.on('click',function(){
   		$('html,body').animate({
   			scrollTop:0
   		},800);
   	})

   	$(window).on('scroll',function(){
   		if ($(window).scrollTop()>$(window).height()) {
   			backButton.fadeIn();
   		}else{
   			backButton.fadeOut();
   		}
   	})






$(window).on('scroll',function(){
  //console.log(flag);

      /*if ($(window).scrollTop()<10) {
        sidebar.show();
        mask.show();
      }else{
       */
       // if(flag==1){
       //  sidebar.hide();
       //  mask.hide();
        
       // }

       mask.trigger('click');




        
      /*}*/
    });

    










   	$(window).trigger('scroll');

});