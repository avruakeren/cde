export type SiteConfig = {
  name: string;
  tagline: string;
  email: string;
  socials: {
    label: string;
    href: string;
    handle: string;
  }[];
  whatsapp?: string;
};

export const site: SiteConfig = {
  name: "Creative Digital Education",
  tagline: "Mitra digital lembaga pendidikan",
  email: "educationcreativedigital@gmail.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/digiedu", handle: "@digiedu" },
    { label: "YouTube", href: "https://youtube.com/@CreativeDigitalEducation", handle: "Creative Digital Education" },
  ],
  whatsapp: "",
};
