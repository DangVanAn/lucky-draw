// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

(function ($) {

    $.jSlots = function (el, options) {

        var base = this;

        base.$el = $(el);
        base.el = el;

        base.$el.data("jSlots", base);

        base.init = function () {

            base.options = $.extend({}, $.jSlots.defaultOptions, options);

            base.setup();
            base.bindEvents();

        };


        // --------------------------------------------------------------------- //
        // DEFAULT OPTIONS
        // --------------------------------------------------------------------- //

        $.jSlots.defaultOptions = {
            number: 3,          // Number: number of slots
            winnerNumber: 1,    // Number or Array: list item number(s) upon which to trigger a win, 1-based index, NOT ZERO-BASED
            spinner: '',        // CSS Selector: element to bind the start event to
            spinEvent: 'click', // String: event to start slots on this event
            onStart: $.noop,    // Function: runs on spin start,
            onEnd: $.noop,      // Function: run on spin end. It is passed (finalNumbers:Array). finalNumbers gives the index of the li each slot stopped on in order.
            onWin: $.noop,      // Function: run on winning number. It is passed (winCount:Number, winners:Array)
            easing: 'swing',    // String: easing type for final spin
            time: 7000,         // Number: total time of spin animation
            loops: 6            // Number: times it will spin during the animation
        };

        // --------------------------------------------------------------------- //
        // HELPERS
        // --------------------------------------------------------------------- //

        base.randomRange = function (low, high) {
            let value = Math.floor(Math.random() * (1 + high - low)) + low;
            return value;
        };

        // --------------------------------------------------------------------- //
        // VARS
        // --------------------------------------------------------------------- //

        base.isSpinning = false;
        base.spinSpeed = 0;
        base.winCount = 0;
        base.doneCount = 0;

        base.$liHeight = 0;
        base.$liWidth = 0;

        base.winners = [];
        base.allSlots = [];

        // --------------------------------------------------------------------- //
        // FUNCTIONS
        // --------------------------------------------------------------------- //


        base.setup = function () {

            // set sizes

            var $list = base.$el;
            var $li = $list.find('li').first();

            base.$liHeight = $li.outerHeight();
            base.$liWidth = $li.outerWidth();

            base.liCount = base.$el.children().length;

            base.listHeight = base.$liHeight * base.liCount;

            base.increment = (base.options.time / base.options.loops) / base.options.loops;

            $list.css('position', 'relative');

            $li.clone().appendTo($list);

            base.$wrapper = $list.wrap('<div class="jSlots-wrapper"></div>').parent();

            // remove original, so it can be recreated as a Slot
            base.$el.remove();

            // clone lists
            for (var i = base.options.number - 1; i >= 0; i--) {
                base.allSlots.push(new base.Slot());
            }

        };

        base.bindEvents = function () {
            $(base.options.spinner).bind(base.options.spinEvent, function (event) {
                if (!base.isSpinning) {
                    base.playSlots();
                }
            });
        };

        // Slot contstructor
        base.Slot = function () {

            this.spinSpeed = 0;
            this.el = base.$el.clone().appendTo(base.$wrapper)[0];
            this.$el = $(this.el);
            this.loopCount = 0;
            this.number = 0;

        };


        base.Slot.prototype = {

            // do one rotation
            spinEm: function () {

                var that = this;

                that.$el
                    .css('top', -base.listHeight)
                    .animate({'top': '0px'}, that.spinSpeed, 'linear', function () {
                        that.lowerSpeed();
                    });

            },

            lowerSpeed: function () {

                this.spinSpeed += base.increment;
                this.loopCount++;

                if (this.loopCount < base.options.loops) {

                    this.spinEm();

                } else {

                    this.finish();

                }
            },

            // final rotation
            finish: function () {

                var that = this;

                // var endNum = base.randomRange( 1, base.liCount );
                var endNum = base.randomRange(list_number[base.options.locate_num], list_number[base.options.locate_num]);

                var finalPos = -((base.$liHeight * endNum) - base.$liHeight);
                var finalSpeed = ((this.spinSpeed * 0.5) * (base.liCount)) / endNum;

                that.$el
                    .css('top', -base.listHeight)
                    .animate({'top': finalPos}, finalSpeed, base.options.easing, function () {
                        base.checkWinner(endNum, that);
                    });

            }

        };

        base.checkWinner = function (endNum, slot) {

            base.doneCount++;
            // set the slot number to whatever it ended on
            slot.number = endNum;

            // if its in the winners array
            if (
                ($.isArray(base.options.winnerNumber) && base.options.winnerNumber.indexOf(endNum) > -1) ||
                endNum === base.options.winnerNumber
            ) {

                // its a winner!
                base.winCount++;
                base.winners.push(slot.$el);

            }

            if (base.doneCount === base.options.number) {

                var finalNumbers = [];

                $.each(base.allSlots, function (index, val) {
                    finalNumbers[index] = val.number;
                });

                if ($.isFunction(base.options.onEnd)) {
                    base.options.onEnd(finalNumbers);
                }

                if (base.winCount && $.isFunction(base.options.onWin)) {
                    base.options.onWin(base.winCount, base.winners, finalNumbers);
                }
                base.isSpinning = false;
            }
        };


        base.playSlots = function () {

            base.isSpinning = true;
            base.winCount = 0;
            base.doneCount = 0;
            base.winners = [];

            if ($.isFunction(base.options.onStart)) {
                base.options.onStart();
            }

            $.each(base.allSlots, function (index, val) {
                this.spinSpeed = 0;
                this.loopCount = 0;
                this.spinEm();
            });

        };


        base.onWin = function () {
            if ($.isFunction(base.options.onWin)) {
                base.options.onWin();
            }
        };


        // Run initializer
        base.init();
    };

    $.fn.jSlots = function (options) {
        if (this.length) {
            return this.each(function () {
                (new $.jSlots(this, options));
            });
        }
    };

})(jQuery);


var list_number = [1, 1, 1];

$.jSlots.defaultOptions = {
    number: 3,          // Number: number of slots
    winnerNumber: 1,    // Number: list item number upon which to trigger a win, 1-based index, NOT ZERO-BASED
    spinner: '',        // CSS Selector: element to bind the start event to
    spinEvent: 'click', // String: event to start slots on this event
    onStart: $.noop,    // Function: runs on spin start,
    onEnd: $.noop,      // Function: run on spin end. It is passed (finalNumbers:Array). finalNumbers gives the index of the li each slot stopped on in order.
    onWin: $.noop,      // Function: run on winning number. It is passed (winCount:Number, winners:Array, finalNumbers:Array)
    easing: 'swing',    // String: easing type for final spin. I recommend the easing plugin and easeOutSine, or an easeOut of your choice.
    time: 70000,         // Number: total time of spin animation
    loops: 60,            // Number: times it will spin during the animation
    locate_num: 0
};

////////////////////////////////////////////////////////////////

$('#slot01').jSlots({
    number: 1,
    spinner: '#playBtn1',
    time: 100000,
    loops: 50,
    locate_num: 0
});

$('#slot02').jSlots({
    number: 1,
    spinner: '#playBtn2',
    time: 100000,
    loops: 50,
    locate_num: 1
});

$('#slot03').jSlots({
    number: 1,
    spinner: '#playBtn3',
    time: 100000,
    loops: 50,
    locate_num: 2
});

////////////////////////////////////////////////////////////////

var number_random = 1;
var value_random_string  = "";
$("#playBtn01").click(function () {
    $('#playBtn01').hide();
    $('#random_back_to_options').hide();
    $('#stopBtn01').show();
    // list_number = [number_random, number_random, number_random];
    let min_number = Number(getCookie("min_number"));
    let max_number = Number(getCookie("max_number"));

    let value_random = randomFromTo(min_number, max_number);
    value_random_string  = value_random.toString();

    if(value_random_string.length == 1) {
        value_random_string = "00" + value_random_string;
    }

    if(value_random_string.length == 2) {
        value_random_string = "0" + value_random_string;
    }

    console.log(value_random_string);

    list_number = [Number(value_random_string[0]), Number(value_random_string[1]), Number(value_random_string[2])];

    for (let i = 0; i < list_number.length; i++) {
        list_number[i]++;
    }
    number_random++;

    $('#slot01').jSlots({
        number: 1,
        spinner: '#playBtn1',
        time: 60000,
        loops: 15,
        locate_num: 0
    });

    $("#playBtn1").click();

    setTimeout(function () {
        $("#playBtn02").click();
    }, 500);
});

$("#playBtn02").click(function () {
    $('#slot02').jSlots({
        number: 1,
        spinner: '#playBtn2',
        time: 60000,
        loops: 15,
        locate_num: 1
    });

    $("#playBtn2").click();

    setTimeout(function () {
        $("#playBtn03").click();
    }, 500);
});

$("#playBtn03").click(function () {
    $('#slot03').jSlots({
        number: 1,
        spinner: '#playBtn3',
        time: 60000,
        loops: 15,
        locate_num: 2
    });

    $("#playBtn3").click();
});

/////////////////////////////////////////////////////////////

$("#stopBtn01").click(function () {
    $('#slot01').jSlots({
        number: 1,
        spinner: '#stopBtn1',
        time: 1000,
        loops: 1,
        locate_num: 0
    });

    $("#stopBtn1").click();

    $('#stopBtn01').hide();
    $('#btn_accept').show();
    $('#btn_random_again').show();

    setTimeout(function () {
        $("#stopBtn02").click();
    }, 2000);
});

$("#stopBtn02").click(function () {
    $('#slot02').jSlots({
        number: 1,
        spinner: '#stopBtn2',
        time: 1000,
        loops: 1,
        locate_num: 1
    });

    $("#stopBtn2").click();

    setTimeout(function () {
        $("#stopBtn03").click();
    }, 2000);
});

$("#stopBtn03").click(function () {
    $('#slot03').jSlots({
        number: 1,
        spinner: '#stopBtn3',
        time: 1000,
        loops: 1,
        locate_num: 2
    });

    $("#stopBtn3").click();
});

$("#btn_accept").click(function () {
    setCookie("lucky_number_" + index_not_lucky, value_random_string, 30);
    alert("Xác nhận thành công!");
    window.location.assign(window.location.href);
});

$("#btn_random_again").click(function () {
    $("#playBtn01").click();
    // $('#stopBtn01').hide();
    $('#btn_accept').hide();
    $('#btn_random_again').hide();

});

$("#random_back_to_options").click(function () {
    let href = window.location.href;
    href = href.replace("random.html", "option.html");
    window.location.assign(href);
});


////////////////////////////////////////////////////////

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function randomFromTo(low, high) {
    let value = Math.floor(Math.random() * (1 + high - low)) + low;
    return value;
};