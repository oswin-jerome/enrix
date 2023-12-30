import moment from "moment";

export const getFormattedDate = (date: Date | null) => {
    if (date == null) {
        return "";
    }
    return moment(date).format("Y-M-D");
};
