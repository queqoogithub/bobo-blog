const production = process.env.NODE_ENV === "production";

export const url = production
  ? "https://www.yoursite.com"
  : "http://localhost:1337";

export const apiToken = "04735e1b198b1ac25aab3b12c91f2963acdb91b33386071002a05ea2281629dd51e1be3f0da609c304b681c9817e9ca64fc454f4ca446a583af69985663de9cee6f92c3ff7e062adc07a932b0cdbe9ab15ab49e4156e57c5bd059210f8c4ad1dd5fc7bd5eb2930bdc94959ad1f2d360c916c0fc482cfc066d880ded089a64dc0";