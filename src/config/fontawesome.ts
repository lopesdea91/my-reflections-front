/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser, faUserPlus, faHome, faHashtag, faBookmark, faXmark, faArrowLeft, faBars, faShare, faRotate, faThumbsUp, faThumbsDown, faEllipsis, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
    faUser, faUserPlus, faHome, faHashtag, faBookmark, faXmark, faArrowLeft, faBars, faShare, faRotate, faThumbsUp, faThumbsDown, faEllipsis, faRightToBracket,
    faTwitter, faGoogle,
    faBell
)

export {
    FontAwesomeIcon
}