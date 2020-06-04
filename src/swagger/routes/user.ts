/**
 * @swagger
 * /user:
 *  post:
 *    tags:
 *      - User
 *    description: Create User
 *    consumes:
 *      - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: User Object that needs to be added to the store
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *              - email
 *              - password
 *          properties:
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *    responses:
 *      "422":
 *          description: "Wrong/Invalid payload sent by user"
 *      "406":
 *          description: "Error while finding user in DB or saving user in DB"
 *      "409":
 *          description: "User Already Exists"
 *      "201":
 *          description: "User Registered"
 *
 *
 * /user/login:
 *  post:
 *    tags:
 *      - User
 *    description: Login
 *    consumes:
 *      - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: body
 *        description: User Object that needs to be added to the store
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *              - email
 *              - password
 *          properties:
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *    responses:
 *      "406":
 *          description: "Couldn't find user"
 *      "401":
 *          description: "Wrong Credentials"
 *      "200":
 *          description: "Login Successful"
 *          schema:
 *            type: object
 *            properties:
 *              token:
 *                  type: string
 *
 *
 * /user/{userId}:
 *  get:
 *    tags:
 *      - User
 *    description: Get your user details
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: "userId"
 *        in: "path"
 *        description: "Enter User Details"
 *        required: true
 *        type: "string"
 *    responses:
 *      "401":
 *          description: "Different User ID"
 *      "200":
 *          description: "Same user"
 *          schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                user:
 *                  type: object
 *                  properties:
 *                    _id:
 *                      type: string
 *                    email:
 *                      type: string
 *    security:
 *      - bearerAuth: []
 *
 * */