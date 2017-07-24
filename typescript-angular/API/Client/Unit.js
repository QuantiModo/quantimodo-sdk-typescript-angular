/**
 * QuantiModo
 * QuantiModo makes it easy to retrieve normalized user data from a wide array of devices and applications. [Learn about QuantiModo](https://quantimo.do), check out our [docs](https://github.com/QuantiModo/docs) or contact us at [help.quantimo.do](https://help.quantimo.do).
 *
 * OpenAPI spec version: 5.8.5
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/// <reference path="api.d.ts" />
var API;
(function (API) {
    var Client;
    (function (Client) {
        'use strict';
        var Unit;
        (function (Unit) {
            var CategoryEnum;
            (function (CategoryEnum) {
                CategoryEnum[CategoryEnum["Distance"] = 'Distance'] = "Distance";
                CategoryEnum[CategoryEnum["Duration"] = 'Duration'] = "Duration";
                CategoryEnum[CategoryEnum["Energy"] = 'Energy'] = "Energy";
                CategoryEnum[CategoryEnum["Frequency"] = 'Frequency'] = "Frequency";
                CategoryEnum[CategoryEnum["Miscellany"] = 'Miscellany'] = "Miscellany";
                CategoryEnum[CategoryEnum["Pressure"] = 'Pressure'] = "Pressure";
                CategoryEnum[CategoryEnum["Proportion"] = 'Proportion'] = "Proportion";
                CategoryEnum[CategoryEnum["Rating"] = 'Rating'] = "Rating";
                CategoryEnum[CategoryEnum["Temperature"] = 'Temperature'] = "Temperature";
                CategoryEnum[CategoryEnum["Volume"] = 'Volume'] = "Volume";
                CategoryEnum[CategoryEnum["Weight"] = 'Weight'] = "Weight";
            })(CategoryEnum = Unit.CategoryEnum || (Unit.CategoryEnum = {}));
        })(Unit = Client.Unit || (Client.Unit = {}));
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
