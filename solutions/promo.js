// select the a element and change the color
$("[data-element-id='X_X_MainNav_Promo']").css(" padding-right", "25px");

//add the red circle
$("[data-element-id='X_X_MainNav_Promo']").parent().css("position", "relative");
$("[data-element-id='X_X_MainNav_Promo']").after(" <style> .spd-red-circle {position: absolute; background: #e91a00; width: 15px; height: 15px;  top: 19px;  left: 50px;  border-radius: 50%;  font-size: 10px;  font-weight: bolder;  color: white;  display: flex;  justify-content: center;  align-items: center;  line-height: 15px; </style> <span class='spd-red-circle'>4 </span> ");

//remove promo banner
$("#ctStripe").remove();
