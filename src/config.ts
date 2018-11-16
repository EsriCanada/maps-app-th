/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/**
 * Registered application id.
 * This is needed to be able to use premium
 * services such as routing and directions.
 */
export const appId = "b54efa235b7f455f91b14396090ad3e3";

/**
 * Users Portal URL.
 */
export const portalUrl = "https://www.arcgis.com"; // default Portal URL

/**
 * MapView options
 * See doc for details
 * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
 */
export const viewOptions = {
  scale: 5000
};

/**
 * OPTIONAL
 * WebMap id to use for this application.
 * You can update this WebMap id with your own.
 */
export const webMapItem = {
  portalItem: {
    // shared WebMap
    id: "326320c9eab3489d8d17bc389ce1e023"
  }
};
