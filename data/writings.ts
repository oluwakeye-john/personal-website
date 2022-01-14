export interface Writing {
  image: string;
  title: string;
  description: string;
  url: string;
}

const writings: Writing[] = [
  {
    title: "Building Reusable Components with Vue",
    image: "https://dev-to-uploads.s3.amazonaws.com/i/hq2z2m2m81i06nwmb534.jpg",
    url: "https://dev.to/oluwakeyejohn/building-reusable-components-with-vue-2laa",
    description:
      "Let's take a look at how we can create reusable components with VueJS using props and slots. components with VueJS using props and slots.",
  },
  {
    title: "Capturing Media With JavaScript",
    image: "/images/writing2.png",
    url: "https://dev.to/oluwakeyejohn/capturing-media-with-javascript-393g",
    description:
      "In this post, we will access the media inputs of a device using the MediaDevices API.using the MediaDevices API.",
  },
  {
    title: "My New Website (tools and kits)",
    image: "https://dev-to-uploads.s3.amazonaws.com/i/6fmr7uuzu3qim31358go.jpg",
    url: "https://dev.to/oluwakeyejohn/my-new-website-tools-and-kits-2ge1",
    description:
      "After a long time of procastinating, I've finally been able to make time to create my own personal website. personal website",
  },
];

export default writings;
