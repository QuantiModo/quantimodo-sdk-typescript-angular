/**
 * quantimodo
 * We make it easy to retrieve and analyze normalized user data from a wide array of devices and applications. Check out our [docs and sdk's](https://github.com/QuantiModo/docs) or [contact us](https://help.quantimo.do).
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface Chart {
    /**
     *  Highcharts config that can be used if you have highcharts.js included on the page
     */
    highchartConfig?: any;
    /**
     * Ex: correlationScatterPlot
     */
    chartId?: string;
    /**
     * Ex: Overall Mood following Sleep Duration (R = -0.173)
     */
    chartTitle?: string;
    /**
     * Ex: The chart above indicates that an increase in Sleep Duration is usually followed by an decrease in Overall Mood.
     */
    explanation?: string;
    /**
     * Url to a static svg of the chart
     */
    svgUrl?: string;
    /**
     * SVG string than can be embedded directly in HTML
     */
    svg?: string;
}
