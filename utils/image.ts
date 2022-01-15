export const optimizeExternalImage = (url: string, width: number = 1000) => {
  return `https://res.cloudinary.com/demo/image/fetch/w_${width}/f_auto/${url}`;
};

export const cloudinaryImage = (cloudinaryPath: string) => {
  return `https://res.cloudinary.com/johnprops/image/upload/c_scale,f_auto,q_100,w_1000/${cloudinaryPath}`;
};
