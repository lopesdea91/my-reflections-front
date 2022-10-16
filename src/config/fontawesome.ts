/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser, faHome, faHashtag, faBookmark, faXmark, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
    faUser, faHome, faHashtag, faBookmark, faXmark, faArrowLeft, faBars,
    faTwitter,
    faBell
)

export {
    FontAwesomeIcon
}