import { useMemo } from "react";
import moment from "moment";
import { getCardTypeByNumber } from "@members/config/creditCards";

/**
 *
 * @param expiryDate
 * @param autoBill
 * @return {{expiryDateFormatted: (*|string), cardType: (string|string), cardNumber: (string|string)}}
 */
const useDateAndCardNumber = (expiryDate, autoBill) => {
	const expiryDateFormatted = useMemo(() => (
		expiryDate === "N/A"
			? expiryDate
			: moment(expiryDate * 1000).format("DD MMMM YYYY")
	), [expiryDate]);

	const cardNumberMask = useMemo(() => (
		`**** ${autoBill?.cardMask.substr(autoBill?.cardMask.length - 4)}`
	), [autoBill?.cardMask]);

	let cardType = useMemo(() => (
		autoBill?.cardMask.toLowerCase().includes("members") ? "members" : getCardTypeByNumber(autoBill?.cardMask)
	), [autoBill?.cardMask]);

	let cardNumber = useMemo(() => (
		cardType === "members" ? "Members credit" : cardNumberMask
	), [cardType, cardNumberMask]);

	if (autoBill?.cardType === "icon-paypal") {
		cardNumber = autoBill?.cardMask;
		cardType = autoBill?.cardType === "icon-paypal" && "paypal";
	}

	return {
		expiryDateFormatted, cardNumber, cardType,
	};
};

export default useDateAndCardNumber;