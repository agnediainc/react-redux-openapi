/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The Tag model module.
* @module model/Tag
* @version 1.0.0
*/
export default class Tag {
    /**
    * Constructs a new <code>Tag</code>.
    * @alias module:model/Tag
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Tag} obj Optional instance to populate.
    * @return {module:model/Tag} The populated <code>Tag</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tag();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;








}


