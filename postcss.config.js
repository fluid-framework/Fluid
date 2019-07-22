module.exports = {
  plugins: [
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: true,
          normalizeWhitespace: true,
          uniqueSelectors: true,
          rawCache: true,
          calc: true,
          colormin: true,
          convertValues: { length: false, angle: false },
          discardDuplicates: true,
          discardEmpty: true,
          discardOverridden: true,
          mergeLonghand: true,
          mergeRules: true,
          minifyGradients: true,
          minifyParams: true,
          normalizeCharset: true,
          normalizeDisplayValues: true,
          normalizePositions: true,
          normalizeRepeatStyle: true,
          normalizeString: true,
          normalizeTimingFunctions: true,
          normalizeUnicode: true,
          normalizeUrl: true,
          orderedValues: true,
          reduceInitial: true,
          reduceTransforms: true,
          svgo: true,
          minifySelectors: false,
          minifyFontValues: false
        }
      ]
    })
  ]
};
