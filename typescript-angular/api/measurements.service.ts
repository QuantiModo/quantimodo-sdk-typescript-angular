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

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }               from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { CommonResponse } from '../model/commonResponse';
import { Measurement } from '../model/measurement';
import { MeasurementDelete } from '../model/measurementDelete';
import { MeasurementSet } from '../model/measurementSet';
import { MeasurementUpdate } from '../model/measurementUpdate';
import { Pair } from '../model/pair';
import { PostMeasurementsResponse } from '../model/postMeasurementsResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';


@Injectable()
export class MeasurementsService {

    protected basePath = 'https://app.quantimo.do/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Delete a measurement
     * Delete a previously submitted measurement
     * @param body The startTime and variableId of the measurement to be deleted.
     */
    public deleteMeasurement(body: MeasurementDelete): Observable<CommonResponse> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling deleteMeasurement.');
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.apiKeys["access_token"]) {
            queryParameters = queryParameters.set('access_token', this.configuration.apiKeys["access_token"]);
        }

        // authentication (quantimodo_oauth2) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.delete<any>(`${this.basePath}/v3/measurements/delete`,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Get measurements for this user
     * Measurements are any value that can be recorded like daily steps, a mood rating, or apples eaten.
     * @param variableName Name of the variable you want measurements for
     * @param sort Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order.
     * @param limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param variableCategoryName Limit results to a specific variable category
     * @param updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param userId User&#39;s id
     * @param sourceName ID of the source you want measurements for (supports exact name match only)
     * @param connectorName Ex: facebook
     * @param value Value of measurement
     * @param unitName Ex: Milligrams
     * @param earliestMeasurementTime Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param latestMeasurementTime Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param id Measurement id
     * @param groupingWidth The time (in seconds) over which measurements are grouped together
     * @param groupingTimezone The time (in seconds) over which measurements are grouped together
     * @param doNotProcess Ex: true
     * @param clientId Your QuantiModo client id can be obtained by creating an app at https://builder.quantimo.do
     * @param doNotConvert Ex: 1
     * @param minMaxFilter Ex: 1
     * @param platform Ex: chrome, android, ios, web
     */
    public getMeasurements(variableName?: string, sort?: string, limit?: number, offset?: number, variableCategoryName?: string, updatedAt?: string, userId?: number, sourceName?: string, connectorName?: string, value?: string, unitName?: string, earliestMeasurementTime?: string, latestMeasurementTime?: string, createdAt?: string, id?: number, groupingWidth?: number, groupingTimezone?: string, doNotProcess?: boolean, clientId?: string, doNotConvert?: boolean, minMaxFilter?: boolean, platform?: string): Observable<Array<Measurement>> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (variableName !== undefined) {
            queryParameters = queryParameters.set('variableName', <any>variableName);
        }
        if (sort !== undefined) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }
        if (limit !== undefined) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (variableCategoryName !== undefined) {
            queryParameters = queryParameters.set('variableCategoryName', <any>variableCategoryName);
        }
        if (updatedAt !== undefined) {
            queryParameters = queryParameters.set('updatedAt', <any>updatedAt);
        }
        if (userId !== undefined) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }
        if (sourceName !== undefined) {
            queryParameters = queryParameters.set('sourceName', <any>sourceName);
        }
        if (connectorName !== undefined) {
            queryParameters = queryParameters.set('connectorName', <any>connectorName);
        }
        if (value !== undefined) {
            queryParameters = queryParameters.set('value', <any>value);
        }
        if (unitName !== undefined) {
            queryParameters = queryParameters.set('unitName', <any>unitName);
        }
        if (earliestMeasurementTime !== undefined) {
            queryParameters = queryParameters.set('earliestMeasurementTime', <any>earliestMeasurementTime);
        }
        if (latestMeasurementTime !== undefined) {
            queryParameters = queryParameters.set('latestMeasurementTime', <any>latestMeasurementTime);
        }
        if (createdAt !== undefined) {
            queryParameters = queryParameters.set('createdAt', <any>createdAt);
        }
        if (id !== undefined) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (groupingWidth !== undefined) {
            queryParameters = queryParameters.set('groupingWidth', <any>groupingWidth);
        }
        if (groupingTimezone !== undefined) {
            queryParameters = queryParameters.set('groupingTimezone', <any>groupingTimezone);
        }
        if (doNotProcess !== undefined) {
            queryParameters = queryParameters.set('doNotProcess', <any>doNotProcess);
        }
        if (clientId !== undefined) {
            queryParameters = queryParameters.set('clientId', <any>clientId);
        }
        if (doNotConvert !== undefined) {
            queryParameters = queryParameters.set('doNotConvert', <any>doNotConvert);
        }
        if (minMaxFilter !== undefined) {
            queryParameters = queryParameters.set('minMaxFilter', <any>minMaxFilter);
        }
        if (platform !== undefined) {
            queryParameters = queryParameters.set('platform', <any>platform);
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.apiKeys["access_token"]) {
            queryParameters = queryParameters.set('access_token', this.configuration.apiKeys["access_token"]);
        }

        // authentication (quantimodo_oauth2) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<any>(`${this.basePath}/v3/measurements`,
            {
                params: queryParameters,
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Get pairs of measurements for correlational analysis
     * Pairs cause measurements with effect measurements grouped over the duration of action after the onset delay.
     * @param causeVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param effectVariableName Name of the hypothetical outcome variable.  Ex: Overall Mood
     * @param effectUnitName Name for the unit effect measurements to be returned in
     * @param userId User&#39;s id
     * @param causeUnitName Name for the unit cause measurements to be returned in
     * @param onsetDelay The amount of time in seconds that elapses after the predictor/stimulus event before the outcome as perceived by a self-tracker is known as the onset delay. For example, the onset delay between the time a person takes an aspirin (predictor/stimulus event) and the time a person perceives a change in their headache severity (outcome) is approximately 30 minutes.
     * @param durationOfAction The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.
     * @param earliestMeasurementTime Excluded records with measurement times earlier than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param latestMeasurementTime Excluded records with measurement times later than this value. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss  datetime format. Time zone should be UTC and not local.
     * @param limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param sort Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order.
     */
    public getPairs(causeVariableName?: string, effectVariableName?: string, effectUnitName?: string, userId?: number, causeUnitName?: string, onsetDelay?: string, durationOfAction?: string, earliestMeasurementTime?: string, latestMeasurementTime?: string, limit?: number, offset?: number, sort?: string): Observable<Array<Pair>> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (causeVariableName !== undefined) {
            queryParameters = queryParameters.set('causeVariableName', <any>causeVariableName);
        }
        if (effectVariableName !== undefined) {
            queryParameters = queryParameters.set('effectVariableName', <any>effectVariableName);
        }
        if (effectUnitName !== undefined) {
            queryParameters = queryParameters.set('effectUnitName', <any>effectUnitName);
        }
        if (userId !== undefined) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }
        if (causeUnitName !== undefined) {
            queryParameters = queryParameters.set('causeUnitName', <any>causeUnitName);
        }
        if (onsetDelay !== undefined) {
            queryParameters = queryParameters.set('onsetDelay', <any>onsetDelay);
        }
        if (durationOfAction !== undefined) {
            queryParameters = queryParameters.set('durationOfAction', <any>durationOfAction);
        }
        if (earliestMeasurementTime !== undefined) {
            queryParameters = queryParameters.set('earliestMeasurementTime', <any>earliestMeasurementTime);
        }
        if (latestMeasurementTime !== undefined) {
            queryParameters = queryParameters.set('latestMeasurementTime', <any>latestMeasurementTime);
        }
        if (limit !== undefined) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (sort !== undefined) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.apiKeys["access_token"]) {
            queryParameters = queryParameters.set('access_token', this.configuration.apiKeys["access_token"]);
        }

        // authentication (quantimodo_oauth2) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<any>(`${this.basePath}/v3/pairs`,
            {
                params: queryParameters,
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Post Request for Measurements CSV
     * Use this endpoint to schedule a CSV export containing all user measurements to be emailed to the user within 24 hours.
     * @param userId User&#39;s id
     */
    public measurementExportRequest(userId?: number): Observable<number> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (userId !== undefined) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.apiKeys["access_token"]) {
            queryParameters = queryParameters.set('access_token', this.configuration.apiKeys["access_token"]);
        }

        // authentication (quantimodo_oauth2) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<any>(`${this.basePath}/v2/measurements/exportRequest`,
            null,
            {
                params: queryParameters,
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Post a new set or update existing measurements to the database
     * You can submit or update multiple measurements in a \&quot;measurements\&quot; sub-array.  If the variable these measurements correspond to does not already exist in the database, it will be automatically added.
     * @param body An array of measurement sets containing measurement items you want to insert.
     * @param userId User&#39;s id
     */
    public postMeasurements(body: Array<MeasurementSet>, userId?: number): Observable<PostMeasurementsResponse> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postMeasurements.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (userId !== undefined) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.apiKeys["access_token"]) {
            queryParameters = queryParameters.set('access_token', this.configuration.apiKeys["access_token"]);
        }

        // authentication (quantimodo_oauth2) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/v3/measurements/post`,
            body,
            {
                params: queryParameters,
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Update a measurement
     * Update a previously submitted measurement
     * @param body The id as well as the new startTime, note, and/or value of the measurement to be updated
     */
    public updateMeasurement(body: MeasurementUpdate): Observable<CommonResponse> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateMeasurement.');
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.apiKeys["access_token"]) {
            queryParameters = queryParameters.set('access_token', this.configuration.apiKeys["access_token"]);
        }

        // authentication (quantimodo_oauth2) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/v3/measurements/update`,
            body,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

}