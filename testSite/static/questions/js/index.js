// var currentTab = 0;
// var errors = 0;
// showTab(currentTab);

// // let vin = /^[A-HJ-NPR-Za-hj-npr-z\d]{8}[\dX][A-HJ-NPR-Za-hj-npr-z\d]{2}\d{6}$/;
// let vin = new RegExp("^[A-HJ-NPR-Z0-9\\d]{13}\\d{4}$","i");


// var imagesInput = document.getElementById('images')
// var fileCount = 0
// var fileBufferArr = [];
// var fileBuffer = {};
// var fileBufferArrEnd = [];

// function validate(regex, inp) {
//     return regex.test(inp);
// };

// function emptyCheck(inp, inputValue, el) {
//     if (inputValue == '') {
//         el.html("Это поле должно быть заполнено");
//         inp.addClass('is-invalid');
//         inp.removeClass('is-valid');
//         return true;
//     }else{
//         el.html("");
//         inp.removeClass('is-invalid');
//         inp.addClass('is-valid');
//         return false;
//     };
// };

// function showTab(n) {
//     var x = document.getElementsByClassName("tab");
//     x[n].style.display = "block";
//     if (n == 0) {
//     x[n+1].style.display = "none";
//     x[n+2].style.display = "none";
//     document.getElementById("prevBtn").style.display = "none";
//     } else {
//     document.getElementById("prevBtn").style.display = "inline";
//     }
//     if (n == (x.length - 1)) {
//         document.getElementById("nextBtn").innerHTML = "Подтвердить";
//     } else {
//     document.getElementById("nextBtn").innerHTML = "Далее";
//     }
//     fixStepIndicator(n)
// }

// function nextPrev(n) {
//     var x = document.getElementsByClassName("tab");
//     if (n == 1 && !validateForm()) return false;
//     x[currentTab].style.display = "none";
//     currentTab = currentTab + n;
//     if (currentTab == 1){
//         secondPageValidate()
//     }else if (currentTab == 2){
//         thirdPageValidate()
//     }
//     if (currentTab >= x.length) {
//         // if (fileBufferArr.length == 0){
//         //     console.log("yeah")
//         //     $("#nextBtn").attr("data-bs-toggle", "modal")
//         //     $("#nextBtn").attr("data-bs-target", "no-img-modal")
//         // }

//         if ($('#category').val() == "passanger"){
//             $("#options").val($("#options-select").val().join(' '))
//         }

//         for (const [key, value] of Object.entries(fileBuffer)) {
//             fileBufferArrEnd.push(value)
//         }

//         let list = new DataTransfer();
//         let file;
//         for (let i = 0; i < fileBufferArrEnd.length; i++) {
//             file = new File([fileBufferArrEnd[i]], fileBufferArrEnd[i].name);
//             list.items.add(file);
//         }

//         let endImageList = list.files;
//         imagesInput.files = endImageList
//         document.getElementById("addForm").submit();
//         var i = 0;
//         var loader = `<div class="preloader">
//         <div class="preloader__image"></div>
//         <figure class="text-center">
//         <blockquote class="blockquote">
//           <p>Просим подождать, в настоящее время искусственный интеллект проверяет объявление.</p>
//         </blockquote>
//         <figcaption class="blockquote-footer">
//         <p><small class="text-muted"><cite title="Source Title">Еще пару секунд и Ваше объявление загрузится ... =)</cite></small></p>
//         </figcaption>
//       </figure>
//             <div class="progress container">
//             <div id="myBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
//             </div>
//         </div>`;


//         $('#destination').html(loader);
//         if (i == 0) {
//             i = 1;
//             var elem = document.getElementById("myBar");
//             var width = 10;
//             var id = setInterval(frame, (imagesInput.files.length * 2 * 10));
//             function frame() {
//               if (width >= 100) {
//                 clearInterval(id);
//                 i = 0;
//               } else {
//                 width++;
//                 elem.style.width = width + "%";
//                 elem.innerHTML = width + "%";
//               }
//             }
//           }
//         return false;
//     }
//     showTab(currentTab);
// }

// $("#price").change(function() {
//     if($("#is_contract").is(':checked')){
//     }else{
//         if (emptyCheck($("#price"), $("#price").val(), $("#price"+"_span"))) {
//         }
//         if($.isNumeric($("#price").val())){
//             if($("#price").val() > 0 && $("#price").val()%1==0){
//                 $("#price").addClass('is-valid');
//                 $("#price").removeClass('is-invalid');
//             }else{
//                 $("#price"+"_span").html("Неправильное значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }
//             if ($('#price_unit').val() == "rub" && $('#price').val() > 100000000) {
//                 $("#price"+"_span").html("Слишком большое значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }else if ($('#price_unit').val() == "amd" && $('#price').val() > 700000000) {
//                 $("#price"+"_span").html("Слишком большое значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }else if ($('#price_unit').val() == "usd" && $('#price').val() > 1500000) {
//                 $("#price"+"_span").html("Слишком большое значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }else if ($('#price_unit').val() == "eur" && $('#price').val() > 1300000) {
//                 $("#price"+"_span").html("Слишком большое значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }
//         }else{
//             $("#price"+"_span").html("Можно вводить только цифры") 
//         }
//     }
// });

// //mileage check
// $("#mileage").change(function() {
//     if (emptyCheck($("#mileage"), $("#mileage").val(), $("#mileage"+"_span"))) {
//     }
//     if($.isNumeric($("#mileage").val())){
//         if($("#mileage").val() >= 0 && $("#mileage").val()%1==0){
//             $("#mileage").addClass('is-valid');
//             $("#mileage").removeClass('is-invalid');
//         }else{
//             $("#mileage"+"_span").html("Неправильное значение")
//             $("#mileage").removeClass('is-valid');
//             $("#mileage").addClass('is-invalid');
//         }
//         if ($('#mileage_unit').val() == "km" && $("#mileage").val() > 1000000) {
//             $("#mileage"+"_span").html("Слишком большое значение")
//             $("#mileage").removeClass('is-valid');
//             $("#mileage").addClass('is-invalid');
//         }else if ($('#mileage_unit').val() == "mi" && $("#mileage").val() > 650000) {
//             $("#mileage"+"_span").html("Слишком большое значение")
//             $("#mileage").removeClass('is-valid');
//             $("#mileage").addClass('is-invalid');
//         }
//     }else{
//         $("#mileage"+"_span").html("Неправильное значение")
//     }
// });

// $("#category").change(function() {
//     emptyCheck($("#category"), $("#category").val(), $("#category"+"_span"))
// });

// $("#brand").change(function() {
//     emptyCheck($("#brand"), $("#brand").val(), $("#brand"+"_span"))
// });

// $("#model").change(function() {
//     emptyCheck($("#model"), $("#model").val(), $("#model"+"_span"))
// });

// $("#brand_input").change(function() {
//     if ($("#brand_input").val() != ""){
//         if (/\d/.test($("#brand_input").val()) || $("#brand_input").val().length > 35 || $("#brand_input").val().length < 2){
//             $('#brand_input_span').html("Неправильное значение");
//             $("#brand_input").addClass('is-invalid');
//             $("#brand_input").removeClass('is-valid');
//         }else{
//             $('#brand_input_span').html("");
//             $("#brand_input").addClass('is-valid');
//             $("#brand_input").removeClass('is-invalid');
//         }
//     }else{
//         $('#brand_input_span').html("");
//         $("#brand_input").removeClass('is-invalid');
//     }
// });

// $("#model_input").change(function() {
//     if ($("#model_input").val() != ""){
//         if ($("#model_input").val().length > 35 || $("#model_input").val().length < 2){
//             $('#model_input_span').html("Неправильное значение");
//             $("#model_input").addClass('is-invalid');
//             $("#model_input").removeClass('is-valid');
//         }else{
//             $('#model_input_span').html("");
//             $("#model_input").addClass('is-valid');
//             $("#model_input").removeClass('is-invalid');
//         }
//     }else{
//         $("#model_input").addClass('is-valid');
//         $("#model_input").removeClass('is-invalid');
//     }
// });

// $("#year").change(function() {
//     emptyCheck($("#year"), $("#year").val(), $("#year"+"_span"))
// });

// $("#type").change(function() {
//     emptyCheck($("#type"), $("#type").val(), $("#type"+"_span"))
// });


// $("#video_url").change(function() {
//     if ($("#video_url").val() != ""){
//         if ($("#video_url").val().indexOf("https://www.youtube.com/") >= 0 || $("#video_url").val().indexOf("https://youtu.be/") >= 0){
//             $('#video_url_span').html("");
//             $("#video_url").removeClass('is-invalid');
//             $("#video_url").addClass('is-valid');
//         }else{
//             $('#video_url_span').html("Недействительная ссылка");
//             $("#video_url").addClass('is-invalid');
//             $("#video_url").removeClass('is-valid');
//         }
//     }else{
//         $("#video_url").removeClass('is-invalid');
//         $('#video_url_span').html("");
//     }
// });

// //tab2
// function secondPageValidate(){
// $("#country").change(function() {
//     emptyCheck($("#country"), $("#country").val(), $("#country"+"_span"))
// });

// $("#load_capacity").change(function() {
//     let max_load_capacity = 0
//     if ($('#category').val() == "truck")
//         max_load_capacity = 700000
//     else if ($('#category').val() == "trailer")
//         max_load_capacity = 1200000
//     else if ($('#category').val() == "lcom")
//         max_load_capacity = 3000
    
//     if ($('#category').val() == "lcom"){
//         if ($('#load_capacity').val() != "") {
//             if($.isNumeric($("#load_capacity").val())){
//                 if($("#load_capacity").val() >= 0 && $("#load_capacity").val()%1==0 && $("#load_capacity").val() <= max_load_capacity){
//                     $("#load_capacity_span").html("")
//                     $("#load_capacity").removeClass('is-invalid');
//                 }else{
//                     $("#load_capacity_span").html("Неправильное значение")
//                     $("#load_capacity").addClass('is-invalid');
//                 }
//             }else{
//                 $("#load_capacity_span").html("Неправильное значение")
//             }
//         }else{
//             $("#load_capacity").removeClass('is-invalid');
//             $("#load_capacity_span").html("")
//         }
//     }else{
//         if (emptyCheck($("#load_capacity"), $("#load_capacity").val(), $("#load_capacity_span"))) {
//         }
//         if($.isNumeric($("#load_capacity").val())){
//             if($("#load_capacity").val() >= 0 && $("#load_capacity").val()%1==0 && $("#load_capacity").val() <= max_load_capacity){
//                 $("#load_capacity").addClass('is-valid');
//                 $("#load_capacity").removeClass('is-invalid');
//             }else{
//                 $("#load_capacity_span").html("Неправильное значение")
//                 $("#load_capacity").removeClass('is-valid');
//                 $("#load_capacity").addClass('is-invalid');
//             }
//         }else{
//             $("#load_capacity_span").html("Неправильное значение")
//         }
//     }
// });

// $("#body_style").change(function() {
//     emptyCheck($("#body_style"), $("#body_style").val(), $("#body_style"+"_span"))
// });

// $("#color").change(function() {
//     emptyCheck($("#color"), $("#color").val(), $("#color"+"_span"))
// });

// $("#state").change(function() {
//     emptyCheck($("#state"), $("#state").val(), $("#state"+"_span"))
// });

// $("#fuel_type").change(function() {
//     emptyCheck($("#fuel_type"), $("#fuel_type").val(), $("#fuel_type"+"_span"))
// });

// $("#gearbox").change(function() {
//     emptyCheck($("#gearbox"), $("#gearbox").val(), $("#gearbox"+"_span"))
// });

// $("#st_wheel").change(function() {
//     emptyCheck($("#st_wheel"), $("#st_wheel").val(), $("#st_wheel"+"_span"))
// });

// $("#formula").change(function() {
//     emptyCheck($("#formula"), $("#formula").val(), $("#formula"+"_span"))
// });

// $("#tact").change(function() {
//     emptyCheck($("#tact"), $("#tact").val(), $("#tact_span"))
// });

// $("#drive").change(function() {
//     emptyCheck($("#drive"), $("#drive").val(), $("#drive_span"))
// });

// $("#cylinder_type").change(function() {
//     emptyCheck($("#cylinder_type"), $("#cylinder_type").val(), $("#cylinder_type_span"))
// });

// $("#engine").change(function() {
//     emptyCheck($("#engine"), $("#engine").val(), $("#engine"+"_span"))
// });

// $("#moto_hour").change(function() {
//     if ($("#moto_hour").val() != ""){
//         if($.isNumeric($("#moto_hour").val())){
//             if($("#moto_hour").val() > 0 && $("#moto_hour").val()%1==0 && $("#moto_hour").val() <= 100000){
//                 $("#moto_hour_span").html("")
//                 $("#moto_hour").removeClass('is-invalid');
//             }else{
//                 $("#moto_hour_span").html("Неправильное значение")
//                 $("#moto_hour").addClass('is-invalid');
//             }
//         }else{
//             $("#moto_hour_span").html("Неправильное значение")
//         }
//     }else{
//         $("#moto_hour_span").html("");
//         $("#moto_hour").removeClass('is-invalid');
//     }
// });

// $("#axes_count").change(function() {
//     if ($("#axes_count").val() != ""){
//         if($.isNumeric($("#axes_count").val())){
//             if($("#axes_count").val() > 0 && $("#axes_count").val()%1==0 && $("#axes_count").val() <= 20){
//                 $("#axes_count_span").html("")
//                 $("#axes_count").removeClass('is-invalid');
//             }else{
//                 $("#axes_count_span").html("Неправильное значение")
//                 $("#axes_count").addClass('is-invalid');
//             }
//         }else{
//             $("#axes_count_span").html("Неправильное значение")
//         }
//     }else{
//         $("#axes_count_span").html("");
//         $("#axes_count").removeClass('is-invalid');
//     }
// });

// $("#horsepower").change(function() {
//     if ($("#horsepower").val() != ""){
//         if($.isNumeric($("#horsepower").val())){
//             if($("#horsepower").val() > 0 && $("#horsepower").val()%1==0 && $("#horsepower").val() <= 10000){
//                 $("#horsepower_span").html("")
//                 $("#horsepower").removeClass('is-invalid');
//             }else{
//                 $("#horsepower_span").html("Неправильное значение")
//                 $("#horsepower").addClass('is-invalid');
//             }
//         }else{
//             $("#horsepower_span").html("Неправильное значение")
//         }
//     }else{
//         $("#horsepower_span").html("");
//         $("#horsepower").removeClass('is-invalid');
//     }
// });



// $("#capacity").change(function() {
//     if (emptyCheck($("#capacity"), $("#capacity").val(), $("#capacity_span"))) {
//     }
//     if($.isNumeric($("#capacity").val())){
//         let max_capacity = 0
//         if ($('#category').val() == "truck")
//             max_capacity = 450000
//         else if ($('#category').val() == "moto")
//             max_capacity = 10000
//         else if ($('#category').val() == "bus")
//             max_capacity = 300000
//         else if ($('#category').val() == "spec" || $('#category').val() == "lcom")
//             max_capacity = 100000

//         if($("#capacity").val() > 0 && $("#capacity").val()%1==0 && $("#capacity").val() <= max_capacity){
//             $("#capacity").addClass('is-valid');
//             $("#capacity").removeClass('is-invalid');
//         }else{
//             $("#capacity_span").html("Неправильное значение")
//             $("#capacity").removeClass('is-valid');
//             $("#capacity").addClass('is-invalid');
//         }
//     }else{
//         $("#capacity_span").html("Неправильное значение")
//     }
// });

// $("#seat_count").change(function() {
//     let max_seat_count = 0
//     if ($('#category').val() == "bus")
//         max_seat_count = 200
//     else if ($('#category').val() == "lcom")
//         max_seat_count = 32

//     if ($("#seat_count").val()){
//         if($.isNumeric($("#seat_count").val())){
//             if($("#seat_count").val() > 0 && $("#seat_count").val()%1==0 && $("#seat_count").val() <= max_seat_count){
//                 $("#seat_count_span").html("")
//                 $("#seat_count").addClass('is-valid');
//                 $("#seat_count").removeClass('is-invalid');
//             }else{
//                 $("#seat_count_span").html("Неправильное значение")
//                 $("#seat_count").removeClass('is-valid');
//                 $("#seat_count").addClass('is-invalid');
//             }
//         }else{
//             $("#seat_count_span").html("Неправильное значение")
//         }
//     }
// });

// $("#moto_drive").change(function() {
//     emptyCheck($("#moto_drive"), $("#moto_drive").val(), $("#moto_drive_span"))
// });
// }

// function thirdPageValidate(){
// $("#vin").change(function() {
//     if (!validate(vin, $("#vin").val())){
//         // $('.vin-show').hide("slow");
//         $("#vin"+"_span").html("Такого VIN номера не существует")
//         $("#vin").removeClass('is-valid');
//         $("#vin").addClass('is-invalid');
//     }else{
//         // $('.vin-show').show("slow");
//         $("#vin"+"_span").html("")
//         $("#vin").addClass('is-valid');
//         $("#vin").removeClass('is-invalid');
//     }
// });

// $("#additional").on('propertychange input', function (e) {
//     $('#symbol_count').html($("#additional").val().length+'/1024')
//     if ($("#additional").val().length >= 1024){
//         $('#symbol_count').addClass('text-danger')
//     }else{
//         $('#additional_span').html('')
//         $('#symbol_count').removeClass('text-danger')
//     }
// });
// }

// function validateForm() {
//     errors = 0
//     var x, y, i = true;
//     x = document.getElementsByClassName("tab");
//     y = x[currentTab].getElementsByClassName("inp-div");
//     if (errors == 0) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//     }
//     if (emptyCheck($("#category"), $("#category").val(), $("#category"+"_span"))) {
//         errors += 1
//     }
//     if ($('#category').val() != "spec" && $('#category').val() != "trailer"){
//         if (emptyCheck($("#brand"), $("#brand").val(), $("#brand"+"_span"))) {
//             errors += 1
//         }
//         if (emptyCheck($("#model"), $("#model").val(), $("#model"+"_span"))) {
//             errors += 1
//         }
//     }

//     if ($("#video_url").val() != ""){
//         if ($("#video_url").val().indexOf("https://www.youtube.com/") >= 0 || $("#video_url").val().indexOf("https://youtu.be/") >= 0){
//             $('#video_url_span').html("");
//             $("#video_url").removeClass('is-invalid');
//             $("#video_url").addClass('is-valid');
//         }else{
//             errors += 1
//             $('#video_url_span').html("Недействительная ссылка");
//             $("#video_url").addClass('is-invalid');
//             $("#video_url").removeClass('is-valid');
//         }
//     }else{
//         $("#video_url").removeClass('is-invalid');
//         $('#video_url_span').html("");
//     }

//     if ($('#category').val() == "spec" || $('#category').val() == "trailer"){
//         if ($("#brand_input").val() != ""){
//             if (/\d/.test($("#brand_input").val()) || $("#brand_input").val().length > 35 || $("#brand_input").val().length < 2){
//                 errors += 1
//                 $('#brand_input_span').html("Неправильное значение");
//                 $("#brand_input").addClass('is-invalid');
//                 $("#brand_input").removeClass('is-valid');
//             }else{
//                 $('#brand_input_span').html("");
//                 $("#brand_input").addClass('is-valid');
//                 $("#brand_input").removeClass('is-invalid');
//             }
//         }

//         if ($("#model_input").val() != ""){
//             if ($("#model_input").val().length > 35 || $("#model_input").val().length < 2){
//                 errors += 1
//                 $('#model_input_span').html("Неправильное значение");
//                 $("#model_input").addClass('is-invalid');
//                 $("#model_input").removeClass('is-valid');
//             }else{
//                 $('#model_input_span').html("");
//                 $("#model_input").addClass('is-valid');
//                 $("#model_input").removeClass('is-invalid');
//             }
//         }   
//     }
//     if (emptyCheck($("#year"), $("#year").val(), $("#year"+"_span"))) {
//         errors += 1
//     }

//     if($("#is_contract").is(':checked')){
//     }else{
//         if (emptyCheck($("#price"), $("#price").val(), $("#price"+"_span"))) {
//             errors += 1
//         }
//         if($.isNumeric($("#price").val())){
//             if($("#price").val() > 0 && $("#price").val()%1==0){
//                 $("#price").addClass('is-valid');
//                 $("#price").removeClass('is-invalid');
//             }else{
//                 errors += 1
//                 $("#price"+"_span").html("Неправильное значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }
//             if ($('#price_unit').val() == "rub" && $('#price').val() > 100000000) {
//                 errors += 1
//                 $("#price"+"_span").html("Слишком большое значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }else if ($('#price_unit').val() == "amd" && $('#price').val() > 700000000) {
//                 errors += 1
//                 $("#price"+"_span").html("Слишком большое значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }else if ($('#price_unit').val() == "usd" && $('#price').val() > 1500000) {
//                 errors += 1
//                 $("#price"+"_span").html("Слишком большое значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }else if ($('#price_unit').val() == "eur" && $('#price').val() > 1300000) {
//                 errors += 1
//                 $("#price"+"_span").html("Слишком большое значение")
//                 $("#price").removeClass('is-valid');
//                 $("#price").addClass('is-invalid');
//             }
//         }else{
//             errors += 1
//             $("#price+"+"_span").html("Можно вводить только цифры") 
//         }
//     }

//     if (emptyCheck($("#mileage"), $("#mileage").val(), $("#mileage"+"_span"))) {
//         errors += 1
//     }
//     if($.isNumeric($("#mileage").val())){
//         if($("#mileage").val() >= 0 && $("#mileage").val()%1==0){
//             $("#mileage").addClass('is-valid');
//             $("#mileage").removeClass('is-invalid');
//         }else{
//             errors += 1
//             $("#mileage"+"_span").html("Неправильное значение")
//             $("#mileage").removeClass('is-valid');
//             $("#mileage").addClass('is-invalid');
//         }
//         if ($('#mileage_unit').val() == "km" && $("#mileage").val() > 1000000) {
//             errors += 1
//             $("#mileage"+"_span").html("Слишком большое значение")
//             $("#mileage").removeClass('is-valid');
//             $("#mileage").addClass('is-invalid');
//         }else if ($('#mileage_unit').val() == "mi" && $("#mileage").val() > 650000) {
//             errors += 1
//             $("#mileage"+"_span").html("Слишком большое значение")
//             $("#mileage").removeClass('is-valid');
//             $("#mileage").addClass('is-invalid');
//         }
//     }else{
//         errors += 1
//         $("#mileage"+"_span").html("Неправильное значение")
//     }
//     $("#is_contract").click(function() {
//         if($("#is_contract").is(':checked')){
//         }else{
//             if (emptyCheck($("#price"), $("#price").val(), $("#price"+"_span"))) {
//                 errors += 1
//             }
//         }
//     });

//     if ($('#category').val() == "spec" || $('#category').val() == "trailer" || $('#category').val() == "moto" || $('#category').val() == "bus"){
//         if (emptyCheck($("#type"), $("#type").val(), $("#type_span"))) {
//             errors += 1
//         }
//     }

//     if(fileCount > 15){
//         errors += 1
//     }

//     //tab 2
//     if(currentTab == 1){
//         if (emptyCheck($("#country"), $("#country").val(), $("#country"+"_span"))) {
//             errors += 1
//         }
//         if (window.location.href.indexOf("car_re-add") >= 0){
//             if (emptyCheck($("#additional"), $("#additional").val(), $("#additional"+"_span"))) {
//                 errors += 1
//             }
//         }
//         if (emptyCheck($("#color"), $("#color").val(), $("#color"+"_span"))) {
//             errors += 1
//         }
//         if (emptyCheck($("#state"), $("#state").val(), $("#state"+"_span"))) {
//             errors += 1
//         }
//         if ($("#horsepower").val() != ""){
//             if($.isNumeric($("#horsepower").val())){
//                 if($("#horsepower").val() > 0 && $("#horsepower").val()%1==0 && $("#horsepower").val() <= 10000){
//                     $("#horsepower_span").html("")
//                     $("#horsepower").removeClass('is-invalid');
//                 }else{
//                     errors += 1
//                     $("#horsepower_span").html("Неправильное значение")
//                     $("#horsepower").addClass('is-invalid');
//                 }
//             }else{
//                 errors += 1
//                 $("#horsepower_span").html("Неправильное значение")
//             }
//         }else{
//             $("#horsepower_span").html("");
//             $("#horsepower").removeClass('is-invalid');
//         }
//         if ($('#category').val() != "trailer" && $('#category').val() != "spec"){
//             if (emptyCheck($("#fuel_type"), $("#fuel_type").val(), $("#fuel_type"+"_span"))) {
//                 errors += 1
//             }

//             if (emptyCheck($("#gearbox"), $("#gearbox").val(), $("#gearbox"+"_span"))) {
//                 errors += 1
//             }
//         }
//         if ($('#category').val() == "passanger" || $('#category').val() == "lcom"){
//             if (emptyCheck($("#st_wheel"), $("#st_wheel").val(), $("#st_wheel"+"_span"))) {
//                 errors += 1
//             }
//             if (emptyCheck($("#body_style"), $("#body_style").val(), $("#body_style"+"_span"))) {
//                 errors += 1
//             }
//             if (emptyCheck($("#drive"), $("#drive").val(), $("#drive"+"_span"))) {
//                 errors += 1
//             }
//         }
//         if ($('#category').val() == "bus"){
//             if (emptyCheck($("#st_wheel"), $("#st_wheel").val(), $("#st_wheel"+"_span"))) {
//                 errors += 1
//             }
//         }
//         if ($('#category').val() == "passanger"){
//             if (emptyCheck($("#engine"), $("#engine").val(), $("#engine"+"_span"))) {
//                 errors += 1
//             }
//         }
        
//         //moto
//         if ($('#category').val() == "moto"){
//             if (emptyCheck($("#tact"), $("#tact").val(), $("#tact_span"))) {
//                 errors += 1
//             }
//             if ($('#type').val() != "scooter"){
//                 if (emptyCheck($("#cylinder_type"), $("#cylinder_type").val(), $("#cylinder_type_span"))) {
//                     errors += 1
//                 }
//             }
//             if (emptyCheck($("#capacity"), $("#capacity").val(), $("#capacity_span"))) {
//                 errors += 1
//             }
//             if($.isNumeric($("#capacity").val())){
//                 if($("#capacity").val() >= 0 && $("#capacity").val()%1==0 && $("#capacity").val() <= 10000){
//                     $("#capacity").addClass('is-valid');
//                     $("#capacity").removeClass('is-invalid');
//                 }else{
//                     errors += 1
//                     $("#capacity_span").html("Неправильное значение")
//                     $("#capacity").removeClass('is-valid');
//                     $("#capacity").addClass('is-invalid');
//                 }
//             }else{
//                 errors += 1
//                 $("#capacity_span").html("Неправильное значение")
//             }
//             if (emptyCheck($("#moto_drive"), $("#moto_drive").val(), $("#moto_drive_span"))) {
//                 errors += 1
//             }
//         }

//         //truck
//         if ($('#category').val() == "truck"){
//             if (emptyCheck($("#load_capacity"), $("#load_capacity").val(), $("#load_capacity_span"))) {
//                 errors += 1
//             }
//             if (emptyCheck($("#formula"), $("#formula").val(), $("#formula_span"))) {
//                 errors += 1
//             }
//             if($.isNumeric($("#load_capacity").val())){
//                 if($("#load_capacity").val() >= 0 && $("#load_capacity").val()%1==0 && $("#load_capacity").val() <= 700000){
//                     $("#load_capacity").addClass('is-valid');
//                     $("#load_capacity").removeClass('is-invalid');
//                 }else{
//                     errors += 1
//                     $("#load_capacity_span").html("Неправильное значение")
//                     $("#load_capacity").removeClass('is-valid');
//                     $("#load_capacity").addClass('is-invalid');
//                 }
//             }else{
//                 errors += 1
//                 $("#load_capacity_span").html("Неправильное значение")
//             }

//             if (emptyCheck($("#capacity"), $("#capacity").val(), $("#capacity_span"))) {
//                 errors += 1
//             }
//             if($.isNumeric($("#capacity").val())){
//                 if($("#capacity").val() > 0 && $("#capacity").val()%1==0 && $("#capacity").val() <= 450000){
//                     $("#capacity").addClass('is-valid');
//                     $("#capacity").removeClass('is-invalid');
//                 }else{
//                     errors += 1
//                     $("#capacity_span").html("Неправильное значение")
//                     $("#capacity").removeClass('is-valid');
//                     $("#capacity").addClass('is-invalid');
//                 }
//             }else{
//                 errors += 1
//                 $("#capacity_span").html("Неправильное значение")
//             }
//         }

//         //bus
//         if ($('#category').val() == "bus"){
//             if (emptyCheck($("#formula"), $("#formula").val(), $("#formula_span"))) {
//                 errors += 1
//             }
//             if (emptyCheck($("#capacity"), $("#capacity").val(), $("#capacity_span"))) {
//                 errors += 1
//             }
//             if($.isNumeric($("#capacity").val())){
//                 if($("#capacity").val() > 0 && $("#capacity").val()%1==0 && $("#capacity").val() <= 300000){
//                     $("#capacity").addClass('is-valid');
//                     $("#capacity").removeClass('is-invalid');
//                 }else{
//                     errors += 1
//                     $("#capacity_span").html("Неправильное значение")
//                     $("#capacity").removeClass('is-valid');
//                     $("#capacity").addClass('is-invalid');
//                 }
//             }else{
//                 errors += 1
//                 $("#capacity_span").html("Неправильное значение")
//             }
//         }

//         // trailer
//         if ($('#category').val() == "trailer"){
//             if($.isNumeric($("#load_capacity").val())){
//                 if($("#load_capacity").val() > 0 && $("#load_capacity").val()%1==0 && $("#load_capacity").val() <= 1200000){
//                     $("#load_capacity").addClass('is-valid');
//                     $("#load_capacity").removeClass('is-invalid');
//                 }else{
//                     errors += 1
//                     $("#load_capacity_span").html("Неправильное значение")
//                     $("#load_capacity").removeClass('is-valid');
//                     $("#load_capacity").addClass('is-invalid');
//                 }
//             }else{
//                 errors += 1
//                 $("#load_capacity_span").html("Неправильное значение")
//             }

//             if ($("#axes_count").val() != ""){
//                 if($.isNumeric($("#axes_count").val())){
//                     if($("#axes_count").val() > 0 && $("#axes_count").val()%1==0 && $("#axes_count").val() <= 20){
//                         $("#axes_count_span").html("")
//                         $("#axes_count").removeClass('is-invalid');
//                     }else{
//                         errors += 1
//                         $("#axes_count_span").html("Неправильное значение")
//                         $("#axes_count").addClass('is-invalid');
//                     }
//                 }else{
//                     errors += 1
//                     $("#axes_count_span").html("Неправильное значение")
//                 }
//             }else{
//                 $("#axes_count_span").html("");
//                 $("#axes_count").removeClass('is-invalid');
//             }
//         }

//         // spec
//         if ($('#category').val() == "spec"){
//             if ($('#type').val() != "communal"){
//                 if ($("#moto_hour").val() != ""){
//                     if($.isNumeric($("#moto_hour").val())){
//                         if($("#moto_hour").val() > 0 && $("#moto_hour").val()%1==0 && $("#moto_hour").val() <= 100000){
//                             $("#moto_hour").removeClass('is-invalid');
//                         }else{
//                             errors += 1
//                             $("#moto_hour_span").html("Неправильное значение")
//                             $("#moto_hour").addClass('is-invalid');
//                         }
//                     }else{
//                         errors += 1
//                         $("#moto_hour_span").html("Неправильное значение")
//                     }
//                 }else{
//                     $("#moto_hour_span").html("");
//                     $("#moto_hour").removeClass('is-invalid');
//                 }
//             }

//             if ($("#type").val() != "build" && $("#type").val() != "road" && $("#type").val() != "loader" && $("#type").val() != "communal"){
//                 if (emptyCheck($("#capacity"), $("#capacity").val(), $("#capacity_span"))) {
//                     errors += 1
//                 }
//                 if($.isNumeric($("#capacity").val())){
//                     if($("#capacity").val() >= 0 && $("#capacity").val()%1==0 && $("#capacity").val() <= 100000){
//                         $("#capacity").addClass('is-valid');
//                         $("#capacity").removeClass('is-invalid');
//                     }else{
//                         errors += 1
//                         $("#capacity_span").html("Неправильное значение")
//                         $("#capacity").removeClass('is-valid');
//                         $("#capacity").addClass('is-invalid');
//                     }
//                 }else{
//                     errors += 1
//                     $("#capacity_span").html("Неправильное значение")
//                 }
//             }
//         }

//         //lcom
//         if ($('#category').val() == "lcom"){
//             if ($("#load_capacity").val() != ""){
//                 if($.isNumeric($("#load_capacity").val())){
//                     if($("#load_capacity").val() > 0 && $("#load_capacity").val()%1==0 && $("#load_capacity").val() <= 3000){
//                         $("#load_capacity_span").html("")
//                         $("#load_capacity").removeClass('is-invalid');
//                     }else{
//                         $("#load_capacity_span").html("Слишком большое значение")
//                         $("#load_capacity").addClass('is-invalid');
//                     }
//                 }else{
//                     $("#load_capacity_span").html("Неправильное значение")
//                 }
//             }else{
//                 $("#load_capacity").removeClass('is-invalid');
//                 $("#load_capacity_span").html("")
//             }

//             if (emptyCheck($("#capacity"), $("#capacity").val(), $("#capacity_span"))) {
//                 errors += 1
//             }
//             if($.isNumeric($("#capacity").val())){
//                 if($("#capacity").val() >= 0 && $("#capacity").val()%1==0 && $("#capacity").val() <= 100000){
//                     $("#capacity").addClass('is-valid');
//                     $("#capacity").removeClass('is-invalid');
//                 }else{
//                     errors += 1
//                     $("#capacity_span").html("Неправильное значение")
//                     $("#capacity").removeClass('is-valid');
//                     $("#capacity").addClass('is-invalid');
//                 }
//             }else{
//                 errors += 1
//                 $("#capacity_span").html("Неправильное значение")
//             }

//             if ($("#seat_count").val()){
//                 if($.isNumeric($("#seat_count").val())){
//                     if($("#seat_count").val() > 0 && $("#seat_count").val()%1==0 && $("#seat_count").val() <= 16){
//                         $("#seat_count_span").html("")
//                         $("#seat_count").removeClass('is-invalid');
//                     }else{
//                         $("#seat_count_span").html("Неправильное значение")
//                         $("#seat_count").addClass('is-invalid');
//                     }
//                 }else{
//                     $("#seat_count_span").html("Неправильное значение")
//                 }
//             }
//         }
//     }

//     var vinEnable = false;
//     if(currentTab == 2){
//         //vin check
//         if (!validate(vin, $("#vin").val())){
//             vinEnable = false;
//             $("#vin"+"_span").html("Такого VIN номера не существует")
//             $("#vin").removeClass('is-valid');
//             $("#vin").addClass('is-invalid');
//         }else{
//             vinEnable = true
//             $("#vin"+"_span").html("")
//             $("#vin").addClass('is-valid');
//             $("#vin").removeClass('is-invalid');
//         }

//         if ($("#additional").val().length > 1024){
//             errors += 1
//             $("#additional").addClass("is-invalid")
//             $('#additional_span').html('Слишком длинное описание.')
//         }else{
//             $("#additional").removeClass("is-invalid")
//             $('#additional_span').html('')
//         }
         
//         if ($("#seat_count").val()){
//             if($.isNumeric($("#seat_count").val())){
//                 if($("#seat_count").val() > 0 && $("#seat_count").val()%1==0 && $("#seat_count").val() <= 200){
//                     $("#seat_count").addClass('is-valid');
//                     $("#seat_count").removeClass('is-invalid');
//                 }else{
//                     errors += 1
//                     $("#seat_count_span").html("Неправильное значение")
//                     $("#seat_count").removeClass('is-valid');
//                     $("#seat_count").addClass('is-invalid');
//                 }
//             }else{
//                 errors += 1
//                 $("#seat_count_span").html("Неправильное значение")
//             }
//         }
//     }
    
    
//     if(errors > 0){
//         return false
//     }else{
//         if(currentTab == 2){
//             if (!vinEnable){
//                 $("#vin").val("")
//             }
//         };
//         return true
//     }
// }

// function fixStepIndicator(n) {
//     var i, x = document.getElementsByClassName("step");
//     for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//     }
//     x[n].className += " active";
// }

// $( document ).ready(function() {
//     $("#is_contract").click(function() {
//         if($("#is_contract").is(':checked')) {
//             $("#price").val("")
//             $("#price-div").hide()
//         }else{
//             $("#price-div").show()
//         }
//     });
    
//     var I = 0
//     var isFirst = true;

//     imagesInput.addEventListener('change', () => {
//         fileBufferArr = Array.from(imagesInput.files);
//         fileCount += fileBufferArr.length
        
//         if (fileCount > 15){
//             $("#count-warning").show()
//         }

//         for (let i = I; i < fileCount+I; i++) {
//             if (isFirst){
//                 img_size = fileBufferArr[i].size / 1024 / 1024

//                 fileName = fileBufferArr[i].name;
//                 idxDot = fileName.lastIndexOf(".") + 1;
//                 extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

//                 if (img_size < 25 && (extFile=="jpg" || extFile=="jpeg" || extFile=="tiff" || extFile=="tif" || extFile=="pjp" || extFile=="bmp" || extFile=="webp" || extFile=="png" || extFile=="heic" || extFile=="heif")){
//                     fileBuffer[i.toString()] = fileBufferArr[i]
//                 }else{
//                     $("#wrong-"+i).show()
//                     $("#size-warning").show()
//                 }
//             }else{                
//                 if(i >= fileCount+I-fileBufferArr.length){
//                     img_size = fileBufferArr[i-(fileCount+I-fileBufferArr.length)].size / 1024 / 1024

//                     fileName = fileBufferArr[i-(fileCount+I-fileBufferArr.length)].name;
//                     idxDot = fileName.lastIndexOf(".") + 1;
//                     extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

//                     if (img_size < 25 && (extFile=="jpg" || extFile=="jpeg" || extFile=="tiff" || extFile=="tif" || extFile=="pjp" || extFile=="bmp" || extFile=="webp" || extFile=="png" || extFile=="heic" || extFile=="heif")){
//                         fileBuffer[i.toString()] = fileBufferArr[i-(fileCount+I-fileBufferArr.length)]
//                     }else{
//                         $("#wrong-"+i).show()
//                         $("#size-warning").show()
//                     }
//                 }
//             }
//         }

        
//         isFirst = false;
//         console.log(fileBuffer)
//     })

//     $('#image-preview').on("mouseenter", ".img-col", function() {
//         removeId = this.id.split("-")[1];
//         $('#remove-'+removeId).show()
//     });
//     $('#image-preview').on("mouseleave", ".img-col", function() {
//         removeId = this.id.split("-")[1];
//         $('#remove-'+removeId).hide()
//     });

    
//     $('#image-preview').on("click", ".remove", function() {
//         $("#"+this.id).parent().parent('.img-col').remove();
//         sliceId = this.id.slice(-1);
//         delete fileBuffer[sliceId];
//         fileCount -= 1;
//         if (fileCount <= 15){
//             $("#count-warning").hide()
//         }

//         I++;
//         console.log(fileCount);
//         console.log(fileBuffer);
//     });
// });
console.log('Hello')
