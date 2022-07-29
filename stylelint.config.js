module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-config-tailwindcss'
  ],
  rules: {
    'font-family-name-quotes': null,
    'font-family-no-missing-generic-family-keyword': null,
    'string-quotes': 'single',
    'max-nesting-depth': [
      2,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes']
      }
    ],
    'max-line-length': 100,
    'declaration-block-no-duplicate-properties': true,
    'no-duplicate-selectors': true,
    'no-descending-specificity': null,
    'selector-class-pattern': '^([a-z][a-z0-9]*)((-|__)[a-z0-9]+)*$',
    'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: 'rpx'
      }
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ]
  }
}
