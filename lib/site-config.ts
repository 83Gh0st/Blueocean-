// ---------------------------------------------------------------------------
// Central site configuration.
// Edit the values below to update contact details, socials and metadata
// across the entire site — everything reads from this one file.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Blue Ocean Chemicals",
  legalName: "Blue Ocean For Chemicals Manufacturing LLC",
  tagline: "Empowering performance through water innovation.",
  description:
    "Blue Ocean For Chemicals Manufacturing LLC: decades of combined expertise in chemical manufacturing and water treatment. Reverse Osmosis, Chilled Water, Cooling Water, Boiler, Swimming Pool and Potable Water treatment chemistry, manufactured in Ajman, UAE.",
  url: "https://www.blueoceanchemical.com",

  address: {
    line1: "Unit 12, Industrial Area 2",
    line2: "Ajman, United Arab Emirates",
    full: "Unit No. 12, Industrial Area 2, Ajman, United Arab Emirates",
    mapsQuery: "Industrial Area 2, Ajman, United Arab Emirates",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=Industrial+Area+2%2C+Ajman%2C+United+Arab+Emirates",
  },

  contact: {
    salesPhone: "+971 56 115 4831",
    salesPhoneHref: "tel:+971561154831",
    accountsPhone: "+971 56 115 4892",
    accountsPhoneHref: "tel:+971561154892",
    salesEmail: "sales@blueoceanchemical.com",
    generalEmail: "info@blueoceanchemical.com",
  },

  // wa.me requires the number in international format with no leading + or spaces.
  whatsapp: {
    number: "971561154831",
    defaultMessage:
      "Hello Blue Ocean Chemicals, I'd like to enquire about your water treatment chemicals.",
  },

  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}
