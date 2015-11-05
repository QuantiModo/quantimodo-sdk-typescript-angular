/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class VariableCategoryApi {
        protected basePath = 'https://app.quantimo.do/api/v2';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }


        public variableCategoriesGet (name?: string, fillingValue?: number, maximumAllowedValue?: number, minimumAllowedValue?: number, durationOfAction?: number, onsetDelay?: number, combinationOperation?: string, updated?: number, causeOnly?: boolean, _public?: number, outcome?: boolean, createdAt?: string, updatedAt?: string, imageUrl?: string, defaultUnitId?: number, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_23> {
            const path = this.basePath + '/variableCategories';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (name !== undefined) {
                queryParameters['name'] = name;
            }

            if (fillingValue !== undefined) {
                queryParameters['filling_value'] = fillingValue;
            }

            if (maximumAllowedValue !== undefined) {
                queryParameters['maximum_allowed_value'] = maximumAllowedValue;
            }

            if (minimumAllowedValue !== undefined) {
                queryParameters['minimum_allowed_value'] = minimumAllowedValue;
            }

            if (durationOfAction !== undefined) {
                queryParameters['duration_of_action'] = durationOfAction;
            }

            if (onsetDelay !== undefined) {
                queryParameters['onset_delay'] = onsetDelay;
            }

            if (combinationOperation !== undefined) {
                queryParameters['combination_operation'] = combinationOperation;
            }

            if (updated !== undefined) {
                queryParameters['updated'] = updated;
            }

            if (causeOnly !== undefined) {
                queryParameters['cause_only'] = causeOnly;
            }

            if (_public !== undefined) {
                queryParameters['public'] = _public;
            }

            if (outcome !== undefined) {
                queryParameters['outcome'] = outcome;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
            }

            if (imageUrl !== undefined) {
                queryParameters['image_url'] = imageUrl;
            }

            if (defaultUnitId !== undefined) {
                queryParameters['default_unit_id'] = defaultUnitId;
            }

            if (limit !== undefined) {
                queryParameters['limit'] = limit;
            }

            if (offset !== undefined) {
                queryParameters['offset'] = offset;
            }

            if (sort !== undefined) {
                queryParameters['sort'] = sort;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public variableCategoriesPost (body?: VariableCategory, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_24> {
            const path = this.basePath + '/variableCategories';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: body,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public variableCategoriesIdGet (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_24> {
            const path = this.basePath + '/variableCategories/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling variableCategoriesIdGet');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public variableCategoriesIdPut (id: number, body?: VariableCategory, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/variableCategories/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling variableCategoriesIdPut');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: path,
                json: true,
                data: body,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public variableCategoriesIdDelete (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/variableCategories/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling variableCategoriesIdDelete');
            }
            let httpRequestParams: any = {
                method: 'DELETE',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
    }
}