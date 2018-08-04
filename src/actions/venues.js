
import 'isomorphic-unfetch';
import { VENUES_SET } from "../reducers/venues";
const CLIENT_ID = 'K5CWRLSIASCSQI3C0QNXELDTYARJQ31EEHRQDCVD0IDKGH2Q'
const CLIENT_SECRET = 'DX4QXPFI32LMNVOLOZMVKSHENTKK2SMU3Z3IDQX3C4S2TMPQ'
export const getVenues = (geocode) => {
  return async (dispatch, _) => {
    const QS = `client_id=${CLIENT_ID}
    &client_secret=${CLIENT_SECRET}
    &query=lunch
    &near=${geocode}
    &v=20180323
    &limit=3`
    const req = await (await fetch(`https://api.foursquare.com/v2/venues/explore?${QS}`)).json()
    console.log(req)
    const list = req.response.groups[0].items
    return dispatch({
      type: VENUES_SET,
      payload: {
        list: list
      }
    })
  }
}