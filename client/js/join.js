 Template.join.rendered = function () {
    $(document).ready(function(){
        $('input#phone,textarea#description').characterCounter();
    });
 }

 Template.join.events({
    "click button": function(event) {
        //获取数据  
        var joinname = $('#joinname').val();
        var joinphone = $('#joinphone').val();
        var joinemail = $('#joinemail').val();
        var joindescription = $('#joindescription').val();
        //判断表单
        if(isNotEmpty(joinname)&&isNotEmpty(joinphone)&&isNotEmpty(joinemail)&&isNotEmpty(joindescription)){
            //构造user
            var join_json = {joinname:joinname,joinphone:joinphone,joinemail:joinemail,joindescription:joindescription};  
            //写入数据库
            Join.insert(join_json);  
            //提示预约
            Bert.alert("预约成功", "success", "growl-top-right");
            //重置预约
            if(Meteor.userId()){
                template.find("form").reset();
		        Router.go("/joinList");
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