alert("h");
$(document).ready(function(){
    alert("h");
 load_json_data('OS-select');
 alert("i");
 function load_json_data(id, parent_id)
 {
     
  var html_code = '';
  $.getJSON('Vmachines.json', function(data){

   html_code += '<option value="">Select '+id+'</option>';
   $.each(data, function(key, value){
    if(id == 'OS-select')
    {
     if(value.parent_id == '0')
     {
      html_code += '<option value="'+value.id+'">'+value.name+'</option>';
     }
    }
    else
    {
     if(value.parent_id == parent_id)
     {
      html_code += '<option value="'+value.id+'">'+value.name+'</option>';
     }
    }
   });
   $('#'+id).html(html_code);
  });

 }

 $(document).on('change', '#OS-select', function(){
  var country_id = $(this).val();
  if(country_id != '')
  {
   load_json_data('type-select', country_id);
  }
  else
  {
   $('#type-select').html('<option value="">Select type</option>');
   //$('#city').html('<option value="">Select city</option>');
  }
 });
 /*
 $(document).on('change', '#type-select', function(){
  var state_id = $(this).val();
  if(state_id != '')
  {
   load_json_data('city', state_id);
  }
  else
  {
   $('#city').html('<option value="">Select city</option>');
  }
 });*/
});