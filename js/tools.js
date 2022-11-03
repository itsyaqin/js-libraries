export default function Tools() {
    const formatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
    return {
        /**
         * Last edited : xx XXX xx
         * --------------------------------------------------
         * Convert number to currency
         * --------------------------------------------------
         */
        toCurrency: (str) => {
            return formatter.format(str);
        },
        /**
         * Last edited : xx XXX xx
         * --------------------------------------------------
         * Convert currency to number
         * --------------------------------------------------
         */
        toNumber: (str) => {
            return str.replace(/[^0-9,-]+/g, "");
        }
    }
}