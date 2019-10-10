import {
  HTTP
} from '../utils/http.js'
import {
  likeUrl,
  likeCancelUrl
} from '../api/index.js'

class LikeModel extends HTTP {
  like(behavior, artId, category) {
    let url = behavior === 'like' ? likeUrl : likeCancelUrl
    this.request({
      url,
      method: 'POST',
      data: {
        artId,
        type: category
      }
    })
  }
}

export {
  LikeModel
}