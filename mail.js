document.getElementById('contact-form')
.addEventListener('submit',function(e){
    e.preventDefault();
    var name = document.getElementById('name').Value;
    var mail = document.getElementById('email').Value;
    var message = document.getElementById('message').Value;
    var subject = "New message from" + name;
    var body = "Name:" + name +"\nEmail" + email + "\nMessages" + message;
    var mailto_link = 'gvlikitha@gmail.com' + '?subject=' + subject + '&body' + encodeURIComponent(body);
    window.location.href = mailto_link;
});