const avatars = ['https://res.cloudinary.com/dpmx02shl/image/upload/v1706631048/capitalSphereBank/avatar4_f4caao.svg', 'https://res.cloudinary.com/dpmx02shl/image/upload/v1706631048/capitalSphereBank/avatar2_awwphb.svg', 'https://res.cloudinary.com/dpmx02shl/image/upload/v1706631048/capitalSphereBank/avatar0_kira6n.svg', 'https://res.cloudinary.com/dpmx02shl/image/upload/v1706631048/capitalSphereBank/avatar3_x0euei.svg', 'https://res.cloudinary.com/dpmx02shl/image/upload/v1706631048/capitalSphereBank/avatar1_y5vqnk.svg'];

// Function to get a random avatar
export const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  //console.log(avatars[randomIndex])
  return avatars[randomIndex];
};

