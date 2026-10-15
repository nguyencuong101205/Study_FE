function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
    return null;
  }

  var selectorRules = {};

  function validate(inputElement, rule) {
    if (!inputElement) return true;

    var formGroup = getParent(inputElement, options.formGroupSelector);
    if (!formGroup) return true;

    var errorElement = formGroup.querySelector(options.errorSelector);
    var errorMessage;

    var rules = selectorRules[rule.selector];

    for (var i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case 'radio':
        case 'checkbox':
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ':checked')
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      if (errorElement) errorElement.innerText = errorMessage;
      formGroup.classList.add('invalid');
    } else {
      if (errorElement) errorElement.innerText = '';
      formGroup.classList.remove('invalid');
    }

    return !errorMessage;
  }

  var formElement = document.querySelector(options.form);

  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      console.log('Đang kiểm tra và submit form...');

      var isFormValid = true;

      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        if (typeof options.onSubmit === 'function') {
          var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
          var formValues = Array.from(enableInputs).reduce(function (values, input) {
            switch (input.type) {
              case 'radio':
                var checkedRadio = formElement.querySelector('input[name="' + input.name + '"]:checked');
                values[input.name] = checkedRadio ? checkedRadio.value : '';
                break;
              case 'checkbox':
                if (!input.matches(':checked')) {
                  if (!values[input.name]) values[input.name] = [];
                  return values;
                }
                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }
                values[input.name].push(input.value);
                break;
              case 'file':
                values[input.name] = input.files;
                break;
              default:
                values[input.name] = input.value;
            }
            return values;
          }, {});

          options.onSubmit(formValues);
        } else {
          formElement.submit();
        }
      } else {
        console.error('Submit thất bại: Vui lòng điền đúng và đầy đủ thông tin các trường báo đỏ.');
      }
    };

    options.rules.forEach(function (rule) {
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElements = formElement.querySelectorAll(rule.selector);

      Array.from(inputElements).forEach(function (inputElement) {
        inputElement.onblur = function () {
          var isValid = validate(inputElement, rule);
          var fieldName = inputElement.name || inputElement.id;
          if (isValid) {
            console.log('Rời ô [' + fieldName + ']: Hợp lệ (giá trị: "' + inputElement.value + '")');
          } else {
            var formGroup = getParent(inputElement, options.formGroupSelector);
            var errorElement = formGroup ? formGroup.querySelector(options.errorSelector) : null;
            console.warn('Rời ô [' + fieldName + ']: Lỗi -> ' + (errorElement ? errorElement.innerText : ''));
          }
        };

        var handleInput = function () {
          var formGroup = getParent(inputElement, options.formGroupSelector);
          if (formGroup) {
            var errorElement = formGroup.querySelector(options.errorSelector);
            if (errorElement) errorElement.innerText = '';
            formGroup.classList.remove('invalid');
          }
          console.log('Đang nhập [' + (inputElement.name || inputElement.id) + ']:', inputElement.value);
        };

        inputElement.oninput = handleInput;
        inputElement.onchange = handleInput;
      });
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      if (typeof value === 'string') {
        return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
      }
      return value ? undefined : message || 'Vui lòng nhập trường này';
    }
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
      return regex.test(value)
        ? undefined
        : message || 'Trường này phải là email';
    }
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value && value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    }
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || 'Giá trị nhập vào không chính xác';
    }
  };
};
