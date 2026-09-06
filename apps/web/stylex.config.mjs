export default {
  dev: process.env.NODE_ENV !== "production",
  runtimeInjection: false,
  treeshakeCompensation: true,
  styleResolution: "property-specificity",
  enableMediaQueryOrder: false,
  unstable_moduleResolution: { type: "commonJS" },
}
