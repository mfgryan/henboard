let date = () => {
    const _MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
    return {
        // returns the most recent monday
        getNearestMonday: function (d){
            d = new Date(d);
            var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
            return new Date(d.setDate(diff)); 
        },
        // returns date formatted mm/dd/yy
        getDateFormat: function(date){
            var dd = date.getDate(); 
            var mm = date.getMonth() + 1;
            var yy = date.getFullYear().toString().substr(-2);
            dd = dd < 10 ? '0'+dd : dd;
            mm = mm < 10 ? '0'+mm : mm;
            return mm+'/'+dd+'/'+yy;
        },
        // returns the numerical difference between two dates 
        dayDiff: function (a , b){
            var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
            return Math.floor((utc2 - utc1) / (_MILLISECONDS_IN_DAY)); 
        } 
    }
}

export {date}