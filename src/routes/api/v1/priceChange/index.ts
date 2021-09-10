import { Router } from 'express'
import PriceController from '@controllers/api/v1/price'
import { getPriceChangeIntervalValidation, getTokenPriceValidation } from '@controllers/api/v1/price/validations'

const router = Router()

/**
 * @api {get} /api/v1/pricechange Get price change for token over last 24 hours
 * @apiName GetTokenPriceChange
 * @apiGroup PriceChange
 *
 * @apiParam {String} tokenAddress The currency address
 *
 * @apiSuccess {String} priceChange The price change ratio of the token
 * @apiSuccess {String} currentPrice The current price of the token
 * @apiSuccess {String} previousPrice The previous price of the token
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  {
 *      "data": {
 *          "priceChange": "4.761727644165598",
 *          "currentPrice": "3760.8426158182515",
 *          "previousPrice": "3589.901293526158"
 *      }
 *  }
 *
 *
 * */
router.get(
  '/:tokenAddress',
  getTokenPriceValidation,
  PriceController.getPriceChange
)

/**
 * @api {post} /api/v1/pricechange Get price change for token over time duration
 * @apiName GetTokenPriceChangeOverDuration
 * @apiGroup PriceChange
 *
 * @apiParam {String} tokenAddress The currency address
 * @apiParam {Object} duration The duration object to calculate the price change over the timeframe
 * duration should be passed as an object according to https://day.js.org/docs/en/durations/creating
 * for example duration of {days: 1} means a duration of one day
 *
 * @apiSuccess {String} priceChange The price change ratio of the token
 * @apiSuccess {String} currentPrice The current price of the token
 * @apiSuccess {Object} previousPrice The previous price of the token
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  {
 *      "data": {
 *          "priceChange": "4.761727644165598",
 *          "currentPrice": "3760.8426158182515",
 *          "previousPrice": "3589.901293526158"
 *      }
 *  }
 *
 *
 * */
router.post(
  '/:tokenAddress',
  getTokenPriceValidation,
  PriceController.getPriceChange
)

/**
 * @api {post} /api/v1/pricechange Get price change for token over time duration
 * @apiName GetTokenPriceChangeOverDuration
 * @apiGroup PriceChange
 *
 * @apiParam {String} tokenAddress The currency address
 * @apiParam {Object} duration The duration object to calculate the price change over the timeframe
 * duration should be passed as an object according to https://day.js.org/docs/en/durations/creating
 * for example duration of {days: 1} means a duration of one day
 *
 * @apiSuccess {String} priceChange The price change ratio of the token
 * @apiSuccess {String} currentPrice The current price of the token
 * @apiSuccess {Object} previousPrice The previous price of the token
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  {
 *      "data": {
 *          "priceChange": "4.761727644165598",
 *          "currentPrice": "3760.8426158182515",
 *          "previousPrice": "3589.901293526158"
 *      }
 *  }
 *
 *
 * */
router.post(
  '/:tokenAddress',
  getTokenPriceValidation,
  PriceController.getPriceChange
)

/**
 * @api {get} /api/v1/pricechange/interval/:tokenAddress Get price changes over an interval for token
 * @apiName GetPriceChangeInterval
 * @apiGroup PriceChangeInterval
 *
 * @apiParam (Url) {String} tokenAddress The address of the token
 * @apiParam (Query) {Number=3600,86000} [interval=3600] The chunk in seconds
 * @apiParam (Query) {String="ALL","WEEK","MONTH"} [timeframe="MONTH"] How far to look back
 *
 * @apiSuccess {Object[]} priceChanges List of price changes
 * @apiSuccess {Number} priceChanges.timestamp The time in seconds at which the price change occurred
 * @apiSuccess {String} priceChanges.priceChange The price change ratio of the token at the specified timestamp
 * @apiSuccess {String} priceChanges.previousPrice The previous price at the specified timestamp
 * @apiSuccess {String} priceChanges.price The price at the specified timestamp
 *
 * @apiSuccessExample {json} Success-Response:
 *
 *  {
 *    "data": [
 *      {
 *        "timestamp": 1628542800,
          "priceChange": 0,
          "previousPrice": "43935.339297872226",
          "currentPrice": "43935.339297872226"
 *      }
 *    ]
 * }
 */
router.get(
  '/interval/:tokenAddress',
  getPriceChangeIntervalValidation,
  PriceController.getPriceChangeInterval
)

export default router
