

// This is all the standard jquery stuff
$(function(){
  jQuery.noConflict();

  $("#group_submit").on("click", function(e){
    e.preventDefault();
    $("#group_form").trigger("submit");
    $("#event_form").trigger("submit");
  })

$('.event_invite').on('click', function(e){
    e.preventDefault();
    var userId = $(this).attr('uid');
    var groupId = $(this).attr('id');
    var eventId = $(this).attr('data');
    console.log('group id', groupId);
    console.log('event id', eventId)
    $('.group_event_send_form').attr('action', '/users/'+userId+'/groups/'+groupId+'/events/'+eventId)
    $('.event-modal').attr('id', groupId)

  });

$('.group_event_send_form').on('submit', function(e){
  e.preventDefault();
  var id = $(this).closest(".modal-body").attr("id")
  var userId = $('#'+id).attr('uid')
  var groupId = $('#'+id).attr('id');
  var eventId = $('#'+id).attr('data');
  console.log(userId, groupId, eventId)
  formData = $(this).serialize();
  $.ajax({
    method: "put",
    url: '/users/'+userId+'/groups/'+groupId+'/events/'+eventId,
    data: formData
  }).done(function(data){
    $('#event_invite').modal('hide');
    $('.group_event_send_form')[0].reset();
  })

})

$('.event_add').on('click', function(e){
    e.preventDefault()
    userId = $(this).attr('uid')
    groupId = $(this).attr('id');
    $('.group_event_add_form').attr('action', '/users/'+userId+'/groups/'+groupId+'/events')


  });

});