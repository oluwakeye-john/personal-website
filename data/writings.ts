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
      "Let's take a look at how we can create reusable components with VueJS using props and slots.",
  },
  {
    title: "Capturing Media With JavaScript",
    image: "https://dev-to-uploads.s3.amazonaws.com/i/m017tqqle7h4k31ewymy.jpg",
    url: "https://dev.to/oluwakeyejohn/capturing-media-with-javascript-393g",
    description:
      "In this post, we will access the media inputs of a device using the MediaDevices API.",
  },
  {
    title: "My New Website (tools and kits)",
    image: "https://dev-to-uploads.s3.amazonaws.com/i/6fmr7uuzu3qim31358go.jpg",
    url: "https://dev.to/oluwakeyejohn/my-new-website-tools-and-kits-2ge1",
    description:
      "After a long time of procastinating, I've finally been able to make time to create my own personal website. This website involves a relatively small tech stack and doesn't cost a dime as it involves no hosting or backend. In this post, I will like to share what the website is built on with you.",
  },
];

export default writings;
