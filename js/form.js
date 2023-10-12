$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzIRCRlOlaD8d3-BXuKgMlOKz3RhomgzglvL6LIVf02HxG4EYwDiPL-sz5_j4BFO_SOMg/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

//name validation
function validateInput() {
    var input = document.getElementById("name");
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
  }

  //Email validation
    //Email validation on mouseleave
    $(document).ready(function () {
        $("#email").on("mouseleave", function () {
            const email = $(this).val();
            const $invalidFeedback = $(this).next(".invalid-feedback");
    
            if (!email.endsWith("@gmail.com")) {
                $invalidFeedback.text("Please provide a valid Gmail email address.");
                $(this).addClass("is-invalid");
            } else {
                $invalidFeedback.text("");  // Clear any previous error message
                $(this).removeClass("is-invalid");
            }
        });
    });