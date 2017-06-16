Template.appointmentList.rendered = function(){

}

Template.appointmentList.helpers({  
    appointmentList : function () {  
        //返回数据库数据  
        return Appointments.find();  
    },

    reomoveList : function(){
        return Appointments.remove({_id: 'recordId'});
    }
});  

Template.appointmentList.events({
	"click #reomoveA": function() {
		Meteor.call("removeAppointmentList", this._id);
		Bert.alert("已经成功删除预约", "success", "growl-top-right");
	},
});