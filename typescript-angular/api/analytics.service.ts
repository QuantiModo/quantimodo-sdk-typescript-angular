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

import { Correlation } from '../model/correlation';
import { GetCorrelationsResponse } from '../model/getCorrelationsResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';


@Injectable()
export class AnalyticsService {

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
     * Get correlation explanations
     * Get explanations of  correlations based on data from a single user.
     * @param causeVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param effectVariableName Name of the hypothetical outcome variable.  Ex: Overall Mood
     */
    public getCorrelationExplanations(causeVariableName?: string, effectVariableName?: string): Observable<Array<Correlation>> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (causeVariableName !== undefined) {
            queryParameters = queryParameters.set('causeVariableName', <any>causeVariableName);
        }
        if (effectVariableName !== undefined) {
            queryParameters = queryParameters.set('effectVariableName', <any>effectVariableName);
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

        return this.httpClient.get<any>(`${this.basePath}/v3/correlations/explanations`,
            {
                params: queryParameters,
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Get correlations
     * Get a list of correlations that can be used to display top predictors of a given outcome like mood, for instance.
     * @param causeVariableName Name of the hypothetical predictor variable.  Ex: Sleep Duration
     * @param effectVariableName Name of the hypothetical outcome variable.  Ex: Overall Mood
     * @param sort Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order.
     * @param limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
     * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param userId User&#39;s id
     * @param correlationCoefficient Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action
     * @param updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param outcomesOfInterest Only include correlations for which the effect is an outcome of interest for the user
     * @param clientId Your QuantiModo client id can be obtained by creating an app at https://builder.quantimo.do
     * @param commonOnly Return only public, anonymized and aggregated population data instead of user-specific variables
     * @param platform Ex: chrome, android, ios, web
     */
    public getCorrelations(causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, userId?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, clientId?: string, commonOnly?: boolean, platform?: string): Observable<GetCorrelationsResponse> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (causeVariableName !== undefined) {
            queryParameters = queryParameters.set('causeVariableName', <any>causeVariableName);
        }
        if (effectVariableName !== undefined) {
            queryParameters = queryParameters.set('effectVariableName', <any>effectVariableName);
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
        if (userId !== undefined) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }
        if (correlationCoefficient !== undefined) {
            queryParameters = queryParameters.set('correlationCoefficient', <any>correlationCoefficient);
        }
        if (updatedAt !== undefined) {
            queryParameters = queryParameters.set('updatedAt', <any>updatedAt);
        }
        if (outcomesOfInterest !== undefined) {
            queryParameters = queryParameters.set('outcomesOfInterest', <any>outcomesOfInterest);
        }
        if (clientId !== undefined) {
            queryParameters = queryParameters.set('clientId', <any>clientId);
        }
        if (commonOnly !== undefined) {
            queryParameters = queryParameters.set('commonOnly', <any>commonOnly);
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

        return this.httpClient.get<any>(`${this.basePath}/v3/correlations`,
            {
                params: queryParameters,
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

}