/*! ClassToggle.js - v0.0.5 - 2017-10-07
* https://github.com/mvdschee/ClassToggle.js
* Copyright (c) 2017 Max van der Schee; Licensed MIT */
var Trigger = (function () {
    function Trigger() {
    }
    Trigger.prototype.findTrigger = function () {
        var toggle = new Toggle();
        this.list = document.querySelectorAll("[class^='trigger_']");
        var _loop_1 = function (i) {
            this_1.number = parseInt(this_1.list[i].classList[0].slice(8));
            var execute = "execute_" + this_1.number;
            var executeList = document.getElementsByClassName(this_1.list[i].classList[0]);
            for (var j = 0; j < executeList.length; j++) {
                executeList[j].addEventListener('click', function () { toggle.toggleExecute(execute); }, false);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.list.length; i++) {
            _loop_1(i);
        }
    };
    return Trigger;
}());
var Toggle = (function () {
    function Toggle() {
    }
    Toggle.prototype.toggleExecute = function (execute) {
        this.loopList = document.querySelectorAll("." + execute);
        for (var i = 0; i < this.loopList.length; i++) {
            if (this.loopList[i].classList.contains("active")) {
                document.getElementsByClassName(execute)[i].classList.remove("active");
                document.getElementsByClassName(execute)[i].classList.add("inactive");
            }
            else {
                document.getElementsByClassName(execute)[i].classList.add("active");
                document.getElementsByClassName(execute)[i].classList.remove("inactive");
            }
        }
    };
    return Toggle;
}());
