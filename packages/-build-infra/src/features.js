'use strict';

function getFeatures() {
  const features = {
    SAMPLE_FEATURE_FLAG: null,
    RECORD_DATA_ERRORS: null,
  };

  const FEATURE_OVERRIDES = process.env.EMBER_DATA_FEATURE_OVERRIDE;
  if (FEATURE_OVERRIDES) {
    const forcedFeatures = FEATURE_OVERRIDES.split(',');
    for (var i = 0; i < forcedFeatures.length; i++) {
      let featureName = forcedFeatures[i];

      features[featureName] = true;
    }
  }

  return features;
}

module.exports = getFeatures();
