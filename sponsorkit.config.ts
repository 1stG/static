import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: 'Backers',
      preset: tierPresets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 25,
      preset: tierPresets.base,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: tierPresets.xl,
    },
  ],
  includePastSponsors: true,
})
