export default function Tools() {
    const formatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
    return {
        /**
         * Last edited : 03 Nov 2022
         * --------------------------------------------------
         * Convert number to currency
         * --------------------------------------------------
         */
        toCurrency: (str) => {
            return formatter.format(str);
        },
        /**
         * Last edited : 03 Nov 2022
         * --------------------------------------------------
         * Convert currency to number
         * --------------------------------------------------
         */
        toNumber: (str) => {
            return str.replace(/[^0-9,-]+/g, "");
        }
    }
}