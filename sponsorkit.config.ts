import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 25,
      preset: presets.base,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: presets.xl,
    },
  ]
})
