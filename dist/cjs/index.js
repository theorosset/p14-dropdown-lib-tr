'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".displayNone {\n  display: none;\n}\n\n.dropDown__container {\n  width: 103%;\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.borderBottomNone {\n  border-bottom: none;\n}\n.supperposition {\n  z-index: 1;\n}\n.large {\n  width: 20rem;\n}\n.medium {\n  width: 15rem;\n}\n.small {\n  width: 10rem;\n}\n\n.dropDown__container__input {\n  border: 1px solid rgb(118, 118, 118);\n  height: 1.63rem;\n  padding: 1px 0.5rem 1px 0.5rem;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.dropDown__container__input--value {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.dropDown__container__options {\n  background-color: white;\n  position: absolute;\n  border: 1px solid rgb(113, 113, 113);\n  width: 99.4%;\n  border-radius: 0px 0px 5px 5px;\n  overflow-y: auto;\n  max-height: 250px;\n}\n\n.dropDown__container__options--list {\n  padding: 0;\n  margin: 0;\n}\n\n.dropDown__container__options--list > li {\n  transition-duration: 0.6s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  border-top: 1px solid black;\n  padding: 7px 0px 7px 0px;\n  cursor: pointer;\n}\n\n.dropDown__container__options--list > li:hover {\n  transition-duration: 0.6s;\n  background-color: #87ceeb;\n}\n\n.dropDown__container__options--list > li:first-child {\n  border: none;\n}\n";
styleInject(css_248z);

var DropDown = function (_a) {
    var options = _a.options, id = _a.id, SelectedValue = _a.SelectedValue, dropDownOpenId = _a.dropDownOpenId, size = _a.size, forceCloseDropdown = _a.forceCloseDropdown;
    var _b = React.useState(''), dropdownValue = _b[0], setDropDownValue = _b[1];
    var _c = React.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    React.useEffect(function () {
        if (forceCloseDropdown !== id) {
            setIsOpen(false);
        }
    }, [forceCloseDropdown]);
    var toggle = function () {
        setIsOpen(function (prevState) {
            var newState = !prevState;
            if (newState === true) {
                dropDownOpenId(id);
            }
            return newState;
        });
    };
    var handlerSelectDropDown = function (event) {
        var valueChoose = event.currentTarget.textContent;
        if (valueChoose) {
            SelectedValue({ id: id, value: valueChoose });
            setDropDownValue(valueChoose);
            toggle();
        }
    };
    return (React.createElement("div", { className: "dropDown__container ".concat(size ? size : "") },
        React.createElement("div", { className: "dropDown__container__input ".concat(isOpen ? 'borderBottomNone' : ''), onClick: toggle },
            React.createElement("div", { className: "dropDown__container__input--value", id: id },
                React.createElement("p", null, dropdownValue),
                React.createElement("i", { className: "fas fa-chevron-".concat(isOpen ? 'down' : 'up') }))),
        React.createElement("div", { className: "dropDown__container__options ".concat(isOpen ? 'supperposition' : 'displayNone') },
            React.createElement("ul", { className: "dropDown__container__options--list" }, options.map(function (_a) {
                var id = _a.id, name = _a.name;
                return React.createElement("li", { onClick: handlerSelectDropDown, key: id }, name);
            })))));
};

exports.DropDown = DropDown;
//# sourceMappingURL=index.js.map
