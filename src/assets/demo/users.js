import currentUserAvatar from '../../assets/demo/avatars/avatar.jpeg';
import rachelAvatar from '../../assets/demo/avatars/rachel_avatar.jpg';

const RAS = {
  name: 'ras',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Logo_RAS_2016.png/400px-Logo_RAS_2016.png'
}

const RACHEL = {
  name: 'rachel',
  avatar: rachelAvatar
}

const LAURA = {
  name: 'laura',
  avatar: 'https://vignette.wikia.nocookie.net/starwars/images/7/77/ReyVFcover-TROS.png/revision/latest?cb=20190525225316'
}

const SHUR = {
  name: 'shur',
  avatar: 'https://shurfineinspires.com/wp-content/uploads/2016/04/shurfine_logo.png'
}

export const CURRENT_USER = {
  avatar: currentUserAvatar,
  name: 'carlos',
  friends: [RAS, RACHEL, LAURA, SHUR]
};
