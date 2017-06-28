Template.appointment.rendered = function () {
    $(document).ready(function() {
        $(window).scrollTop(0);
        $('select').material_select();
        $('input#phone,textarea#description').characterCounter();
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 6 // Creates a dropdown of 15 years to control year
    });
     Materialize.toast('欢迎预约', 3000, 'rounded ppB') // 'rounded' is the class I'm applying to the toast

}

Template.appointment.events({
    "click button": function(event) {
        //获取数据  
        var babyname = $('#babyname').val();
        var age = $('#age').val();
        var gender = $('input:radio[name=gender]:checked').val();
        var parentname = $('#parentname').val(); 
        var date = $('#date').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var description = $('#description').val();
        //判断表单
        if(isNotEmpty(babyname)&&isNotEmpty(age)&&isNotEmpty(gender)&&isNotEmpty(parentname)&&isNotEmpty(date)&&isNotEmpty(phone)&&isNotEmpty(email)){
            //构造user
            var user_json = {babyname:babyname,age:age,gender:gender,parentname:parentname,date:date,phone:phone,email:email,description:description};  
            //写入数据库
            Appointments.insert(user_json);  
            //提示预约
            Bert.alert("预约成功", "success", "growl-top-right");
            //重置预约
            if(Meteor.userId()){
                template.find("form").reset();
		        Router.go("/appointmentList");
	        }else{
                Router.go("/");
            }
        }
        return false;
    },

}); 

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
    Bert.alert("请填写所有表单", "danger", "growl-top-right");
    return false;
};
