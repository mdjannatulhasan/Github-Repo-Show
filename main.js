// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/mdjannatulhasan/repos', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  
  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + (i+1) + '</td>';
    statusHTML += '<td>' + '<a target="_blank" href="' + status.html_url +'" style="text-decoration:none;">'+ status.name+'</a>'+ '</td>';
    statusHTML += '<td>' + status.language + '</td>';
    if(status.has_pages){
      statusHTML += '<td>' + '<a target="_blank" href="https://mdjannatulhasan.github.io/' + status.name +'" style="text-decoration:none;">'+ "Click Here"+'</a>' + '</td>';
    } else{
      statusHTML += '<td>' + "No Page Yet" + '</td>';
    }
    // statusHTML += '<td>' + status.has_pages + '</td>';
    statusHTML += '</tr>';
    // document.getElementById("test").innerHTML = '<td>' +  status.has_pages + '</td>';
    
  });
  $('tbody').html(statusHTML);
  
}

// Send request
request.send();
