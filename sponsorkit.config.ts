import fs from "node:fs/promises";

import { BadgePreset, defineConfig, tierPresets } from "sponsorkit";

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
};

export default defineConfig({
  tiers: [
    {
      title: "Backers",
      preset: tierPresets.small,
    },
    {
      title: "Sponsors",
      monthlyDollars: 25,
      preset: tierPresets.base,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 50,
      preset: tierPresets.medium,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
    {
      title: "Platinum Sponsors",
      monthlyDollars: 500,
      preset: tierPresets.xl,
    },
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: past,
    },
  ],
  formats: ['png', 'svg'],
  async onSponsorsReady(sponsors) {
    await fs.writeFile(
      "sponsors.json",
      JSON.stringify(
        sponsors
          .filter((i) => i.privacyLevel !== "PRIVATE")
          .map((i) => {
            return {
              name: i.sponsor.name,
              login: i.sponsor.login,
              avatar: i.sponsor.avatarUrl,
              amount: i.monthlyDollars,
              link: i.sponsor.linkUrl || i.sponsor.websiteUrl,
              org: i.sponsor.type === "Organization",
            };
          })
          .sort((a, b) => b.amount - a.amount),
        null,
        2
      )
    );
  },
});
