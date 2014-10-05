MeteorisFormatter = {
    /**
     * Formatting date to desired format, this function needs moment packages     
     */
    date: function(date, format) {
        if (date)
            return moment(date).format(format ? format : 'DD MMM YYYY');
        else
            return "-";
    },
    /**
     * Formatting date to desired format, this function needs moment packages     
     */
    dateTime: function(date, format) {
        if (date)
            return moment(date).format(format ? format : 'DD MMM YYYY HH:mm');
        else
            return "-";
    },
    /**
     * Formatting number to desired format, this function needs accounting packages     
     */
    number: function(value) {
        if (value === 0)
            return 0;
        else if (value < 0) //accounting format when number is negative
            return "(" + accounting.formatMoney(value * -1, "", 2, ".", ",") + ")";
        else if (value)
            return accounting.formatMoney(value, "", 2, ".", ",");
    },
    combodate: function(date) {
        if (date)
            return moment(date).format("YYYY-MM-DD");
        else
            return moment(new Date()).format("YYYY-MM-DD");
    },
    combodateEmpty: function(date) {
        if (date)
            return moment(date).format("YYYY-MM-DD");
    },
};


/**
 * Don't edit this if you don't know what exactly are you doing 
 */
UI.registerHelper('meteorisFormatter', function(option, firstParam) {
    return MeteorisFormatter[option](firstParam);
});
UI.registerHelper('meteorisFormatterDate', function(date, format) {
    return MeteorisFormatter.date(date, format);
});
UI.registerHelper('meteorisFormatterDateTime', function(date, format) {
    return MeteorisFormatter.dateTime(date, format);
});
UI.registerHelper('meteorisFormatterNumber', function(value) {
    return MeteorisFormatter.dateTime(value);
});