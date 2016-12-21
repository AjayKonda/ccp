"use strict";
var Event = (function () {
    function Event(college_id, role_id, user_id, title, desc, start_date, start_time, end_date, end_time, address_line_1, address_line_2, other_details, images, files, tags) {
        this.college_id = college_id;
        this.role_id = role_id;
        this.user_id = user_id;
        this.title = title;
        this.desc = desc;
        this.start_date = start_date;
        this.start_time = start_time;
        this.end_date = end_date;
        this.end_time = end_time;
        this.address_line_1 = address_line_1;
        this.address_line_2 = address_line_2;
        this.other_details = other_details;
        this.images = images;
        this.files = files;
        this.tags = tags;
    }
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=Event.js.map