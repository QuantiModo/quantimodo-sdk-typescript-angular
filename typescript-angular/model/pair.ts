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



export interface Pair {
    /**
     * Ex: 101341.66666667
     */
    causeMeasurement: number;
    /**
     * Ex: 101341.66666667
     */
    causeMeasurementValue: number;
    /**
     * Ex: mg
     */
    causeVariableUnitAbbreviatedName: string;
    /**
     * Ex: 7.98
     */
    effectMeasurement: number;
    /**
     * Ex: 7.98
     */
    effectMeasurementValue: number;
    /**
     * Ex: %
     */
    effectVariableUnitAbbreviatedName: string;
    /**
     * Ex: 2015-08-06 15:49:02 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     */
    eventAt?: string;
    /**
     * Ex: 1438876142
     */
    eventAtUnixTime?: number;
    /**
     * Ex: 2015-08-06 15:49:02 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
     */
    startTimeString?: string;
    /**
     * Ex: 1464937200
     */
    timestamp: number;
}
