$(document).ready(function () {
    $(".FeedbackFormSubmit").click(function () {

        isError = false;

        thisButton = $(this);

        clientNameField = thisButton.parent().find("[name=name]");
        clientNameField.removeClass("errorf");
        nameChars = " -ёйцукенгшщзхъфывапролджэячсмитьбюЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ";
        nameString = clientNameField.val();
        if (nameString.length < 3) {
            clientNameField.addClass("errorf");
            isError = true;
        }
        else {
            i = 0;
            while (ch = nameString.substr(i, 1)) {
                if (nameChars.indexOf(ch) == -1) {
                    clientNameField.addClass("errorf");
                    isError = true;
                    break;
                }
                i++;
            }
        }

        clientPhoneField = thisButton.parent().find("[name=phone]");
        clientPhoneField.removeClass("errorf");
        phoneChars = " +-()1234567890";
        phoneString = clientPhoneField.val();
        if (phoneString.length < 5) {
            clientPhoneField.addClass("errorf");
            isError = true;
        }
        else {
            i = 0;
            while (ch = phoneString.substr(i, 1)) {
                if (phoneChars.indexOf(ch) == -1) {
                    clientPhoneField.addClass("errorf");
                    isError = true;
                    break;
                }
                i++;
            }
        }

        clientEmailField = thisButton.parent().find("[name=email]");
        emailString = clientEmailField.val();

        if (!isError) {

            thisButton.attr("disabled", "disabled");

            $.post('/Home/FeedbackRequest',
            {
                name: nameString,
                phone: phoneString,
                email: emailString
            },
            function (data) {
                alert(data.Message);
                thisButton.removeAttr("disabled");
            }, "json");

        }

    });
});