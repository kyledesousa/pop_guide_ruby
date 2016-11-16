$(document).ready(function(){
    $("#submit").click(function(event){
        $("#contactForm").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Name is a required field?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "Email is a required field?"
                },
                message: {
                    required: "please type a short message",
                    minlength: "must be more than one word"
                }
            },
            submitHandler: function(form) {
                console.log("HEY");
                var f_name = $("#cname").val();
                var f_email = $("#cemail").val();
                var f_msg = $("#ccomment").val();

                $.ajax({
                    type:"POST",
                    data: {name: f_name, email: f_email, message: f_msg},
                    url:"https://prod.popguide.me/popguide_site_contact",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                        });
                        $('#contactForm').hide();
                        $('#success').show();
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }

        });
    });
});
